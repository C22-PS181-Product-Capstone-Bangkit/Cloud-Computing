import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

function Collection({ restaurant }) {
  return (
    <div id="collection" className="lg:mx-16 md:mx-12 mx-4">
      <h1 className="text-center font-bold text-5xl pt-28 mb-16">
        Collection of Restaurant
      </h1>
      <section className="grid lg:grid-cols-4 gap-10 md:grid-cols-3 grid-cols-2">
        {restaurant ? (
          restaurant
            .sort(
              (a, b) =>
                parseInt(b.id.substring(6)) - parseInt(a.id.substring(6))
            )
            .map((arr, idx) => {
              return idx > 7 ? (
                ""
              ) : (
                <div className="shadow-md overflow-hidden sm:rounded-lg rounded-md">
                  <img src={arr.profilePic} alt={arr.name} className="w-full" />
                  <article className="p-3 pointer-events-none">
                    <header className="flex">
                      <h5 className="font-semibold text-base basis-full">
                        {arr.name}
                      </h5>
                      <div className="flex flex-row-reverse gap-x-1.5">
                        <p className="">{arr.rating}</p>
                        <StarIcon className="text-yellow-300 h-6 w-6" />
                      </div>
                    </header>
                    <p>{arr.openHour}</p>
                    <p>{arr.location}</p>
                  </article>
                </div>
              );
            })
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
}

export default Collection;
