import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css'

// import vuetify from 'vuetify';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './routes';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
});

createApp(App).use(vuetify).use(router).mount('#app');
