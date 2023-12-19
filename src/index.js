import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Baby Dibbs Pizza Co.</h1>
    </header>
  );
};

const Main = () => {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine made with all natural ingredients, and
            cooked in our stone oven! 6 different styles of pizze to choose
            from.
          </p>

          <ul className="pizzas">
            {pizzaData.map(
              (pizza) =>
                !pizza.soldOut && <Pizza pizzaObject={pizza} key={pizza.name} />
            )}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We will be back at {openHour}:00!</p>
      )}
    </footer>
  );
};

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const Pizza = ({ pizzaObject }) => {
  return (
    <li className="pizza">
      <div>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <div>
          <h3>{pizzaObject.name}</h3>
          <p>{pizzaObject.ingredients}</p>
          <span>{pizzaObject.price}</span>
        </div>
      </div>
    </li>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
