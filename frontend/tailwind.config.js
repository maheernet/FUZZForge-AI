/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        primary: {
          DEFAULT: "#22D3EE",
          foreground: "#060914",
        },
        secondary: {
          DEFAULT: "#0A1020",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "#F43F5E",
          foreground: "#F8FAFC",
        },
        muted: {
          DEFAULT: "#111A30",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#111A30",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "#0D1426",
          foreground: "#F8FAFC",
        },
        card: {
          DEFAULT: "#0D1426",
          foreground: "#F8FAFC",
        },
        navy: {
          800: '#0A1020',
          900: '#060914',
          950: '#04060d',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06b6d4',
        },
        purple: {
          400: '#a78bfa',
          500: '#8B5CF6',
        },
        green: {
          400: '#34D399',
          500: '#10b981',
        },
        pink: {
          400: '#f472b6',
          500: '#F43F5E',
        },
        yellow: {
          500: '#FBBF24',
        }
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
      fontFamily: {
        sans: ["Inter", "Geist", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'IBM Plex Mono'", "monospace"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
