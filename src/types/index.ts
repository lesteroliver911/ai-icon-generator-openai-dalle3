export interface IconRequest {
  prompt: string;
  style: 'minimal' | 'detailed' | 'outlined' | 'filled';
  size: 'sm' | 'md' | 'lg';
  color: string;
}

export interface GeneratedIcon {
  id: string;
  prompt: string;
  imageUrl: string;
  style: string;
  createdAt: Date;
}