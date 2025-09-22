const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6">
        <h1 className="tracking-light text-4xl leading-none font-bold sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
        At Comfy Store, we believe a couch is more than just a piece of
        furniture—it's the centerpiece of your life's best moments. It’s where
        you curl up with a good book, gather for family movie nights, and share
        conversations with friends. <br />
        That's why we've made it our mission to take the hassle out of furniture
        shopping. We curate a premium selection of stylish, durable, and
        unbelievably comfortable couches and deliver them directly to your door.
        By focusing exclusively on what we do best, we ensure every piece from
        Comfy Store is crafted with quality materials and designed for real
        life.
      </p>
    </>
  );
};
export default About;
