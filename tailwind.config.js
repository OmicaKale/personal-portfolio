/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'black':'#000',
      'white':'#fff',
      'primary': '#FD6F00',
      'slate500':'#0f172a',
      'slate400':'#1e293b',
      'slate300':'#0f172a',
      'slate200':'#35445c',
      'gray500': '#F8F8F8',
      'gray600':'#545454',
      'gray700':"#EDECEC",
      'gray900':'#AFAFAF',
      'gray':'797979',
      
    },
  },
  plugins: [],
};
