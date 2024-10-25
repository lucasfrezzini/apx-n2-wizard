class FieldsetEl extends HTMLElement {
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
      }
      input {
        box-sizing: border-box;
        width: 100%;
        border-radius: .4rem;
        height: 5.5rem;
        border: 2px solid black;
        padding: 1rem 2rem;
        font-size: 1.8rem;
      }
    </style>
    <div>
      <label for="${this.getAttribute("data-name")}"> 
        ${this.getAttribute("data-label")}
      </label>
    `;
    this.getAttribute("data-value")
      ? (this.shadowRoot!.innerHTML += `
      <input 
        type="${this.getAttribute("data-type")}" 
        name="${this.getAttribute("data-name")}"
        id="${this.getAttribute("data-name")}" 
        placeholder="${this.getAttribute("data-placeholder")}"
        value="${this.getAttribute("data-value")}">
      `)
      : (this.shadowRoot!.innerHTML += `
      <input 
        type="${this.getAttribute("data-type")}" 
        name="${this.getAttribute("data-name")}"
        id="${this.getAttribute("data-name")}" 
        placeholder="${this.getAttribute("data-placeholder")}">
      `);
    this.shadowRoot!.innerHTML += `</div>`;
  }
}

customElements.define("fieldset-element", FieldsetEl);
