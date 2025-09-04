import React, { useState } from "react";
import Header from "../components/Header";

export default function AuthCard() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Fields for login vs signup
  const fields = {
    login: [
      { key: "email", label: "Email", type: "email" },
      { key: "password", label: "Password", type: showPassword ? "text" : "password" },
    ],
    signup: [
      { key: "name", label: "Full Name", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "password", label: "Password", type: showPassword ? "text" : "password" },
    ],
  };

  const validate = () => {
    const e = {};

    if (mode === "signup" && !form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Enter a valid email";

    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Minimum 6 characters";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);

    if (mode === "signup") {
      alert(`Signed up as ${form.name || "New User"}!\nEmail: ${form.email}`);
    } else {
      alert(`Logged in!\nEmail: ${form.email}`);
    }
  };

  const switchMode = () => {
    setMode((m) => (m === "login" ? "signup" : "login"));
    setErrors({});
  };

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ✅ Header on top */}
      <Header  title="💬 SmartChat
" />

      {/* ✅ Centered card */}
      <div className="flex-grow flex items-start justify-center mt-10">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header Tabs */}
            <div className="grid grid-cols-2">
              <button
                className={`py-3 text-center font-semibold transition-colors ${
                  mode === "login"
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setMode("login")}
              >
                Login
              </button>
              <button
                className={`py-3 text-center font-semibold transition-colors ${
                  mode === "signup"
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setMode("signup")}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={onSubmit} className="p-6 space-y-4">
              <h1 className="text-xl font-bold text-gray-800">
                {mode === "login"
                  ? "Welcome back 👋"
                  : "Create your account 🚀"}
              </h1>

              {/* Render fields based on mode */}
              {fields[mode].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {f.label} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={f.type}
                      autoComplete={f.key}
                      placeholder={`Enter your ${f.label.toLowerCase()}`}
                      className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors[f.key] ? "border-red-400" : "border-gray-200"
                      }`}
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                    />

                    {f.key === "password" && (
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute inset-y-0 right-2 px-2 text-sm text-gray-500"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    )}
                  </div>
                  {errors[f.key] && (
                    <p className="text-xs text-red-500 mt-1">{errors[f.key]}</p>
                  )}
                </div>
              ))}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? mode === "login"
                    ? "Logging in..."
                    : "Creating account..."
                  : mode === "login"
                  ? "Login"
                  : "Sign Up"}
              </button>

              {/* Switch mode */}
              <div className="text-center text-sm text-gray-600">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex-1 h-px bg-gray-200" />
                <span>or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="border rounded-xl px-3 py-2 hover:bg-gray-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="border rounded-xl px-3 py-2 hover:bg-gray-50"
                >
                  GitHub
                </button>
              </div>
            </form>
          </div>

          {/* Tiny footer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
