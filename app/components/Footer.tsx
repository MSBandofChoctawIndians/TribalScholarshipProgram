import { Image } from "@nextui-org/image";
import Link from "next/link";
import WeaveBand from "./WeaveBand";

export default function Footer() {
  return (
    <>
      <WeaveBand />
      <footer className="bg-[#420020] py-4 text-white">
        <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between lg:flex-row">
          <div className="item-center mb-4 flex gap-4 md:mb-0">
            <Image
              src="./image/tsp_logo.svg"
              alt="Tribal Scholarship Program"
              width={160}
              height={160}
              loading="lazy"
            />
            <Link href="https://www.choctaw.org/">
              <Image
                src="./image/seal.webp"
                alt="Mississippi Band of Choctaw Indians"
                width={160}
                height={160}
                loading="lazy"
              />
            </Link>
          </div>
          <p className="text-md text-center lg:text-right">
            This page is maintained by the Office of Public Information.
            Copyright &copy; {new Date().getFullYear()}. Mississippi Band of
            Choctaw Indians. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
