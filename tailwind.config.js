const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1920px",

      mobile: "384px",
      tablet: "768px",
      laptop: "1440px",
      desktop: "1920px",
    },
    fontSize: {
      h1: "48px",
      h2: "32px",
      h3: "24px",
      h4: "20px",
      h5: "16px",
      h6: "12px",
      p1: "16px",
      p2: "12px",
      button: "16px",
      dropdown1: "16px",
      dropdown2: "12px",
    },
    lineHeight: {
      h1: "56px",
      h2: "40px",
      h3: "32px",
      h4: "24px",
      h5: "24px",
      h6: "16px",
      p1: "24px",
      p2: "16px",
      button: "24px",
      dropdown1: "24px",
      dropdown2: "16px",
    },
    extend: {
      gradientColorStops: {
        "gradient-radial": ["#2d3748", "#1a202c", "#1a202c"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
