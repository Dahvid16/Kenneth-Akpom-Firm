import React, { useRef, useEffect, useState } from "react";

interface CountUpOnViewProps {
  end: number;
  duration?: number; // in ms
  className?: string;
}

const CountUpOnView: React.FC<CountUpOnViewProps> = ({ end, duration = 1200, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const overshoot = Math.round(end * 1.25); // overshoot by 25%
    let phase = 0;
    let overshot = false;
    let timer: NodeJS.Timeout;
    const phases = [
      { duration: duration * 0.3, interval: 40, increment: overshoot * 0.15 / (duration * 0.3 / 40) }, // slow
      { duration: duration * 0.2, interval: 15, increment: overshoot * 0.35 / (duration * 0.2 / 15) }, // fast
      { duration: duration * 0.3, interval: 8, increment: overshoot * 0.35 / (duration * 0.3 / 8) }, // faster
      { duration: duration * 0.2, interval: 30, increment: overshoot * 0.15 / (duration * 0.2 / 30) }, // slow
    ];
    function runPhase() {
      const { duration, interval, increment } = phases[phase];
      let elapsed = 0;
      timer = setInterval(() => {
        start += increment;
        elapsed += interval;
        if (phase < phases.length - 1 && elapsed >= duration) {
          clearInterval(timer);
          phase++;
          runPhase();
        } else if (phase === phases.length - 1 && start >= overshoot) {
          overshot = true;
          setTimeout(() => {
            setCount(end);
          }, 250);
          clearInterval(timer);
        } else if (!overshot) {
          setCount(Math.floor(start));
        }
      }, interval);
    }
    runPhase();
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
  <span ref={ref} className={className}>{count}</span>
  );
};

export default CountUpOnView;
