import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <>
      <div
        className="py-4 px-6 lg:px-8 rounded-lg shadow-lg transform transition-transform group hover:rotate-3"
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        <h2 className="text-2xl leading-8 font-bold">{name}</h2>
        <p className="text-lg leading-7 font-normal mt-4">{desc}</p>

        <div className="flex items-center justify-between mt-6">
          <Link
            to="/developer"
            className="w-12 h-12 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-none"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-6" />
          </Link>
          <span
            className="w-12 h-12 flex items-center justify-center text-xl font-semibold rounded-tl-md rounded-bl-md"
            style={{
              background: `${bgColor}`,
              color: `${textColor}`,
            }}
          >
            {index + 1}
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
