import Image from "next/image";
import { LayoutWithTopNavbarProps } from "@/app/types/LayoutWithTopNavbar";
import LanguageSelector from "../LanguageSelector";

const logoUrlPath =
  "https://eco-prod-bucket.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/29084448/secundo-logo-black.png";

const LayoutWithTopNavbar: React.FC<LayoutWithTopNavbarProps> = ({
  children,
  params,
}) => {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Secundo</span>
              <Image
                src={logoUrlPath}
                alt={"Secundo"}
                width={100}
                height={100}
                unoptimized
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.nav?.sofaAndArmchairs}
            </a>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.nav?.furniture}
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.nav?.outlets}
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.nav?.company}
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
            <LanguageSelector />
            <svg
              data-testid="user"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <svg
              data-testid="cart"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default LayoutWithTopNavbar;
