import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Medicine from "./pages/Medicine/Medicine";
import Store from "./pages/Store/Store";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import MedicineProductDetail from "./components/MedicineDetail/MedicineDetail";
import Modal from "react-modal";
import Basket from "./pages/Basket/Basket";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Medicine"
          element={
            <Layout>
              <Medicine />
            </Layout>
          }
        />
        <Route
          path="/Store"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />
        <Route
          path="/Medicine/:name"
          element={
            <Layout>
              <MedicineProductDetail />
            </Layout>
          }
        />
        <Route
          path="/Store"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/Basket"
          element={
            <Layout>
              <Basket />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
