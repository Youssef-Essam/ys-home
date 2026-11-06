// ============================================================
//  Split app settings — the only file you need to edit.
// ============================================================
window.SPLIT_CONFIG = {
  // The two people sharing costs. "id" must stay lowercase, no spaces.
  people: [
    { id: "youssef", name: "Youssef" },
    { id: "samar", name: "Samar" },
  ],

  currency: "EGP",

  // Paste your Firebase web config here (see README, step 1).
  // While this is null the app works in LOCAL-ONLY mode (no syncing between phones).
  firebase: null,
  /* Example:
  firebase: {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123",
  },
  */
};
