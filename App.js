const nested_div = React.createElement(
  "div",
  { id: "outsideDiv" },
  React.createElement(
    "div",
    { id: "indsideDiv" },
    React.createElement("h1", { id: "heading" }, "Welcome to React World!")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested_div);
