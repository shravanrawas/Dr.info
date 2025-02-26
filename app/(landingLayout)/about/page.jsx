"use client";
import React from 'react';
import HeroSection from './_components/HeroSection';
import MissionSection from './_components/MissionSection';
import CoreValues from './_components/CoreValues';
import HiringSection from './_components/HiringSection';

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-white">
      <article>
        <HeroSection />
        <MissionSection />
        <CoreValues />
        <HiringSection />
      </article>
    </main>
  );
};

export default AboutPage;
