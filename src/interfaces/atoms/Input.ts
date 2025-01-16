export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
  error?: string;
}