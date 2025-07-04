import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import AccessibilityControls from "./AccessibilityControls";
import { preQuestions } from "../data/preQuestions";
import { postQuestions } from "../data/postQuestions";
import {
  convertFormDataToSubmission,
  type QuestionnaireSubmission,
} from "../types/responses";
import {
  FiHome,
  FiVolume2,
  FiX,
  FiSave,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { questionnaireService } from "../services/QuestionnaireService";

const Questionnaire: React.FC = () => {
  const { part } = useParams<{ part: string }>();
  const navigate = useNavigate();
  const { formData, updateFormData, fontSize, highContrast, language } =
    useAppContext();

  const questions = part === "pre" ? preQuestions : postQuestions;
  const [currentStep, setCurrentStep] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showError, setShowError] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [showHomeConfirm, setShowHomeConfirm] = useState(false);

  useEffect(() => {
    setStartTime(new Date());
    setCurrentStep(0);
    if (window.speechSynthesis) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, [part]);

  useEffect(() => {
    return () => {
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [speechSynthesis, language]);

  const currentQuestion = questions[currentStep];

  // Check if current question should be displayed based on conditional logic
  const shouldDisplayQuestion = (question: any): boolean => {
    if (!question.conditionalDisplay) return true;

    const { questionId, value } = question.conditionalDisplay;
    const dependentAnswer = formData[questionId];

    if (Array.isArray(dependentAnswer)) {
      return dependentAnswer.includes(value);
    }

    return dependentAnswer === value;
  };

  const getSupportedLanguage = (preferredLang: string): string => {
    const voices = speechSynthesis?.getVoices() || [];

    if (voices.some((voice) => voice.lang === preferredLang)) {
      return preferredLang;
    }

    const genericLang = preferredLang.split("-")[0];
    const matchingVoice = voices.find((voice) =>
      voice.lang.startsWith(genericLang),
    );
    if (matchingVoice) {
      return matchingVoice.lang;
    }

    return navigator.language || "en-US";
  };

  const readQuestion = () => {
    if (!speechSynthesis) {
      setSpeechError(
        language === "de"
          ? "Text-zu-Sprache wird von Ihrem Browser nicht unterstützt."
          : "Text-to-speech is not supported by your browser.",
      );
      return;
    }

    speechSynthesis.cancel();
    setSpeechError(null);

    try {
      const questionText = currentQuestion.question[language];
      const optionsText = currentQuestion.options
        ? (language === "de"
            ? "Die Antwortmöglichkeiten sind: "
            : "The answer options are: ") +
          currentQuestion.options.map((opt) => opt.label[language]).join(", ")
        : "";

      const utterance = new SpeechSynthesisUtterance(
        questionText + ". " + optionsText,
      );

      const supportedLang = getSupportedLanguage(
        language === "de" ? "de-DE" : "en-US",
      );
      utterance.lang = supportedLang;
      utterance.rate = 0.9;

      utterance.onstart = () => {
        setIsReading(true);
        setSpeechError(null);
      };

      utterance.onend = () => {
        setIsReading(false);
        setSpeechError(null);
      };

      utterance.onerror = (event) => {
        setIsReading(false);

        if (event.error !== "interrupted") {
          console.error("SpeechSynthesisUtterance error:", event);
          const errorMessage =
            language === "de"
              ? "Es gab ein Problem beim Vorlesen des Textes. Bitte versuchen Sie es später erneut."
              : "There was a problem reading the text. Please try again later.";
          setSpeechError(errorMessage);
        }
      };

      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Error initializing speech synthesis:", error);
      setIsReading(false);
      setSpeechError(
        language === "de"
          ? "Ein unerwarteter Fehler ist aufgetreten."
          : "An unexpected error occurred.",
      );
    }
  };

  const stopReading = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsReading(false);
      setSpeechError(null);
    }
  };

  const findNextVisibleQuestion = (startIndex: number): number => {
    for (let i = startIndex; i < questions.length; i++) {
      if (shouldDisplayQuestion(questions[i])) {
        return i;
      }
    }
    return questions.length;
  };

  const findPreviousVisibleQuestion = (startIndex: number): number => {
    for (let i = startIndex; i >= 0; i--) {
      if (shouldDisplayQuestion(questions[i])) {
        return i;
      }
    }
    return 0;
  };

  const handleHomeClick = () => {
    setShowHomeConfirm(true);
  };

  const confirmGoHome = () => {
    stopReading();
    navigate("/");
  };

  const cancelGoHome = () => {
    setShowHomeConfirm(false);
  };

  const handleSubmit = async (startTime: Date) => {
    const endTime = new Date();

    // Convert form data to typed submission
    const typedSubmission = convertFormDataToSubmission(
      formData,
      part as "pre" | "post",
      startTime,
      endTime,
      language,
    );

    // sample request to submit questionnaire
    try {
      if (part === "pre") {
        await questionnaireService.submitQuestionnaire(
          typedSubmission as QuestionnaireSubmission,
        );
      } else {
        await questionnaireService.submitQuestionnaire(
          typedSubmission as QuestionnaireSubmission,
        );
      }
    } catch (error) {
      console.log("Error submitting questionnaire:", error);
    } finally {
      navigate("/patient/mos/thank-you");
    }
  };

  const handleNext = async () => {
    const isAnswered =
      formData[currentQuestion.id] !== undefined &&
      formData[currentQuestion.id] !== null &&
      (!Array.isArray(formData[currentQuestion.id]) ||
        (formData[currentQuestion.id] as string[]).length > 0);

    if (currentQuestion.required && !isAnswered) {
      setShowError(true);
      return;
    }

    setShowError(false);
    stopReading();

    if (currentQuestion.conditionalNext) {
      const answer = formData[currentQuestion.id];
      const nextStep = currentQuestion.conditionalNext[answer as string];
      if (nextStep !== undefined) {
        const nextVisibleStep = findNextVisibleQuestion(nextStep);
        setCurrentStep(nextVisibleStep);
        return;
      }
    }

    const nextStep = findNextVisibleQuestion(currentStep + 1);
    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
    } else {
      if (!startTime) return;
      await handleSubmit(startTime);
    }
  };

  const handlePrevious = () => {
    stopReading();
    const prevStep = findPreviousVisibleQuestion(currentStep - 1);
    if (prevStep >= 0) {
      setCurrentStep(prevStep);
    } else {
      setShowHomeConfirm(true);
    }
  };

  const handleInputChange = (id: string, value: string | string[]) => {
    setShowError(false);
    updateFormData(id, value);
  };

  const renderQuestionContent = () => {
    const question = currentQuestion;

    switch (question.type) {
      case "radio":
        return (
          <div className="space-y-6">
            {question.options?.map((option, idx) => (
              <label
                key={idx}
                className={`block p-6 rounded-lg border-2 transition-all ${
                  highContrast
                    ? formData[question.id] === option.value
                      ? "bg-blue-900 border-white"
                      : "bg-black border-white"
                    : formData[question.id] === option.value
                      ? "bg-blue-100 border-blue-500 shadow-lg"
                      : "bg-white border-gray-200 hover:border-blue-300"
                } cursor-pointer`}
              >
                <div className="flex items-start">
                  <div className={`flex items-center h-6 mt-1`}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={formData[question.id] === option.value}
                      onChange={() =>
                        handleInputChange(question.id, option.value)
                      }
                      className={`w-6 h-6 ${highContrast ? "accent-white" : "accent-blue-600"}`}
                    />
                  </div>
                  <div className="ml-4">
                    <span className={`${fontSize} font-medium`}>
                      {option.label[language]}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className="space-y-6">
            {question.options?.map((option, idx) => {
              const selectedValues = (formData[question.id] as string[]) || [];
              const isChecked = selectedValues.includes(option.value);

              return (
                <label
                  key={idx}
                  className={`block p-6 rounded-lg border-2 ${
                    highContrast
                      ? isChecked
                        ? "bg-blue-900 border-white"
                        : "bg-black border-white"
                      : isChecked
                        ? "bg-blue-100 border-blue-500"
                        : "bg-white border-gray-200 hover:border-blue-300"
                  } transition-colors cursor-pointer`}
                >
                  <div className="flex items-start">
                    <div className={`flex items-center h-6 mt-1`}>
                      <input
                        type="checkbox"
                        name={question.id}
                        value={option.value}
                        checked={isChecked}
                        onChange={() => {
                          const currentValues = [
                            ...((formData[question.id] as string[]) || []),
                          ];
                          const newValues = isChecked
                            ? currentValues.filter((v) => v !== option.value)
                            : [...currentValues, option.value];
                          handleInputChange(question.id, newValues);
                        }}
                        className={`w-6 h-6 ${highContrast ? "accent-white" : "accent-blue-600"}`}
                      />
                    </div>
                    <div className="ml-4">
                      <span className={`${fontSize} font-medium`}>
                        {option.label[language]}
                      </span>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        );

      case "scale":
        return (
          <div
            className={`mt-8 ${highContrast ? "text-white" : "text-gray-800"}`}
          >
            <div className="flex justify-between mb-2">
              <span>{question.scaleStart?.[language]}</span>
              <span>{question.scaleEnd?.[language]}</span>
            </div>
            <div className={`grid grid-cols-5 gap-4`}>
              {[0, 1, 2, 3, 4].map((value) => (
                <button
                  key={value}
                  onClick={() =>
                    handleInputChange(question.id, value.toString())
                  }
                  className={`py-4 rounded-lg text-center ${fontSize} font-bold 
                    ${
                      formData[question.id] === value.toString()
                        ? highContrast
                          ? "bg-white text-black"
                          : "bg-blue-600 text-white"
                        : highContrast
                          ? "bg-gray-800 text-white border-2 border-white hover:bg-gray-700"
                          : "bg-white border-2 border-gray-300 hover:border-blue-300"
                    }
                  `}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span
                className={`${fontSize === "text-xl" ? "text-sm" : "text-base"}`}
              >
                {question.scaleLabels?.[language][0] || ""}
              </span>
              <span
                className={`${fontSize === "text-xl" ? "text-sm" : "text-base"} text-center`}
              >
                {question.scaleLabels?.[language][2] || ""}
              </span>
              <span
                className={`${fontSize === "text-xl" ? "text-sm" : "text-base"} text-right`}
              >
                {question.scaleLabels?.[language][4] || ""}
              </span>
            </div>
          </div>
        );

      case "text":
        return (
          <div className="mt-6">
            <textarea
              value={(formData[question.id] as string) || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              rows={5}
              className={`w-full p-4 rounded-lg border-2 ${
                highContrast
                  ? "bg-black text-white border-white focus:border-blue-300"
                  : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
              } ${fontSize}`}
              placeholder={question.placeholder || ""}
            />
          </div>
        );

      case "number":
        return (
          <div className="mt-6">
            <input
              type="number"
              value={(formData[question.id] as string) || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              min={0}
              className={`w-full p-4 rounded-lg border-2 ${
                highContrast
                  ? "bg-black text-white border-white focus:border-blue-300"
                  : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
              } ${fontSize}`}
              placeholder={question.placeholder || ""}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Calculate progress based on visible questions
  const visibleQuestions = questions.filter(shouldDisplayQuestion);
  const currentVisibleIndex = visibleQuestions.findIndex(
    (q) => q.id === currentQuestion.id,
  );
  const progress = Math.round(
    ((currentVisibleIndex + 1) / visibleQuestions.length) * 100,
  );

  return (
    <div
      className={`min-h-screen ${highContrast ? "bg-black text-white" : "bg-blue-50 text-blue-900"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        <AccessibilityControls />

        {/* Home Confirmation Modal */}
        {showHomeConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`${highContrast ? "bg-black border-2 border-white" : "bg-white"} rounded-xl p-8 max-w-md mx-4`}
            >
              <h3 className={`${fontSize} font-bold mb-4`}>
                {language === "de"
                  ? "Zur Startseite zurückkehren?"
                  : "Return to home page?"}
              </h3>
              <p className={`${fontSize} mb-6`}>
                {language === "de"
                  ? "Ihre bisherigen Antworten gehen verloren. Sind Sie sicher?"
                  : "Your current answers will be lost. Are you sure?"}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={confirmGoHome}
                  className={`flex-1 py-3 px-4 rounded-lg ${
                    highContrast
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-red-600 text-white hover:bg-red-700"
                  } transition-colors ${fontSize} font-medium`}
                >
                  {language === "de" ? "Ja, zurück" : "Yes, go back"}
                </button>
                <button
                  onClick={cancelGoHome}
                  className={`flex-1 py-3 px-4 rounded-lg ${
                    highContrast
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  } transition-colors ${fontSize} font-medium`}
                >
                  {language === "de" ? "Abbrechen" : "Cancel"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-12">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-4">
                <span className={`${fontSize} font-medium`}>
                  {language === "de"
                    ? `Frage ${currentVisibleIndex + 1} von ${visibleQuestions.length}`
                    : `Question ${currentVisibleIndex + 1} of ${visibleQuestions.length}`}
                </span>
                <button
                  onClick={handleHomeClick}
                  className={`p-2 rounded-full ${
                    highContrast
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition-colors`}
                  aria-label={
                    language === "de" ? "Zur Startseite" : "Go to home"
                  }
                  title={language === "de" ? "Zur Startseite" : "Go to home"}
                >
                  <FiHome className="w-5 h-5" />
                </button>
              </div>
              <span className={`${fontSize} font-medium`}>{progress}%</span>
            </div>
            <div
              className={`w-full h-4 rounded-full ${highContrast ? "bg-gray-800" : "bg-gray-200"}`}
            >
              <div
                className={`h-4 rounded-full ${highContrast ? "bg-white" : "bg-blue-600"} transition-all duration-500 ease-out`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Section title */}
          <div
            className={`${highContrast ? "bg-blue-900 text-white border-white border-2" : "bg-blue-700 text-white"} rounded-t-xl px-6 py-4`}
          >
            <h2
              className={`${fontSize === "text-xl" ? "text-2xl" : fontSize === "text-2xl" ? "text-3xl" : fontSize === "text-3xl" ? "text-4xl" : "text-5xl"} font-bold`}
            >
              {part === "pre"
                ? language === "de"
                  ? "Teil 1: Vorerhebung"
                  : "Part 1: Pre-assessment"
                : language === "de"
                  ? "Teil 2: Erfolgskontrolle"
                  : "Part 2: Success evaluation"}
            </h2>
            <p className={`${fontSize === "text-xl" ? "text-lg" : fontSize}`}>
              {currentQuestion.section[language]}
            </p>
          </div>

          {/* Question content */}
          <div
            className={`${highContrast ? "bg-black border-2 border-white" : "bg-white shadow-xl"} rounded-b-xl p-8 md:p-10 mb-8`}
          >
            <div className="mb-8">
              <div className="flex items-start justify-between mb-6">
                <h3
                  className={`${fontSize === "text-xl" ? "text-2xl" : fontSize === "text-2xl" ? "text-3xl" : fontSize === "text-3xl" ? "text-4xl" : "text-5xl"} font-bold flex-1 mr-4`}
                >
                  {currentQuestion.question[language]}
                </h3>
                <button
                  onClick={isReading ? stopReading : readQuestion}
                  className={`p-3 rounded-full flex-shrink-0 ${
                    highContrast
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  } transition-colors`}
                  aria-label={
                    isReading
                      ? language === "de"
                        ? "Vorlesen stoppen"
                        : "Stop reading"
                      : language === "de"
                        ? "Frage vorlesen"
                        : "Read question"
                  }
                >
                  <FiVolume2
                    className={`w-6 h-6 ${isReading ? "animate-pulse" : ""}`}
                  />
                </button>
              </div>
              {currentQuestion.description && (
                <p
                  className={`${fontSize} mb-6 ${highContrast ? "text-gray-300" : "text-gray-600"}`}
                >
                  {currentQuestion.description[language]}
                </p>
              )}{" "}
              {speechError && (
                <div
                  className={`p-4 mb-6 rounded-lg ${highContrast ? "bg-red-900 text-white" : "bg-red-100 text-red-800"} flex items-center`}
                >
                  <FiX className="w-6 h-6 mr-2" />
                  <span className={fontSize}>{speechError}</span>
                </div>
              )}{" "}
              {showError && (
                <div
                  className={`p-4 mb-6 rounded-lg ${highContrast ? "bg-red-900 text-white" : "bg-red-100 text-red-800"} flex items-center`}
                >
                  <FiX className="w-6 h-6 mr-2" />
                  <span className={fontSize}>
                    {language === "de"
                      ? "Bitte wählen Sie eine Antwort aus, bevor Sie fortfahren."
                      : "Please select an answer before continuing."}
                  </span>
                </div>
              )}
              {renderQuestionContent()}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={handlePrevious}
                className={`flex items-center py-4 px-6 rounded-lg ${
                  highContrast
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } transition-colors ${fontSize} font-medium`}
              >
                <FiChevronLeft className="w-6 h-6 mr-2" />
                {language === "de" ? "Zurück" : "Back"}
              </button>

              <button
                onClick={handleNext}
                className={`flex items-center py-4 px-6 rounded-lg ${
                  highContrast
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                } transition-colors ${fontSize} font-bold ${
                  currentQuestion.required &&
                  (formData[currentQuestion.id] === undefined ||
                    formData[currentQuestion.id] === null ||
                    (Array.isArray(formData[currentQuestion.id]) &&
                      (formData[currentQuestion.id] as string[]).length ===
                        0) ||
                    formData[currentQuestion.id] === "")
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {" "}
                {currentVisibleIndex === visibleQuestions.length - 1 ? (
                  <>
                    <FiSave className="w-6 h-6 mr-2" />
                    {language === "de" ? "Abschließen" : "Complete"}
                  </>
                ) : (
                  <>
                    {language === "de" ? "Weiter" : "Next"}
                    <FiChevronRight className="w-6 h-6 ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
