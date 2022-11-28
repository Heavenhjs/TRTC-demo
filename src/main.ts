import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import TRTC from 'trtc-js-sdk';
import mitt from 'mitt';
import VueClipboard from 'vue3-clipboard';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ELementPluseIconsVue from '@element-plus/icons-vue';
import i18n from '@/locales';
import aegis from '@/utils/aegis';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';

const app = createApp(App);

const bus = mitt();
TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
app.use(i18n);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});
app.provide('$bus', bus);
app.provide('$aegis', aegis);
app.config.globalProperties.$bus = bus;
app.config.globalProperties.$aegis = aegis;
app.mount('#app');

// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ELementPluseIconsVue)) {
  app.component(key, component);
}
