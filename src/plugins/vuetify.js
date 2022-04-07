import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#000733",
        secondary: "#FFFFFF",
        accent: "#FFFFFF",
        error: "#BF3D3D",
        info: "#196DB3",
        success: "#367D38",
        warning: "#E6AE07",
      },
    },
  },
});
