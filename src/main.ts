import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Chart from 'primevue/chart';
import router from './router';
import "primeflex/primeflex.css";
import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "@/assets/base.css";

import ConfirmDialog from 'primevue/confirmdialog';
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";

const app = createApp(App);
app.use(createPinia());

app.use(PrimeVue,{ripple: true});
app.use(DialogService);
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);
app.component('Chart', Chart);
app.component('Toast', Toast)
app.component('ConfirmDialog', ConfirmDialog);
app.mount('#app');
