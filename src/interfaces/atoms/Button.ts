export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
