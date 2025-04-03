import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contextt from "./pages/Contextt";
import { Provider } from "react-redux";
import store from "./pages/store/Store";
console.log("🔄 Rendering index.tsx");
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
    <Contextt>
    <App />
    </Contextt>
    </Provider>
);

//https://abood123-dev.github.io/rest-elite