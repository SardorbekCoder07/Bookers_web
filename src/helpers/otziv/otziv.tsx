import { Ostavit_Otzif } from "@/services/Urls";
import axios from "axios";
import { toast } from "sonner";

interface FeedbackData {
  clientName: string;
  email: string;
  phoneNumber: string;
  masterOrSalonId: string;
  feedback: string;
  attachmentId?: string; 
  master: boolean;
  agree: boolean;
}

export const submitFeedback = async (feedbackData: FeedbackData, config: any) => {
  try {
    if (config === null) {
      toast.error('Configuration is missing. Please check your settings.');
      return; 
    }

    const response = await axios.post(Ostavit_Otzif, feedbackData);

    if (response?.data?.success) {
      toast.success('Feedback submitted successfully');
      
    } else {
      toast.error('Failed to submit feedback');
    }
  } catch (error) {
    toast.error('An error occurred while submitting feedback');
  }
};
