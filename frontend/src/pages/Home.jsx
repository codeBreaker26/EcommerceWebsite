import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

// Import your images here
import heroImg1 from "../assets/hero.png";
import heroImg2 from "../assets/hero_img.png";

const Home = () => {
  return (
    <div>
      {/* Pass the images as props to the Hero component */}
      <Hero images={[heroImg1, heroImg2]} />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
