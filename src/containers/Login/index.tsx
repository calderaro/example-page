import { LoginForm } from "../../components/LoginForm";
import styles from "./styles.module.css";

export function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
