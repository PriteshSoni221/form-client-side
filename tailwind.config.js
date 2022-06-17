module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        pwgreen:'#01201c',
        wkgreen:'#324b48',
        txt:'#d5d5ce',
        button:'#efb428'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}