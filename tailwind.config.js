module.exports = {
  content: ["./src/pug/**/*.pug"],
  theme: {
    extend: {
      colors: {
        "Header-color": "#ffde59",
        "Button-color": "#a61005",
        "background-color": "#eb9e8c",
        "background-color2": "#e6907c",
      },
     screens:{
       'Smartphone':'300px',
       'bganimation':'1200px',
       'Portfolio':'800px'
     },
      animation: {
        test: "test 4s",
        test1: "test 5s",
        pulse: "pulse 6s infinite",
      },
      keyframes: {
        test: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
