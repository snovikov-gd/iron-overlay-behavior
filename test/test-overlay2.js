import '@polymer/polymer/polymer-legacy.js';
import { IronOverlayBehavior } from '../iron-overlay-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        background: white;
        color: black;
        border: 1px solid black;
      }
    </style>

    <button id="first">first</button>
    <slot></slot>
    <button id="last">last</button>
`,

  is: 'test-overlay2',

  behaviors: [
    IronOverlayBehavior
  ],

  get _focusableNodes() {
    return [this.$.first, this.$.last];
  }
});
