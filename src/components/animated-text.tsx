import { motion } from "motion/react";

export function AnimatedText({ text }: { text: string }) {
  return (
    <p className="text-sm leading-relaxed flex flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -5, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.3,
            delay: i * 0.03,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
}
