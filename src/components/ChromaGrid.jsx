import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const demo = [
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Pratik Dave",
    subtitle: "President",
    gradient: "linear-gradient(135deg, #FF5733, #FFC300)",
    borderColor: "#FFC300",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    title: "Aryaman Jha",
    subtitle: "General Secretary",
    gradient: "linear-gradient(135deg, #33FF57, #C7FF33)",
    borderColor: "#C7FF33",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Ananya Sharma",
    subtitle: "Vice President",
    gradient: "linear-gradient(135deg, #3357FF, #33C7FF)",
    borderColor: "#33C7FF",
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194d6b4a0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Rohan Singh",
    subtitle: "Treasurer",
    gradient: "linear-gradient(135deg, #FF33CC, #C733FF)",
    borderColor: "#C733FF",
  },
  {
    image: "https://images.unsplash.com/photo-1542155823-ce7319985226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Priya Verma",
    subtitle: "Marketing Head",
    gradient: "linear-gradient(135deg, #33CCFF, #33FFCC)",
    borderColor: "#33FFCC",
  },
];

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const data = items?.length ? items : demo;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      const el = rootRef.current;
      if (!el) return;
      setX.current = gsap.quickSetter(el, "--x", "px");
      setY.current = gsap.quickSetter(el, "--y", "px");
      const { width, height } = el.getBoundingClientRect();
      pos.current = { x: width / 2, y: height / 2 };
      setX.current(pos.current.x);
      setY.current(pos.current.y);
    }
  }, [isSmallScreen]);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    if (!isSmallScreen) {
      const r = rootRef.current.getBoundingClientRect();
      moveTo(e.clientX - r.left, e.clientY - r.top);
      gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    }
  };

  const handleLeave = () => {
    if (!isSmallScreen) {
      gsap.to(fadeRef.current, {
        opacity: 1,
        duration: fadeOut,
        overwrite: true,
      });
    }
  };

  useEffect(() => {
    let intervalId;
    if (isSmallScreen && data.length > 1) {
      intervalId = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isSmallScreen, data.length]);

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative h-full flex ${/* <-- FIX: Added 'flex' class */ ""}
      ${
        isSmallScreen
          ? "flex-col items-center justify-center"
          : "w-full flex-row flex-wrap gap-3 justify-center"
      } ${className} cursor-default`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {/* Cards Display */}
      {isSmallScreen ? (
        // Carousel for small screens
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={goToPrevCard}
            className="absolute left-2 z-20 p-2 bg-gray-800/50 hover:bg-gray-700/70 rounded-full text-white text-xl transition-all"
            aria-label="Previous card"
          >
            <FaChevronLeft />
          </button>
          <article
            key={data[currentCardIndex].title}
            className="group relative flex flex-col w-[300px] h-[400px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer flex-shrink-0"
            style={{
              "--card-border": data[currentCardIndex].borderColor || "transparent",
              background: data[currentCardIndex].gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex-1 p-[10px] box-border">
              <img
                src={data[currentCardIndex].image}
                alt={data[currentCardIndex].title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <footer className="flex z-10 p-3 text-white flex-col font-sans">
              <h3 className="m-0 text-2xl font-bold">
                {data[currentCardIndex].title}
              </h3>
              <p className="m-0 text-lg ">
                {data[currentCardIndex].subtitle}
              </p>
            </footer>
          </article>
          <button
            onClick={goToNextCard}
            className="absolute right-2 z-20 p-2 bg-gray-800/50 hover:bg-gray-700/70 rounded-full text-white text-xl transition-all"
            aria-label="Next card"
          >
            <FaChevronRight />
          </button>
        </div>
      ) : (
        // Static grid for large screens
        data.map((c, i) => (
          <article
            key={i}
            className="group relative flex flex-col w-[300px] h-[400px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer flex-shrink-0"
            style={{
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex-1 p-[10px] box-border">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <footer className="flex z-10 p-3 text-white flex-col font-sans">
              <h3 className="m-0 text-2xl font-bold">{c.title}</h3>
              <p className="m-0 text-lg ">{c.subtitle}</p>
            </footer>
          </article>
        ))
      )}

      {/* Backdrop filters */}
      {!isSmallScreen && (
        <>
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backdropFilter: "grayscale(1) brightness(0.78)",
              WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
              background: "rgba(0,0,0,0.001)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
            }}
          />
          <div
            ref={fadeRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
            style={{
              backdropFilter: "grayscale(1) brightness(0.78)",
              WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
              background: "rgba(0,0,0,0.001)",
              maskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
              opacity: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ChromaGrid;