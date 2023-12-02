import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { state, Item } from "../../store";
import { ProductList } from "../../components/ProductList";
import styles from "./styles.module.css";
import { Layout } from "../../components/Layout";

const initialState: Item[] = [
  { id: 1, name: "Item 1 a", price: 10 },
  { id: 2, name: "Item 2 a", price: 20 },
  { id: 3, name: "Item 3 a", price: 30 },
];

export function Home() {
  const navigate = useNavigate();
  const appstate = useSnapshot(state);

  useEffect(() => {
    console.log("Home mounted");
    state.items = initialState;
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Home</h1>
        <ProductList
          items={appstate.items as Item[]}
          onSelect={(e) => {
            navigate(`/product/${e.id}`);
          }}
        />
      </div>
    </Layout>
  );
}
