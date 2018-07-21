import {LitElement, html} from '@polymer/lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-styles/shadow.js';
import '@polymer/paper-styles/typography.js';

class EmptyState extends LitElement {

  static get properties() {
    return {
      icon: String,
      text: String
    }
  }

  constructor() {
    super();
  }

  _render({icon, text}) {
    return html`
      <style>
        :host {
          display: block;
        }
        #container {
          color: var(--secondary-text-color, #727272);
          padding-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        #iconBackground {
          @apply --shadow-elevation-2dp;
          width: 192px;
          height:192px;
          background-color: var(--divider-color, #B6B6B6);
          border-radius:50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #icon {
            --iron-icon-height: 128px;
            --iron-icon-width: 128px;
            color: var(--text-primary-color, #FFFFFF);
        }
        #text {
          @apply --paper-font-headline;
        }
      </style>
        <div id="container">
        <paper-material id="iconBackground" class="layout horizontal center center-justified self-center">
          <iron-icon id="icon" icon="${icon}"></iron-icon>
        </paper-material>
        <p id="text">${text}</p>
      </div>
    `;
  }

}
customElements.define('empty-state', EmptyState);
