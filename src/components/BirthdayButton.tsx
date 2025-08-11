import { Button } from "@/components/ui/button";

interface BirthdayButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const BirthdayButton = ({ 
  onClick, 
  children, 
  variant = "primary", 
  className = "" 
}: BirthdayButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`btn-birthday ${variant === "secondary" ? "bg-secondary text-secondary-foreground" : ""} ${className}`}
    >
      {children}
    </Button>
  );
};