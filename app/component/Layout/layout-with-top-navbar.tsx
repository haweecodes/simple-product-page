import Image from "next/image";
import { LayoutWithTopNavbarProps } from "@/app/types/LayoutWithTopNavbar";

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
              {params?.nav?.outlets}
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
              {params?.nav?.furniture}
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.nav?.company}
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {params?.login?.login} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default LayoutWithTopNavbar;
