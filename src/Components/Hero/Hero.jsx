import React from "react";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";
import Button from "../Button/Button";
function Hero() {
  return (
    <section>
      <div className="max-w-360 min-h-screen mx-auto p-10 flex md:flex-row flex-col items-center pt-25">
        {/* Hero contant */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 px-5 md:py-5 py-3 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/21 text-5xl/12 font-bold mt-5 ">
            Tasty Organic{" "}
            <span className="text-orange-500">
              <br />
              Fruits
            </span>{" "}
            & <span className="text-orange-500">Veggies</span> <br />
            In Your City
          </h1>
          <p className="text-zine-600 md:text-lg text-md  max-w-[530] mt-5 mb-5">
            Bred of a high contant of beneficial substances. Our products are
            <br />
            all freash & Healthy.
          </p>
          <Button contant="Shop Now" />
        </div>
        {/* Home image */}
        <div className="flex-1 ">
          <img src={Grocery} alt="Remove in Folder" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
