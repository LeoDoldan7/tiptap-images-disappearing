/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "base-1": "var(--base-1)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",

        "gray-50": "var(--gray-50)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",

        "success-50": "var(--success-50)",
        "success-100": "var(--success-100)",
        "success-200": "var(--success-200)",
        "success-300": "var(--success-300)",
        "success-400": "var(--success-400)",
        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",
        "success-800": "var(--success-800)",
        "success-900": "var(--success-900)",

        "error-50": "var(--error-50)",
        "error-100": "var(--error-100)",
        "error-200": "var(--error-200)",
        "error-300": "var(--error-300)",
        "error-400": "var(--error-400)",
        "error-500": "var(--error-500)",
        "error-600": "var(--error-600)",
        "error-700": "var(--error-700)",
        "error-800": "var(--error-800)",
        "error-900": "var(--error-900)",

        "warning-50": "var(--warning-50)",
        "warning-100": "var(--warning-100)",
        "warning-200": "var(--warning-200)",
        "warning-300": "var(--warning-300)",
        "warning-400": "var(--warning-400)",
        "warning-500": "var(--warning-500)",
        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",
        "warning-900": "var(--warning-900)",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      zIndex: {
        100: "100",
        200: "200",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      textColor: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
