import Image from "next/image";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
const IdeaCard = ({ idea }) => {
  const {
    _id,
    title,
    shortDescription,
    imageURL,
     category,
    
  } = idea;
  return (
    <div className="card bg-[#1A1A2E] card-body ">
      <div className="relative w-full aspect-square">
        {" "}
        <Image
          src={imageURL}
          fill
          alt="card image"
          className="object-cover transform transition duration-700 group-hover:scale-105 rounded-xl"
        />
      </div>
      <h3 className="text-2xl font-bold text-blue-500">{title}</h3>
      <h4 className="font-semibold text-white">Category : <span className="font-bold">{category}</span></h4>
      <p className="line-clamp-2 text-gray-400">{shortDescription}</p>
      <Link href={`/ideas/${_id}`}><Button className="w-full transition hover:bg-[#050127]">View Details</Button></Link>
    </div>
  );
};

export default IdeaCard;
