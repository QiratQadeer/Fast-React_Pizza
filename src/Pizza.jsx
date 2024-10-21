import focacciaImg from "./assets/pizzas/focaccia.jpg";
import margheritaImg from "./assets/pizzas/margherita.jpg";
import spinaciImg from "./assets/pizzas/spinaci.jpg";
import funghiImg from "./assets/pizzas/funghi.jpg";
import salaminoImg from "./assets/pizzas/salamino.jpg";
import prosciuttoImg from "./assets/pizzas/prosciutto.jpg";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photo: focacciaImg,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photo: margheritaImg,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photo: spinaciImg,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photo: funghiImg,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photo: salaminoImg,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photo: prosciuttoImg,
    soldOut: false,
  },
];

function Pizza(props) {
  const { pizza } = props;
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza, index) => (
        <li className="pizza" key={index}>
          <img src={pizza.photo} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>${pizza.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Pizza;
