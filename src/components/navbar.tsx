"use client";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import { motion, Transition } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import ModeToggle from "./ui/theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/platform", title: "Platform" },
  { href: "/solutions", title: "Solutions" },
  { href: "/enterprise", title: "Enterprise" },
  { href: "/resources", title: "Resources" },
  { href: "/pricing", title: "Pricing" },
  { href: "/security", title: "Security" },
];

const fadeDown = {
  initial: { opacity: 0, y: -10, filter: "blur(5px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const transitionProp: Transition<unknown> | undefined = {
  duration: 0.5,
  ease: "easeInOut",
};

export default function Navbar() {
  return (
    <div className="py-4 border-b">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
}

export function MobileNavbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container className="md:hidden flex items-center justify-between relative">
      <Logo />

      <div className="flex items-center">
        <ModeToggle />
        <Button onClick={() => setOpen(!open)} variant={"ghost"} size={"icon"}>
          {open ? <X className="size-4"/> : <Menu className="size-4" />}
        </Button>
      </div>

      {open && (
        <div className="absolute min-h-screen w-full translate-y-88 left-0">
          <div className="absolute inset-0 blur-md" />

          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                  filter: "blur",
                }}
                animate={{
                  opacity: 1,
                  x: 16,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                key={index}
                className="group"
              >
                <Link
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-foreground"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      )}
    </Container>
  );
}

export function DesktopNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Container className="hidden md:flex justify-between items-center">
      {" "}
      <motion.div
        variants={fadeDown}
        initial="initial"
        animate="animate"
        transition={transitionProp}
      >
        <Logo />
      </motion.div>
      <nav className="flex items-center">
        {navLinks?.map((item, index) => (
          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={transitionProp}
            key={index}
          >
            <Link
              href={item.href}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
              className="text-muted-foreground hover:text-foreground group-hover:text-foreground text-md px-4 py-2 relative"
            >
              <span>{item.title}</span>

              {hovered === item.title && (
                <motion.div
                  layoutId="navlinks"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute inset-0 bg-foreground/10 rounded-full -z-10"
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
      <motion.div
        variants={fadeDown}
        initial="initial"
        animate="animate"
        transition={transitionProp}
        className="flex items-center gap-2"
      >
        <ModeToggle />
        <Button variant={"ghost"} className="text-md mr-2">
          Log in
        </Button>

        <Button variant={"primary"} className="text-md">
          Get started
        </Button>
      </motion.div>
    </Container>
  );
}
