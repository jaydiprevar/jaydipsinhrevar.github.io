// script.js
// Enhanced utility functions
class CryptoUtils {
  static async generateRSAKeyPair() {
    return await window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // ... all the rest of your JavaScript functions ...
}

// At the end of the file
document.addEventListener('DOMContentLoaded', initializeEventHandlers);