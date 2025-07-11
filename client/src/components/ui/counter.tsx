import { useCounter } from "@/hooks/use-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface CounterProps {
  targetValue: number;
  duration?: number;
  className?: string;
}

export default function Counter({ 
  targetValue, 
  duration = 2000, 
  className 
}: CounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  });
  
  const count = useCounter(isIntersecting ? targetValue : 0, duration);
  
  return (
    <span ref={ref} className={cn("counter", className)}>
      {Math.ceil(count)}
    </span>
  );
}
