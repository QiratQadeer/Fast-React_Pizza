import Pizza from "./Pizza";
function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <Pizza />
      </main>
    </>
  );
}
export default Menu;
