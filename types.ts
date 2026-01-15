
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
