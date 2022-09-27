import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/Home";
import Vehicles from "./pages/Vehicles";
import "./styles/global.css";
import Home from "./pages/Home";
import axios from "axios";
import { rootReducer } from "./state/reducer";
import Loader from "./components/common/Loader";

function Vptracky() {
  const [store, dispatch] = React.useReducer(rootReducer, {});
  React.useEffect(() => {
    (async () => {
      dispatch({ type: "SHOW_LOADER" });
      await axios.get("/content/global.json").then(({ data }) => {
        dispatch({ type: "ADD_CONTENT", payload: data });
      });
      dispatch({ type: "HIDE_LOADER" });
    })();
  }, []);

  const content = store.TXT;

  return (
    <>
      {store.loader && <Loader />}
      {content && (
        <Routes>
          <Route path="/" element={<HomeTemplate store={store} dispatch={dispatch} />}>
            <Route index element={<Home store={store} dispatch={dispatch} />} />
            <Route path="/vehicles" element={<Vehicles store={store} dispatch={dispatch} />} />
            <Route path="/vehicles/:vehicleId" element={<Vehicles store={store} dispatch={dispatch} />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default Vptracky;
