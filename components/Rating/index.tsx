import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import StarsRating from "stars-rating";

export default function Rating({ value, count }) {
  return (
    <div className="space-x-2 flex flex-nowrap items-center text-xs py-2">
      <StarsRating count={5} size={20} edit={false} value={value} />
      <h4>Reviews ({count})</h4>
    </div>
  );
}
