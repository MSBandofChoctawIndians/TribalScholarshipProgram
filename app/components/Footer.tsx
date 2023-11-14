import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#660032] py-4 text-white">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between lg:flex-row">
        <div className="item-center mb-4 flex gap-4 md:mb-0">
          <Image
            src="./image/TSPlogo.webp"
            alt="Tribal Scholarship Program"
            width={160}
            height={160}
          />
          <Image
            src="./image/seal.webp"
            alt="Mississippi Band of Choctaw Indians"
            width={160}
            height={160}
          />
        </div>
        <p className="text-md text-center lg:text-right">
          This page is maintained by the{" "}
          <a
            href="https://www.choctaw.org/media/index.html"
            className="whitespace-nowrap text-yellow-200"
          >
            Office of Public Information
          </a>
          . Copyright &copy; {new Date().getFullYear()}.{" "}
          <a
            href="https://www.choctaw.org"
            className="whitespace-nowrap text-yellow-200"
          >
            Mississippi Band of Choctaw Indians
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
