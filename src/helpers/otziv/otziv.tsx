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

export const submitFeedback = async (feedbackData: FeedbackData) => {
  try {
    const response = await axios.post(Ostavit_Otzif, feedbackData);
    if (response?.data?.success) {
      toast.success('Feedback submitted successfully');
    }
  } catch (error) {
    toast.error('Failed to submit feedback');
  }
};
