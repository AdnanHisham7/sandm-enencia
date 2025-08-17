import React, { useState, useEffect } from "react";

interface LoaderProps {
  isLoading?: boolean;
  onLoadingComplete?: () => void;
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ 
  isLoading = true, 
  onLoadingComplete,
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");
  const [fadeOut, setFadeOut] = useState(false);

  const loadingMessages = [
    "Loading",
    "Preparing Experience",
    "Almost Ready",
    "Welcome to Enencia"
  ];

  useEffect(() => {
    if (!isLoading) return;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + (Math.random() * 3 + 1);
      });
    }, 50);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #2E59A7 0%, #11B3BC 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(2px)',
        }}
      />

      <div className="relative z-10 text-center">
        <div 
          className="mb-12 transform transition-all duration-1000"
          style={{
            animation: 'logoFloat 3s ease-in-out infinite'
          }}
        >
          <div 
            className="w-48 h-48 mx-auto rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="/enencia-logo.svg"
              alt="Enencia"
              className="w-32 h-8 object-contain"
              style={{
                filter: 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
              }}
            />
          </div>
        </div>

        <div 
          className="w-80 mx-auto mb-8"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1rem',
            padding: '6px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div 
            className="h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{
              width: `${progress}%`,
              background: '#11B3BC',
              boxShadow: '0 0 20px rgba(17, 179, 188, 0.5)',
            }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                animation: 'shimmer 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        <div 
          className="text-white text-lg font-bold"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          {Math.round(progress)}%
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: '#11B3BC',
                animation: `loadingDots 1.5s ease-in-out infinite ${i * 0.2}s`,
                boxShadow: '0 0 10px rgba(17, 179, 188, 0.3)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: '#11B3BC',
              animation: `particle ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;