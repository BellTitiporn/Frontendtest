import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Test1 from "./component/Layout&Style";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import FormComponent from "./component/Form";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/layout" element={<Test1></Test1>}></Route>
            <Route path="/form" element={<FormComponent />}></Route>
          </Routes>
        </div>
      </Provider>
    </I18nextProvider>
  );
}

export default App;