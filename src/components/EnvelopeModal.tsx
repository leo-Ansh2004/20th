import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnvelopeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const EnvelopeModal = ({ isOpen, onClose, title, content }: EnvelopeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="modal-content relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 z-10">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
        >
          <X className="h-4 w-4" />
        </Button>
        <h3 className="text-2xl font-bold text-birthday-red mb-4">{title}</h3>
        <div className="text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
};