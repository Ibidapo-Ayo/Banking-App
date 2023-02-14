import React from "react";
import { MainServices } from "./Services/ServicesData";

function Services() {
  return (
    <div className="container mt-10">
      <h2 className="text-blue font-bold md:text-3xl text">
        Hello Welcome Ayomide!
      </h2>
      <div className="flex flex-row space-x-10 mt-10">
        {MainServices.map(services => (
          <div
            key={services.id}
            className="shadow-2xl rounded-3xl w-60 h-40 px-4 py-10 cursor-pointer hover:-mt-3 cards"
            style={{
              backgroundImage: ` linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${services.bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <h5>{services.ServiceIcons.icon1}</h5>
            <div className="flex flex-row w-full items-center">
              <h2
                className="font-bold text-2xl"
                style={{ color: `${services.color}` }}
              >
                {services.ServiceTitle}
              </h2>
              <p className="text-smaller font-semibold">
                {services.moreInfo.dueDate}
              </p>
            </div>
            <div className="flex flex-row w-full items-center">
              <h3 className="font-bold text-black text-xl">
                {services.moreInfo.money}
              </h3>
              <p className="font-semibold ml-2">{services.moreInfo.bonus}</p>
            </div>

            <a
              href="#"
              className="font-bold"
              style={{ color: `${services.color}` }}
            >
              {services.ServiceLink}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
