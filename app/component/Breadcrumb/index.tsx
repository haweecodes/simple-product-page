"use client";
import React from "react";
import { BreadcrumbProps } from "@/app/types/Breadcrumb";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ params, children }) => {
  const paths = usePathname();
  const pathItems = paths
    .split("/")
    .filter((item) => item)
    .filter((item, index) => index !== 0);

  const capitalizeFirstLetter = (str: string) => {
    return params?.breadcrumb[str];
  };

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8 border justify-between flex-wrap md:flex-nowrap">
        <div id="breadcrumb" className="mb-2 md:mb-0">
          <a href="/" className="text-gray-600">
            {params?.breadcrumb?.home}
          </a>
          {pathItems.map((path, index) => (
            <React.Fragment key={index}>
              <span className="mx-2">/</span>
              {index === paths.length - 1 ? (
                <span className="text-gray-800">
                  {capitalizeFirstLetter(path)}
                </span>
              ) : (
                <a className="text-gray-600 cursor-pointer">
                  {capitalizeFirstLetter(path)}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="relative w-full md:w-96">
          <input
            type="search"
            id="default-search"
            data-testid="search-bar"
            className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder={params?.searchBar?.searchProduct}
            required
          />
        </div>
      </nav>
      {children}
    </>
  );
};

export default Breadcrumb;
