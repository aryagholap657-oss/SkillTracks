// js/auth.js
//
// SkillTrackAuth: small reusable wrapper around Supabase JS v2 auth
// methods. Requires js/supabase-config.js to have already run and set
// window.supabaseClient.
//
// This module does not store passwords anywhere. Supabase handles
// credential storage server-side; the browser only ever holds the
// session/access token that Supabase's client library manages
// internally (in localStorage, managed by the SDK itself).

var SkillTrackAuth = (function () {
  function client() {
    if (!window.supabaseClient) {
      throw new Error(
        "Supabase client not initialized. Make sure js/supabase-config.js " +
        "is loaded before js/auth.js."
      );
    }
    return window.supabaseClient;
  }

  // ---- Log in with email + password ----
  async function login(email, password) {
    return await client().auth.signInWithPassword({ email: email, password: password });
  }

  // ---- Sign up a new user ----
  // fullName is stored in auth user_metadata (data.full_name), NOT in a
  // separate database table. No profiles table is created or written to.
  async function signup(email, password, fullName) {
    return await client().auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName
        },
        emailRedirectTo: "http://localhost:5500/index.html"
      }
    });
  }

  // ---- Log out ----
  async function logout() {
    return await client().auth.signOut();
  }

  // ---- Get current session (or null) ----
  async function getSession() {
    return await client().auth.getSession();
  }

  // ---- Request a password reset email ----
  async function resetPassword(email) {
    return await client().auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5500/reset-password.html"
    });
  }

  // ---- Update the password for the currently-recovering/logged-in user ----
  async function updatePassword(newPassword) {
    return await client().auth.updateUser({ password: newPassword });
  }

  // ---- Subscribe to auth state changes ----
  // callback receives (event, session), matching Supabase's own signature.
  function onAuthStateChange(callback) {
    return client().auth.onAuthStateChange(callback);
  }

  return {
    login: login,
    signup: signup,
    logout: logout,
    getSession: getSession,
    resetPassword: resetPassword,
    updatePassword: updatePassword,
    onAuthStateChange: onAuthStateChange
  };
})();