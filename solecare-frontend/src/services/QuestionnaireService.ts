import { HTTPService } from './HTTPService';
import type { 
  QuestionnaireSubmission,
  QuestionnaireSubmissionSummary,
  PatientQuestionnaireHistory 
} from '../types/responses';

class QuestionnaireService extends HTTPService {
  constructor() {
    super();
  }

  // Submit questionnaire (works for both pre and post)
  async submitQuestionnaire(submission: QuestionnaireSubmission): Promise<{ success: boolean; submissionId?: string; error?: string }> {
    try {
      const endpoint = submission.questionnaireType === 'pre' ? '/questionnaires/pre' : '/questionnaires/post';
      const response = await this.post<{ success: boolean; submissionId?: string; error?: string }>(endpoint, submission);
      return response;
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      throw error;
    }
  }

  // Get patient's questionnaire history
  async getPatientQuestionnaireHistory(patientId: string): Promise<PatientQuestionnaireHistory> {
    try {
      const response = await this.get<PatientQuestionnaireHistory>(`/questionnaires/patient/${patientId}/history`);
      return response;
    } catch (error) {
      console.error('Error fetching questionnaire history:', error);
      throw error;
    }
  }

  // Get all questionnaire submissions for a patient
  async getPatientSubmissions(patientId: string): Promise<QuestionnaireSubmissionSummary[]> {
    try {
      const response = await this.get<QuestionnaireSubmissionSummary[]>(`/questionnaires/patient/${patientId}/submissions`);
      return response;
    } catch (error) {
      console.error('Error fetching patient submissions:', error);
      throw error;
    }
  }

  // Get specific questionnaire submission
  async getSubmission(submissionId: string): Promise<QuestionnaireSubmission> {
    try {
      const response = await this.get<QuestionnaireSubmission>(`/questionnaires/submission/${submissionId}`);
      return response;
    } catch (error) {
      console.error('Error fetching submission:', error);
      throw error;
    }
  }

  // Update questionnaire submission (if editing is allowed)
  async updateSubmission(
    submissionId: string, 
    submission: Partial<QuestionnaireSubmission>
  ): Promise<{ success: boolean }> {
    try {
      const response = await this.put<{ success: boolean }>(`/questionnaires/submission/${submissionId}`, submission);
      return response;
    } catch (error) {
      console.error('Error updating submission:', error);
      throw error;
    }
  }

  // Delete questionnaire submission
  async deleteSubmission(submissionId: string): Promise<{ success: boolean }> {
    try {
      const response = await this.delete<{ success: boolean }>(`/questionnaires/submission/${submissionId}`);
      return response;
    } catch (error) {
      console.error('Error deleting submission:', error);
      throw error;
    }
  }

  // Get questionnaire analytics/statistics
  async getQuestionnaireStats(patientId?: string): Promise<{
    totalSubmissions: number;
    preSubmissions: number;
    postSubmissions: number;
    avgCompletionTime: number;
    completionRate: number;
  }> {
    try {
      const url = patientId 
        ? `/questionnaires/stats?patientId=${patientId}`
        : '/questionnaires/stats';
      const response = await this.get<{
        totalSubmissions: number;
        preSubmissions: number;
        postSubmissions: number;
        avgCompletionTime: number;
        completionRate: number;
      }>(url);
      return response;
    } catch (error) {
      console.error('Error fetching questionnaire stats:', error);
      throw error;
    }
  }
}

export const questionnaireService = new QuestionnaireService();
