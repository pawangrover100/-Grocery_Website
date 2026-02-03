import React from "react";
import Heading from "../Heading/Heading";
import FruetCat from "../../assets/Grocery Website Assets/fruits-and-veggies.png";
import DairyCat from "../../assets/Grocery Website Assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/Grocery Website Assets/meat-and-seafood.png";

function Category() {
  const renderCards = Category.map(card=>{
    return(
      <div>
        <div>
          <img src={{card.image}} alt="" />
        </div>
      </div>

    )
  })
  return (
    <section>
      <div className="md:py-15 py-10">
        <Heading highlight="shop" heading="By category" />
        {/* Category card */}
        <div></div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "Fruets & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruetCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];
