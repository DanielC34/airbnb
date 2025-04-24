"use client";

import React, { useCallback } from "react";
import { categoryItems } from "@/lib/categoryItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const MapFilterItems = () => {
  // Gets the current query parameters (like ?filter=Beach)
  const searchParams = useSearchParams();

  // Gets the current path (like /, /places, /home)
  const pathName = usePathname();

  // Extracts the current filter value from the URL (e.g., "Beach")
  const currentFilter = searchParams.get("filter");

  // This function generates a new query string like `?filter=Beach`
  // It updates the existing search params without removing others
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value); // Add or update the filter
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-10 w-full mt-5 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
      {/* Clear filter button */}
      <Link href={pathName} className="flex flex-col items-center gap-y-1">
        <div
          className={`w-10 h-10 rounded-full p-2 flex items-center justify-center border 
      ${!currentFilter ? "border-black" : "border-transparent"} transition`}
        >
          <span className="text-sm font-bold">All</span>
        </div>
        <p
          className={`text-xs font-medium ${
            !currentFilter ? "text-black" : "text-gray-500"
          }`}
        >
          All
        </p>
      </Link>

      {categoryItems.map((item) => {
        // Create the link to the current page + new query string
        const url = `${pathName}?${createQueryString("filter", item.title)}`;

        // Check if this item is the currently selected one
        const isActive = currentFilter === item.title;

        return (
          <Link key={item.id} href={url}>
            <div className="flex flex-col items-center gap-y-1">
              {/* Container for the icon */}
              <div
                className={`w-10 h-10 rounded-full p-2 flex items-center justify-center border 
    ${isActive ? "border-black scale-110" : "border-transparent"} 
    hover:scale-105 transition-transform duration-200 ease-out`}
              >
                <Image
                  src={item.imageUrl}
                  alt={`Category ${item.title}`}
                  width={24}
                  height={24}
                />
              </div>

              {/* Title under icon */}
              <p
                className={`text-xs font-medium ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MapFilterItems;
