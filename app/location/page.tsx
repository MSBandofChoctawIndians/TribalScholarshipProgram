export default function Page() {
  return (
    <section className="bg-tile top-[-40px]">
      <div className="top-4 mx-auto max-w-[1024px] bg-black px-4 pb-4 sm:px-6 lg:px-2">
        <div className="prose prose-slate mx-auto max-w-none pt-4 dark:prose-invert md:prose-lg lg:prose-xl">
          <h1>Location</h1>
          <p>
            Tribal Scholarship Program
            <br />
            107 Annex Circle
            <br />
            Choctaw, MS 39350
          </p>
          <iframe
            width="100%"
            height="750"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=107%20annex%20circle%2C%20choctaw%2C%20ms%2039350&key=AIzaSyDNcMoZR9-hG5Gl6jcNT_1iGmtpXTWhFAg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
