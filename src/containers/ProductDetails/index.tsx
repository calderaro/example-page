import { Layout } from "../../components/Layout";
import { state } from "../../store";

export function ProductDetails() {
  function addToCart() {
    console.log("add to cart");
    state.cart.push({ id: 1, name: "Item 1 a", price: 10 });
  }
  return (
    <Layout>
      <div>
        <h1>ProductDetails</h1>
        <button onClick={addToCart}>add to cart</button>
      </div>
    </Layout>
  );
}
