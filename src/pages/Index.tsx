import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { BirthdayButton } from "@/components/BirthdayButton";

// Import your images
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [showBalloons, setShowBalloons] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handlePromptClick = () => {
    setShowBalloons(true);

    // Show images after balloon animation starts
    setTimeout(() => {
      setShowImages(true);
    }, 1000);

    // Show next button after images appear
    setTimeout(() => {
      setShowNextButton(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-birthday-gradient relative overflow-hidden">
      <FloatingBalloons isVisible={showBalloons} />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8">
        {/* 3D Title */}
        <h1 className="text-3d text-6xl md:text-8xl font-bold text-white mb-8 text-center">
          Happy 20th
        </h1>
        <h2 className="text-3d text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          My Fav...
        </h2>

        {/* Main Prompt Button */}
        {!showBalloons && (
          <BirthdayButton
            onClick={handlePromptClick}
            className="animate-pulse-glow"
          >
            Click on the prompt
          </BirthdayButton>
        )}

        {/* Image Gallery */}
        {showImages && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
            <img
              src={photo1}
              alt="First memory"
              className="w-full h-64 object-cover rounded-xl shadow-lg animate-fade-in"
            />
            <img
              src={photo2}
              alt="Second memory"
              className="w-full h-64 object-cover rounded-xl shadow-lg animate-fade-in"
            />
            <img
              src={photo3}
              alt="Third memory"
              className="w-full h-64 object-cover rounded-xl shadow-lg animate-fade-in"
            />
          </div>
        )}

        {/* Next Page Button */}
        {showNextButton && (
          <BirthdayButton
            onClick={() => navigate("/letters")}
            className="animate-fade-in"
          >
            Click here
          </BirthdayButton>
        )}
      </div>
    </div>
  );
};

export default Index;
