import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import 'normalize.css';
import { globalRegisterFn } from './global';

const app = createApp(App);
app.use(store).use(globalRegisterFn).use(router).mount('#app');
