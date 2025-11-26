'use client';

// We define the props to match what is used in the pages, 
// but we ignore 'delay' to ensure immediate visibility.
export default function FadeIn({ 
  children, 
  delay, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number,
  className?: string 
}) {
  return (
    // Simple div wrapper. No opacity:0, no waiting.
    <div className={className}>
      {children}
    </div>
  );
}
