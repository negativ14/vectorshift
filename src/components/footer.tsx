"use client";
import { cn } from "@/lib/utils";
import Container from "./container";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

export default function Footer() {
  const links1 = ["Docs", "Tutorials", "Discord", "Join now"];
  const links2 = [
    "Blog",
    "Terms and conditions",
    "Privacy policy",
    "Contact us",
  ];
  return (
    <div className="border-b">
      <Container className="border-x p-4 pt-20 flex flex-col md:flex-row">
        <div className="flex flex-col justify-end gap-4">
          <div className="flex gap-10">
            <ul className="flex flex-col gap-4">
              {links1.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -5, y: -5, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    ease: "easeInOut",
                  }}
                  className="text-md font-poppins hover:text-muted-foreground transition-colors duration-300 ease-in-out cursor-pointer"
                  key={index}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <ul className="flex flex-col gap-4">
              {links2.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -5, y: -5, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    ease: "easeInOut",
                  }}
                  className="text-md font-poppins hover:text-muted-foreground transition-colors duration-300 ease-in-out cursor-pointer"
                  key={index}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground font-poppins">
            © 2025 VectorShift, Inc. All Rights Reserved.
          </p>
        </div>

        <div className="flex-1 relative min-h-[200px] hidden md:block">
          <FitText>VectorShift</FitText>
        </div>
      </Container>
    </div>
  );
}


export function FitText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  function resizeText() {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    text.style.fontSize = "1px";

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const textWidth = text.scrollWidth;
    const textHeight = text.scrollHeight;

    const scaleWidth = containerWidth / textWidth;
    const scaleHeight = containerHeight / textHeight;

    const scale = Math.min(scaleWidth, scaleHeight) * 0.95;

    text.style.fontSize = `${scale}px`;
  }

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => window.removeEventListener("resize", resizeText);
  }, []);

  return (
    <div 
      className={cn("flex h-full w-full items-end justify-center overflow-hidden", className)} 
      ref={containerRef}
    >
      <h2
        className="whitespace-nowrap text-center font-medium uppercase bg-linear-to-b from-white via-primary to-primary bg-clip-text text-transparent select-none"
        ref={textRef}
        style={{ lineHeight: 1 }}
      >
        {children}
      </h2>
    </div>
  );
}
