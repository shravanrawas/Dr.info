"use client";
import React from "react";
import HeroSection from "./_homecomponents/HeroSection";
import Querysection from "./_homecomponents/Querysection";
import HowToUseSection from "./_homecomponents/HowToUseSection";
import EmpowerSection from "./_homecomponents/EmpowerSection";
import FeatureSection from "./_homecomponents/FeatureSection";
import CTASection from "./_homecomponents/CTASection";

const HomePage = () => {
  return (
    <div className="overflow-hidden bg-white">
      <main className="mt-0 w-full max-md:max-w-full">
        <section className="flex overflow-hidden flex-col pb-52 w-full max-md:pb-24 max-md:max-w-full">
        <HeroSection />
        <Querysection />
        </section>
        <FeatureSection />
        <EmpowerSection />
        <HowToUseSection />
        <CTASection />
      </main>
    </div>
  );
};

export default HomePage;
