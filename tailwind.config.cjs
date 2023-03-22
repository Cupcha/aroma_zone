const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
       sans: ['Karla', 'sans-serif']
     },
    extend: {
      colors: {
        purplebg: "#D8C3E3",
        purpletext: "#825C88",
        brownbg: "#D2C9C0",
        browntext:"#8A766A",
        brownmobile: "#D2BA9A",
        browntestimonial: "#F7EFE4",
      },
      padding: {
        'custom-top': '1040px 0 0 0', // top right bottom left
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
      // You may need to adjust the font weights based on the font files you downloaded
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
    }
  },

  plugins: [],
};

module.exports = config;
