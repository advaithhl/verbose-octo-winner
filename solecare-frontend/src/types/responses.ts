export interface QuestionnaireResponse {
  id: string;
  value: string | string[] | null;
  completedAt: Date;
  questionType: 'radio' | 'checkbox' | 'text' | 'number' | 'scale';
}

export interface QuestionnaireSubmission {
  submissionId: string;
  userId: string;
  questionnaireType: 'pre' | 'post';
  startedAt: Date;
  completedAt: Date;
  completionTimeMinutes: number;
  language: 'de' | 'en';
  responses: QuestionnaireResponse[];
}

export interface QuestionnaireSubmissionSummary {
  submissionId: string;
  questionnaireType: 'pre' | 'post';
  completedAt: Date;
  completionTimeMinutes: number;
  language: 'de' | 'en';
  totalQuestions: number;
  answeredQuestions: number;
  completionRate: number;
}

export interface PatientQuestionnaireHistory {
  patientId: string;
  submissions: QuestionnaireSubmission[];
  totalSubmissions: number;
  lastSubmission?: Date;
}

// Utility type for form data (what's currently stored in context)
export type FormData = {
  [key: string]: string | string[] | null;
};

// Helper functions to work with the responses array
export function getResponseValue(submission: QuestionnaireSubmission, questionId: string): string | string[] | null {
  const response = submission.responses.find(r => r.id === questionId);
  return response?.value || null;
}

export function getResponsesBySection(submission: QuestionnaireSubmission, sectionPrefix: string): QuestionnaireResponse[] {
  return submission.responses.filter(r => r.id.startsWith(sectionPrefix));
}

export function getNumericResponse(submission: QuestionnaireSubmission, questionId: string): number {
  const value = getResponseValue(submission, questionId);
  return typeof value === 'string' ? parseInt(value) || 0 : 0;
}

export function getStringResponse(submission: QuestionnaireSubmission, questionId: string): string {
  const value = getResponseValue(submission, questionId);
  return typeof value === 'string' ? value : '';
}

export function getArrayResponse(submission: QuestionnaireSubmission, questionId: string): string[] {
  const value = getResponseValue(submission, questionId);
  return Array.isArray(value) ? value : [];
}

// Type guards for runtime checking
export function isPreQuestionnaire(submission: QuestionnaireSubmission): boolean {
  return submission.questionnaireType === 'pre';
}

export function isPostQuestionnaire(submission: QuestionnaireSubmission): boolean {
  return submission.questionnaireType === 'post';
}

// Helper function to convert FormData to submission
export function convertFormDataToSubmission(
  formData: FormData,
  questionnaireType: 'pre' | 'post',
  userId: string,
  startedAt: Date,
  completedAt: Date,
  language: 'de' | 'en'
): QuestionnaireSubmission {
  const responses: QuestionnaireResponse[] = Object.entries(formData)
    .filter(([, value]) => value !== null && value !== undefined)
    .map(([id, value]) => ({
      id,
      value,
      completedAt,
      questionType: inferQuestionType(id)
    }));

  return {
    submissionId: crypto.randomUUID(),
    userId,
    questionnaireType,
    startedAt,
    completedAt,
    completionTimeMinutes: Math.round((completedAt.getTime() - startedAt.getTime()) / 60000),
    language,
    responses
  };
}

// Helper function to infer question type from question ID
function inferQuestionType(questionId: string): 'radio' | 'checkbox' | 'text' | 'number' | 'scale' {
  if (questionId.includes('age') || questionId.includes('visits')) return 'number';
  if (questionId.includes('level') || questionId.includes('comfort') || questionId.includes('satisfaction')) return 'scale';
  if (questionId.includes('activities') || questionId.includes('conditions') || questionId.includes('aids')) return 'checkbox';
  if (questionId.includes('comments') || questionId.includes('experience') || questionId.includes('info')) return 'text';
  return 'radio';
}
