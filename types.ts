
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
