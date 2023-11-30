export default function Page() {
  return (
    <section className="mx-auto mt-8 max-w-[1024px] px-4 sm:px-6 lg:px-0">
      <div className="prose prose-slate mx-auto max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
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
    </section>
  );
}
