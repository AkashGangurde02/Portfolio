import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "./BackgroundBeamsWithCollision.css";

export const BackgroundBeamsWithCollision = ({
  children,
  className = "",
}) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  // We use percentages for initialX to distribute them beautifully across all screen sizes (responsiveness)
  const beams = [
    {
      initialX: "8%",
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: "22%",
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: "38%",
      duration: 8,
      repeatDelay: 6,
      className: "beam-h-6",
    },
    {
      initialX: "52%",
      duration: 5,
      repeatDelay: 12,
      delay: 3,
    },
    {
      initialX: "68%",
      duration: 11,
      repeatDelay: 2,
      className: "beam-h-20",
    },
    {
      initialX: "82%",
      duration: 4,
      repeatDelay: 2,
      className: "beam-h-12",
    },
    {
      initialX: "94%",
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "beam-h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={`beams-background-container ${className}`}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={beam.initialX + "-idx-" + index}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="beams-collision-boundary"
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // Check if the beam has reached the top of the bottom boundary line
        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      // Clear collision state after 2 seconds to prepare for next cycle
      const timer1 = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      // Increment beam key to trigger a reset and re-render of the animation
      const timer2 = setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          y: "-200px",
        }}
        variants={{
          animate: {
            y: "1200px", // Animates down; collision interval will catch it and reset early
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        style={{
          left: beamOptions.initialX || "0px",
        }}
        className={`beams-laser-ray ${beamOptions.className || ""}`}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ style }) => {
  // Spark distribution calculations
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div style={style} className="beams-explosion-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="beams-explosion-flare"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="beams-explosion-spark"
        />
      ))}
    </div>
  );
};
