// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "@/assets/sass/generic/_fonts.scss";
          @import "@/assets/sass/critical.scss";
          @import "@/assets/sass/main.scss";
        `
      }
    }
  },
};