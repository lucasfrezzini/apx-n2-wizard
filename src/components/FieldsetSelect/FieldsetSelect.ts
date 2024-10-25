class FieldsetSelectEl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
    <style>
      div {
        margin-top: 3rem;
        display: block;
      }
      label {
        font-size: 1.8rem;
        display: block;
        margin-top: 2rem;
      }
      select {
        box-sizing: border-box;
        width: 100%;
        border-radius: .4rem;
        height: 5.5rem;
        border: 2px solid black;
        padding: 1rem 2rem;
        font-size: 1.8rem;
        margin-bottom:2rem;
      }
    </style>
    <form>
      <label for="${this.getAttribute("data-name")}">${this.getAttribute(
      "data-label"
    )}</label>
      <select name="${this.getAttribute("data-name")}">
        <option value="pastel-de-papas">Pastel de papas</option>
        <option value="fideos" selected>Fideos</option>
        <option value="ravioles">Ravioles</option>
      </select>
    </form>
    `;
  }
}

customElements.define("fieldsetselect-element", FieldsetSelectEl);
