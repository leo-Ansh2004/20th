import { useEffect, useState } from "react";

interface Balloon {
  id: number;
  color: string;
  delay: number;
  left: number;
}

export const FloatingBalloons = ({ isVisible }: { isVisible: boolean }) => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    if (isVisible) {
      const colors = ["balloon-red", "balloon-blue", "balloon-yellow", "balloon-green", "balloon-purple"];
      const newBalloons = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        delay: Math.random() * 3,
        left: Math.random() * 80 + 10
      }));
      setBalloons(newBalloons);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={`balloon ${balloon.color} absolute w-12 h-16 rounded-full`}
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            bottom: '-100px'
          }}
        >
          {/* Balloon string */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-400"></div>
        </div>
      ))}
    </div>
  );
};