// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom"; // <-- เปลี่ยนตรงนี้
import { Provider } from "react-redux";
import { store } from "./app/store";

// import CSS
import "./index.css";  // <--- ต้องมีถ้าใช้ global CSS
import "./App.css";    // <--- ถ้ามีไฟล์ CSS ของ App

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>  {/* <-- เปลี่ยนจาก BrowserRouter */}
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
