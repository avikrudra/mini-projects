import { IItems } from "../interfaces/IItems";
import RecipeReviewCard from "./RecipeReviewCard";
export function Home() {
  const items: IItems[] = [
    {
      title: "Shrimp and colizzo",
      imagePath: "./Assets/Images/paella.jpg",
      description: "this is my first recipe",
    },
    {
      title: "chicken chilli",
      imagePath: "./Assets/Images/paella.jpg",
      description: "this is my first recipe",
    },
    {
      title: "pepperoni pizza",
      imagePath: "./Assets/Images/paella.jpg",
      description: "this is my first recipe",
    },
    {
      title: "chicken mayo pasta",
      imagePath: "./Assets/Images/paella.jpg",
      description: "this is my first recipe",
    },
    {
      title: "crispy chilli babycorn",
      imagePath: "./Assets/Images/paella.jpg",
      description: "this is my first recipe",
    },
  ];

  return (
    <div>
      <h2>home component rendering</h2>
      <div>
        {items.map((item) => {
          return <RecipeReviewCard productDescription={item} />;
        })}
      </div>
    </div>
  );
}
