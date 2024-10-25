import { goTo } from "../../router/Router";
import { state } from "../../state/state";

export function initThankyou() {
  const root = document.createElement("div");
  root.classList.add("root");
  let { name, email, food, options } = state.getState();
  email = email || "No se completo el campo";
  name = name || "";
  food = food || "No se completo el campo";
  options = options || "No se completo el campo";

  root.innerHTML = `
    <navbar-element></navbar-element>
    <div class="container" style="height: calc(100vh - 360px)">
      <title-element data-size="big">Gracias ${name}</title-element>
      <title-element data-size="large">Toda la información que nos brindaste es muy importante</title-element>
      <title-element >
        <p><strong>Tu correo:</strong> ${email}</p>
        <p><strong>Tu comida favorita:</strong> ${food}</p>
        <p><strong>La opcion elegida:</strong> ${options}</p>
      </title-element>
      <button-element class="to">De nada</button-element>
    </div>
    <footer-element></footer-element>
  `;
  document.body.replaceChildren(root);

  const btnElementTo = document.querySelector("button-element.to");
  btnElementTo?.addEventListener("click", function () {
    goTo("/welcome");
  });
}
