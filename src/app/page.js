"use client"
import Section1 from "@/Section/Section1";
import Section10 from "@/Section/Section10";
import Section11 from "@/Section/Section11";
import Section12 from "@/Section/Section12";
import Section2 from "@/Section/Section2";
import Section3 from "@/Section/Section3";
import Section4 from "@/Section/Section4";
import Section5 from "@/Section/Section5";
import Section6 from "@/Section/Section6";
import Section7 from "@/Section/Section7";
import Section8 from "@/Section/Section8";
import Section9 from "@/Section/Section9";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Section12/>
    </main>
  );
}