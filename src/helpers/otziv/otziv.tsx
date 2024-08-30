import { Ostavit_Otzif } from "@/services/Urls";
import axios from "axios";
import { toast } from "sonner";
import { config } from "../const/token";  // Import your config from the appropriate path

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
    const response = await axios.post(Ostavit_Otzif, feedbackData,config);  // Use config here
    if (response.data.success) {
      toast.success('Feedback submitted successfully'); 
    } else {
      toast.error(`Feedbak qoldirish uchun Client bo'lishingiz kerak`);
    }
  } catch (error) {
    toast.error(`Feedbak qoldirish uchun Client bo'lishingiz kerak `);
  }
};
