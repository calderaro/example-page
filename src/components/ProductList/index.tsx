import { Item } from "../../store";
import styles from "./styles.module.css";

export interface ProductListProps {
  items: Item[];
  onSelect?: (item: Item) => void;
}

export function ProductList({ items, onSelect }: ProductListProps) {
  return (
    <div>
      <div className={styles.list}>
        {items.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect?.(product)}
            className={styles.item}
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
}
