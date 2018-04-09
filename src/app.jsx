import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import MemesContainer from "./components/MemesContainer/MemesContainer.jsx";
import configureStore from "./store/configure-store";
import "./app.scss";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <React.Fragment>
      <HomeContainer />
      <MemesContainer section="newest" />
      <MemesContainer section="liked" />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
