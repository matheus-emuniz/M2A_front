import Vue from 'vue';
import Vuetify, {VSnackbar} from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  components: {
    VSnackbar
  }
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: '#C4C4C4',
        primary: '#004976',
        accent1: '#454747',
      }
    }
  }
});
