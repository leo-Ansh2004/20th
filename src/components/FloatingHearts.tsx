import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartFloat {
  id: number;
  color: string;
  delay: number;
  left: number;
  size: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartFloat[]>([]);

  useEffect(() => {
    const colors = ["heart-pink", "heart-rose"];
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: Math.random() * 8,
      left: Math.random() * 90 + 5,
      size: Math.random() * 20 + 20
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className={`heart ${heart.color} absolute animate-float-hearts`}
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            bottom: '-50px'
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};