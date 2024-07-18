// IMPORT
import { c, css } from "atomico";

// WEBCOMPONENT
function component({ message }) {
  return <host shadowDom>${message}</host>;
}

// WEBCOMPONENT PROPERTIES AND ATTRIBUTES
component.props = {
  message: String,
};

// WEBCOMPONENT APPEARANCE
component.styles = css`
  :host {
    font-size: 30px;
  }
`;

// DEFINITION OF THE WEBCOMPONENT AS A TAG
customElements.define("my-component", c(component));
