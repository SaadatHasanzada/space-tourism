"use client";

import Image from "next/image";
import data from "@/data.json";
import style from "./style.module.scss";
import { useState } from "react";

const CrewPage = () => {
  const crews = data.crew;
  const [crew, setCrew] = useState(crews[0]);

  return (
    <div className={`container ${style.crew}`}>
      <h1 className={style.title}>
        <span>02</span>MEET YOUR CREW
      </h1>
      <div className={style.crew_info}>
        <div className={style.crew_container}>
          <div className={style.crew_details}>
            <p className={style.crew_role}>{crew.role}</p>
            <h2>{crew.name}</h2>
            <p className={style.crew_bio}>{crew.bio}</p>
          </div>
          <div className={style.crew_menu}>
            {crews.map((crewMember) => (
              <button
                key={crewMember.name}
                onClick={() => setCrew(crewMember)}
                className={
                  crewMember.name === crew.name ? `${style.active}` : ""
                }
              ></button>
            ))}
          </div>
        </div>
        <div className={style.crew_image}>
          <Image
            src={crew.images.webp}
            alt={crew.name}
            width={500}
            height={676}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
