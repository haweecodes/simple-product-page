import { FooterProps } from "@/app/types/Footer";

const Footer: React.FC<FooterProps> = ({ params }) => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 my-16 mx-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="col-span-1">
              <aside className="text-black">
                <h5 className="text-lg font-semibold">
                  {params?.footer?.contact}
                </h5>

                <div className="flex items-start gap-3 my-2 text-sm leading-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div>
                    <p>{params?.footer?.clickAndCollect}</p>
                    <p>Mon. - Thurs. 09-20</p>
                    <p>Fri. - 09-17</p>
                    <p>Sat. - 10-16</p>
                    <p>Sun. - Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 my-2 text-sm leading-7">
                  <svg
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <div>
                    <a
                      href="mailto:post@secundo.no"
                      className="text-black hover:underline"
                    >
                      post@secundo.no
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 my-2 text-sm leading-7">
                  <svg
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <div>
                    <a
                      href="tel:22 19 90 00"
                      className="text-black hover:underline"
                    >
                      22 19 90 00
                    </a>
                    <p>Mon. - Fri. 10-14</p>
                    <p>Sat. - 12-14</p>
                    <p>Sun - Closed</p>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-span-1">
              <aside className="text-black">
                <h5 className="text-lg font-semibold">
                  {params?.footer?.help}
                </h5>
                <ul className="text-sm leading-7">
                  <li>
                    <a
                      href="https://www.secundo.no/hjelp/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.customerService}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/hjelp/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.openingHour}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/hjelp/levering/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.delivery}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/hjelp/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.address}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/hjelp/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.faq}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-span-1">
              <aside className="text-black">
                <h5 className="text-lg font-semibold">
                  {params?.footer?.aboutCompany}
                </h5>

                <ul className="text-sm leading-7">
                  <li>
                    <a
                      href="https://www.secundo.no/dette-er-secundo/"
                      className="text-blac hover:underline"
                    >
                      {params?.footer?.aboutCompany}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/kjopsvilkar/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.termsOfPurchase}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/personvernerklaering/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.privacyStatement}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-span-1">
              <aside className="text-black">
                <h5 className="text-lg font-semibold">
                  {params?.footer?.categories}
                </h5>
                <ul className="text-sm leading-7">
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/mobler/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.furniture}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/sofa-og-lenestoler/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.sofaAndArmchairs}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/til-kontoret/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.toOffice}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/hvitevarer/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.appliances}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/sjeldne-funn/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.rareFinds}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.secundo.no/produkter/billigkroken/"
                      className="text-black hover:underline"
                    >
                      {params?.footer?.cheapHook}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
