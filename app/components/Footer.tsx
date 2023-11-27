import { Image, Link } from "@nextui-org/react";
import ContactForm from "./Contact";

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#420020] py-4 text-white">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between lg:flex-row">
        <ContactForm />
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
          <Link
            href="https://www.choctaw.org/media/index.html"
            isExternal
            color="primary"
          >
            Office of Public Information
          </Link>
          . Copyright &copy; {new Date().getFullYear()}.{" "}
          <Link href="https://www.choctaw.org" isExternal color="primary">
            Mississippi Band of Choctaw Indians
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
