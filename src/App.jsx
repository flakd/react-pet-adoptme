import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Mia",
      animal: "Dog",
      breed: "Pitbull",
    }),
    React.createElement(Pet, {
      name: "Furball",
      animal: "Cat",
      breed: "Alley Cat",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
