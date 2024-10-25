import { state } from "../../state/state";

class ButtonEl extends HTMLElement {
  button!: HTMLElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event: any) {
    if (event.type == "click") {
      this.sendData();
    }
  }

  sendData() {
    let newState: object = {};
    const fieldName = document.querySelector("[data-name=nombre]");
    const nameValue = fieldName?.shadowRoot?.querySelector("input")!.value;
    if (nameValue) newState = { name: nameValue };

    const fieldEmail = document.querySelector("[data-name=email]");
    const emailValue = fieldEmail?.shadowRoot?.querySelector("input")!.value;
    if (emailValue) newState = { ...newState, email: emailValue };

    const fieldFood = document.querySelector("[data-name=comida]");
    const foodValue = fieldFood?.shadowRoot?.querySelector("input")!.value;
    if (foodValue) newState = { ...newState, food: foodValue };

    const fieldSelect = document.querySelector("[data-name=opciones]");
    const selectNode = fieldSelect?.shadowRoot?.querySelector("select");
    const selectValue = selectNode?.options[selectNode.selectedIndex].text;
    if (selectValue) newState = { ...newState, options: selectValue };

    state.setState(newState);
    console.log(state.getState());
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
    <style>
      button {
        display: block;
        cursor: pointer;
        border: 2px solid black;
        width: 100%;
        box-sizing: border-box;
        padding: 1.5rem 0;
        font-size: 2.2rem;
        font-weight: bold;
        font-family: var(--font);
        border-radius: .5rem;
        margin-top: 5rem;
      }
    </style>
    `;
    if (this.getAttribute("data-type") == "outlined") {
      this.shadowRoot!.innerHTML += `
      <button><slot></slot></button>
      `;
    } else {
      this.shadowRoot!.innerHTML += `
      <style>
        button {
          border: none;
          background-color: var(--color-blue);
          margin-top: 1rem;
        }
      </style>
      <button><slot></slot></button>
      `;
    }

    this.button = this.shadowRoot?.querySelector("button")!;
    this.button.addEventListener("click", this);
  }
}

customElements.define("button-element", ButtonEl);
