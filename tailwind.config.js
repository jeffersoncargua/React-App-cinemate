module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode : 'class',
    theme: {
      extend: {
        screens:{
          'other' : {'min':'500px','max':'1266px'},
          'md':'804px',
        },
        colors:{
          darkbg: "#1e293b",
        },
      },
    },
    plugins: [],
  }