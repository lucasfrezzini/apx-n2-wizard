import { goTo } from "../../router/Router";
import { state } from "../../state/state";

export function initWelcome() {
  const root = document.createElement("div");
  root.classList.add("root");
  const name: string = state.getState().name || "";

  root.innerHTML = `
    <navbar-element></navbar-element>
    <div class="container">
      <title-element data-size="big">Te damos la bienvenida a esta página</title-element>
      <title-element>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</title-element>
      <title-element data-size="large">Para continuar ingresá tu nombre</title-element>
      <form action="">
        <fieldset-element data-type="text" data-name="nombre" data-label="Nombre" data-value="${name}" data-placeholder="Ingrese su nombre"></fieldset-element>
        <button-element class="to">Comenzar</button-element>
      </form>
    </div>
    <footer-element></footer-element>
  `;
  document.body.replaceChildren(root);

  const btnElementTo = document.querySelector("button-element.to");
  btnElementTo?.addEventListener("click", function (e) {
    e.preventDefault();
    goTo("/step-1");
  });
}
