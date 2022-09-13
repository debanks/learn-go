import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ScrollTo from 'vue-scrollto';
import PrimeVue from 'primevue/config';

import './assets/main.css';
import "primevue/resources/themes/arya-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css"
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(PrimeVue);
app.use(router)
app.use(ScrollTo);

app.mount('#app')
