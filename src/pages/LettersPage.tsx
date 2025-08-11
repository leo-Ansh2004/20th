import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, Play } from "lucide-react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { EnvelopeModal } from "@/components/EnvelopeModal";
import { BirthdayButton } from "@/components/BirthdayButton";

export const LettersPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<string | null>(null);

  const envelopes = [
    {
      id: "letter1",
      title: "Sweet Note 💕",
      content: (
        <div>
          <p className="mb-4">My dearest friend,</p>
          <p className="mb-4">
            Today marks another year of your amazing journey through life. 
            I want you to know how grateful I am to have you in my life. 
            Your kindness, laughter, and incredible spirit make every day brighter.
          </p>
          <p className="mb-4">
            Here's to celebrating you today and always. May this new year 
            bring you endless joy, exciting adventures, and all the happiness 
            you deserve.
          </p>
          <p className="text-birthday-red font-semibold">
            With all my love ❤️
          </p>
        </div>
      )
    },
    {
      id: "letter2", 
      title: "Special Memories 🌟",
      content: (
        <div>
          <p className="mb-4">Happy 20th Birthday!</p>
          <p className="mb-4">
            I've been thinking about all the wonderful memories we've shared 
            together. From late-night conversations to spontaneous adventures, 
            each moment has been a treasure.
          </p>
          <p className="mb-4">
            You have this incredible ability to make ordinary moments feel 
            extraordinary. Thank you for being such an amazing part of my story.
          </p>
          <p className="mb-4">
            Can't wait to create many more beautiful memories together in 
            the years to come!
          </p>
          <p className="text-birthday-red font-semibold">
            Forever grateful for you 💫
          </p>
        </div>
      )
    },
    {
      id: "video",
      title: "Special Video Message 🎬",
      content: (
        <div className="text-center">
          <div className="bg-gray-100 rounded-lg p-8 mb-4">
            <Play className="w-16 h-16 mx-auto text-birthday-red mb-4" />
            <p className="text-gray-600 mb-4">Video Placeholder</p>
            <p className="text-sm text-gray-500 mb-4">
              Replace this section with your video embed code
            </p>
            <div className="bg-white rounded p-4 text-left text-xs text-gray-400 font-mono">
              {`<!-- Replace with YouTube embed or video file -->
<iframe width="100%" height="200" 
  src="your-video-url" 
  frameborder="0" allowfullscreen>
</iframe>`}
            </div>
          </div>
          <p className="text-birthday-red">
            A special video message just for you! 🎥
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-hearts-gradient relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-birthday-red mb-12 text-center">
          Letters for You 💌
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {envelopes.map((envelope) => (
            <div
              key={envelope.id}
              onClick={() => setOpenModal(envelope.id)}
              className="btn-envelope bg-white text-birthday-red"
            >
              <Mail className="w-12 h-12" />
            </div>
          ))}
        </div>
        
        <BirthdayButton 
          onClick={() => navigate("/")}
          variant="secondary"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </BirthdayButton>
      </div>

      {envelopes.map((envelope) => (
        <EnvelopeModal
          key={envelope.id}
          isOpen={openModal === envelope.id}
          onClose={() => setOpenModal(null)}
          title={envelope.title}
          content={envelope.content}
        />
      ))}
    </div>
  );
};