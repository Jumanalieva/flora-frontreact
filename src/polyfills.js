// src/polyfills.js

import { Buffer } from 'buffer';

// Polyfill global for the browser environment
if (typeof global === 'undefined') {
    window.global = window;
}

// Polyfill Buffer for aws-amplify
window.Buffer = window.Buffer || Buffer;

