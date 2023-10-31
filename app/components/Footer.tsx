export default function Footer() {
  return (
    <footer className="bg-[#660032] text-white py-4 mt-8">
      <div className="max-w-[1024px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex item-center">
          <img
            src="./image/TSPlogo.webp"
            alt="Tribal Scholarship Program"
            className="w-20 h-20 lg:w-40 lg:h-40 mr-4"
          />
          <img
            src="./image/seal.webp"
            alt="Mississippi Band of Choctaw Indians"
            className="w-20 h-20 lg:w-40 lg:h-40"
          />
        </div>
        <p className="text-center lg:text-right text-md">
          This page is maintained by the{" "}
          <a
            href="https://www.choctaw.org/media/index.html"
            className="text-yellow-200 whitespace-nowrap"
          >
            Office of Public Information
          </a>
          . Copyright &copy; {new Date().getFullYear()}.{" "}
          <a
            href="https://www.choctaw.org"
            className="text-yellow-200 whitespace-nowrap"
          >
            Mississippi Band of Choctaw Indians
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
