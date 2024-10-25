import { initStepOne } from "../pages/StepOne/StepOne";
import { initWelcome } from "../pages/Welcome/Welcome";
import { initThankyou } from "../pages/Thankyou/Thankyou";

interface Route {
  path: string;
  render: () => any;
}

// TODO routes con una coleccion de rutas
const routes: Array<Route> = [
  {
    path: "/",
    render: initWelcome,
  },
  {
    path: "/welcome",
    render: initWelcome,
  },
  {
    path: "/step-1",
    render: initStepOne,
  },
  {
    path: "/thankyou",
    render: initThankyou,
  },
];

// TODO fn handleRoute para evaluar si existe la ruta y correr el componente
export function handleRoute(route: string) {
  routes.forEach((r) => {
    if (r.path == route) {
      r.render();
    }
  });
}

// TODO fn goTo para indicar donde queremos ir
export function goTo(path: string) {
  history.pushState({}, "", path);
  handleRoute(path);
}
