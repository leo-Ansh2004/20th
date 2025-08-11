import { Image } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  isVisible: boolean;
}

export const ImagePlaceholder = ({ className = "", isVisible }: ImagePlaceholderProps) => {
  if (!isVisible) return null;

  return (
    <div className={`animate-fade-in bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center border-2 border-dashed border-birthday-red/30 ${className}`}>
      <Image className="w-16 h-16 text-birthday-red/50 mb-4" />
      <p className="text-birthday-red/70 text-center font-medium">
        Image Placeholder
      </p>
      <p className="text-birthday-red/50 text-sm text-center mt-2">
        Replace with your photo
      </p>
    </div>
  );
};