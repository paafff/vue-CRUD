import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //...
  // build: {
  //   transpile: ['vuetify'],
  // },
  // modules: [
  //   (_options, nuxt) => {
  //     nuxt.hooks.hook('vite:extendConfig', (config) => {
  //       config.plugins.push(vuetify({ autoImport: true }));
  //     });
  //   },
  //   //...
  // ],
  // vite: {
  //   vue: {
  //     template: {
  //       transformAssetUrls,
  //     },
  //   },
  // },
});
