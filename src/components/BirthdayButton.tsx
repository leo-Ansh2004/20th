import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BirthdayButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export const BirthdayButton = ({ 
  children, 
  onClick, 
  className,
  variant = "primary" 
}: BirthdayButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "btn-birthday",
        variant === "secondary" && "bg-birthday-red text-white border-white hover:bg-birthday-red/90",
        className
      )}
    >
      {children}
    </Button>
  );
};