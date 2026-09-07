// js/supabase-config.js
//
// Initializes a single Supabase JS v2 browser client and exposes it
// globally as `window.supabaseClient` for use by js/auth.js.
//
// IMPORTANT:
// - Only the browser-safe "anon"/"publishable" key belongs here.
// - NEVER put the service_role key, a secret key, or the database
//   password in this file (or anywhere in frontend code).
//
// TODO: Replace the two placeholders below with your actual project
// values from Supabase Dashboard -> Project Settings -> API:
//   - SUPABASE_URL    -> "Project URL"
//   - SUPABASE_ANON_KEY -> "anon" / "publishable" key (NOT service_role)

(function () {
  var SUPABASE_URL = "https://uiwegnffpkfimmppeibk.supabase.co";
  var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpd2VnbmZmcGtmaW1tcHBlaWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3OTczNDcsImV4cCI6MjEwNDM3MzM0N30.zrSo7bjNahKsdsC-KuZPo2MQsKiJvGAreZ3sTO2UrLE";

  if (typeof supabase === "undefined" || !supabase.createClient) {
    console.error(
      "Supabase JS v2 library not found. Make sure the CDN script " +
      "(https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2) is loaded " +
      "BEFORE js/supabase-config.js."
    );
    return;
  }

  // Single shared client instance for the whole app.
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();