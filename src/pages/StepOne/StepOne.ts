import { goTo } from "../../router/Router";

export function initStepOne() {
  const root = document.createElement("div");
  root.classList.add("root");

  root.innerHTML = `
    <navbar-element></navbar-element>
    <div class="container">
      <title-element data-size="big">Necesitamos algunos datos más</title-element>
      <form action="">
        <fieldset-element data-type="email" data-name="email" data-label="Email" data-placeholder="Ingrese su email"></fieldset-element>
        <fieldset-element data-type="text" data-name="comida" data-label="Comida favorita" data-placeholder="Ingrese su comida favorita"></fieldset-element>
        <fieldsetselect-element data-name="opciones" data-label="Alguna de estas tres opciones"></fieldsetSelect-element>
        <button-element class="to">Continuar</button-element>
        <button-element class="back" data-type="outlined">Volver</button-element>
      </form>
    </div>
    <footer-element></footer-element>
  `;
  document.body.replaceChildren(root);

  const btnElementTo = document.querySelector("button-element.to");
  btnElementTo?.addEventListener("click", function () {
    goTo("/thankyou");
  });

  const btnElementBack = document.querySelector("button-element.back");
  btnElementBack?.addEventListener("click", function () {
    goTo("/welcome");
  });
}
