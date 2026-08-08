/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#60A5FA",
        success: "#22C55E",
        canvas: "#F8FAFC",
        ink: "#0F172A",
        muted: "#64748B"
      },
      borderRadius: {
        app: "24px"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.10)",
        soft: "0 14px 40px rgba(37, 99, 235, 0.14)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
