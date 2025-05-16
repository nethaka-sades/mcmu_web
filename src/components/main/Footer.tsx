"use client";
import { motion } from "motion/react";
import { StackedCircularFooter } from "../common/footer_center";
import { BoxReveal } from "../common/box-reveal";

interface FooterProps {
  children: React.ReactNode;
}

export const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full px-5 py-10">
      <BoxReveal>
        <StackedCircularFooter />
      </BoxReveal>
    </div>
  );
};
