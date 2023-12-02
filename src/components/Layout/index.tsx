import { useSnapshot } from "valtio";
import { state } from "../../store";
import styles from "./styles.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const appstate = useSnapshot(state);
  return (
    <div>
      <nav className={styles.bar}>
        <span>Logo</span>
        cart: {appstate.cart.length}
      </nav>
      <div>{children}</div>
    </div>
  );
}
