import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import valedictory from "../assets/valedictory.png";
import { useGSAP } from "@gsap/react"; 
import { useRef,useEffect } from "react";

function HorizontalScroll() {
  const racer = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(racer.current,{
      translateX:0
    },
    {
      translateX: "-150vw ",
      ease: "none",
      duration: 20,
      scrollTrigger: {
        trigger: racer.current,
        start: "top 100",
        end:"100 top",
        scrub: 1,
        pin: true,
        markers:true,

      },
    }
    )
    return () => {
      pin.scrollTrigger.kill();
      pin.kill();
    } 
  })

  return (
      <div ref={racer} className="flex flex-row w-max gap-10 py-10 px-5 md:h-[110vh] h-[100vh]">
        
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>
        <img src={valedictory} alt="" className="md:h-[70vh] h-[50vh]"/>

      </div>
    
  );
}

export default HorizontalScroll;
