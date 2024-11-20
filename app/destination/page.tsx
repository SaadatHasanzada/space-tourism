"use client";

import Image from "next/image";
import data from "@/data.json";
import style from "./style.module.scss";
import { useState } from "react";

const DestinationPage = () => {
  const destinations = data.destinations;
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  return (
    <div className={`container ${style.destination}`}>
      <h1 className={style.title}>
        <span>01</span>PICK YOUR DESTINATION
      </h1>
      <div className={style.destination_box}>
        <div className={style.destination_image}>
          <Image
            src={selectedDestination.images.webp}
            alt={selectedDestination.name}
            width={480}
            height={480}
          />
        </div>
        <div className={style.destination_info}>
          <ul className={style.destination_menu}>
            {destinations.map((destination) => (
              <li
                onClick={() => setSelectedDestination(destination)}
                key={destination.name}
                className={
                  selectedDestination.name === destination.name
                    ? style.active
                    : ""
                }
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <div className={style.destination_description}>
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            <div className={style.destination_details}>
              <div className={style.destination_distance}>
                <h3>AVG. DISTANCE</h3>
                <p>{selectedDestination.distance}</p>
              </div>
              <div className={style.destination_time}>
                <h3>Est. travel time</h3>
                <p>{selectedDestination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
