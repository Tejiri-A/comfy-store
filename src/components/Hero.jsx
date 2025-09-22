import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Comfy Store:The Heart of Your Home, Delivered.
        </h1>
        <p className="mt-8 max-w-xl leading-8">
          Discover the perfect couch to anchor your living space. At Comfy
          Store, we combine timeless style with sink-in comfort, so you can find
          your favorite spot to relax, unwind, and make memories. Your journey
          to a cozier home begins here.
        </p>
        <div className="mt-10">
          <Link to={"/products"} className="btn btn-primary">
            Out Products
          </Link>
        </div>
      </div>
      <div className="lg:carousel carousel-center bg-neutral rounded-box hidden h-[28rem] space-x-4 p-4">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img
              src={image}
              alt="couch"
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
