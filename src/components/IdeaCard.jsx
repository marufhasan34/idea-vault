import Image from "next/image";
import React from "react";
import {ThumbsUpFill,Eye} from '@gravity-ui/icons';
import { Button } from "@heroui/react";
const IdeaCard = ({ idea }) => {
  const {
    title,
    shortDescription,
    imageURL,
     category,
    
  } = idea;
  return (
    <div className="card card-body shadow-2xl">
      <div className="relative w-full aspect-square">
        {" "}
        <Image
          src={imageURL}
          fill
          alt="card image"
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-2xl font-bold text-blue-500">{title}</h3>
      <h4 className="font-semibold">Category : <span className="font-bold">{category}</span></h4>
      <p className="line-clamp-2 text-gray-400">{shortDescription}</p>
      <Button className="w-full">View Details</Button>
    </div>
  );
};

export default IdeaCard;
