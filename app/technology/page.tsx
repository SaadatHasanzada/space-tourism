"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import data from "@/data.json";
import style from "./style.module.scss";

const TechnologyPage = () => {
  const technologies = data.technology;
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`container ${style.technology}`}>
      <h1 className={style.title}>
        <span>03</span>SPACE LAUNCH 101
      </h1>
      <div className={style.tech_info}>
        <div className={style.tech_container}>
          <div className={style.tech_menu}>
            {technologies.map((tech, index) => (
              <button
                key={tech.name}
                onClick={() => setSelectedTech(tech)}
                className={
                  tech.name === selectedTech.name ? `${style.active}` : ""
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className={style.tech_details}>
            <p className={style.text}>THE TERMINOLOGY…</p>
            <h2>{selectedTech.name}</h2>
            <p className={style.tech_desc}>{selectedTech.description}</p>
          </div>
        </div>
        <div className={style.tech_image}>
          <Image
            src={
              isLandscape
                ? selectedTech.images.landscape
                : selectedTech.images.portrait
            }
            alt={selectedTech.name}
            width={isLandscape ? 768 : 608}
            height={isLandscape ? 357 : 600}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
