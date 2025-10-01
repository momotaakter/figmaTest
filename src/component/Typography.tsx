import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={`font-[family-name:var(--font-raleway)] font-bold text-center text-[38px] sm:text-[48px] lg:text-[58px] ${className || ''}`}
    >
      {children}
    </h1>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={`font-[family-name:var(--font-outfit)] font-medium text-[20px] leading-[150%] tracking-[0px] ${className || ''}`}>
      {children}
    </p>
  );
}

export function Subtitle({ children, className }: TypographyProps) {
  return (
    <h2
      className={`
        font-[family-name:var(--font-raleway)]
        mt-4
        text-[#1A1A1A]
        text-[28px]
        md:text-lg
        capitalize
        ${className || ''}
      `}
    >
      {children}
    </h2>
  );
}


export function Button({ children, className }: TypographyProps) {
  return (
    <button
      className={`w-[128px] h-[47px] rotate-0 opacity-100 rounded-[8px] border-2 capitalize bg-white
            pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[10px] font-[family-name:var(--font-outfit)] font-medium
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
}
