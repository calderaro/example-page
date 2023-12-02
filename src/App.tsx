import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Login } from "./containers/Login";
import { Home } from "./containers/Home";
import { state } from "./store";
import { ProductDetails } from "./containers/ProductDetails";

function App() {
  const appstate = useSnapshot(state);

  if (appstate.user === null) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
