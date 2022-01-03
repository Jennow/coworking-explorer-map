import { createApp } from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

const app = createApp(App);

app.use(VueGoogleMaps, {
  load: {
    key: '{{google api key}}',
  },
}).use(router).mount('#app');
