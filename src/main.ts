import { handleRoute } from "./router/Router";
import "./components/TitleElement/TitleElement";
import "./components/Navbar/Navbar";
import "./components/Footer/Footer";
import "./components/Fieldset/Fieldset";
import "./components/FieldsetSelect/FieldsetSelect";
import "./components/Button/Button";
import "./pages/Welcome/Welcome";

// cuando cargo todo llamo al handleRoute para renderizar correctamente
window.addEventListener("load", () => {
  console.log("event", location.pathname);
  handleRoute(location.pathname);
});
