import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { store } from './store';
import 'normalize.css';
import 'animate.css';
import { globalRegisterFn } from './global';

const app = createApp(App);
app.use(store).use(globalRegisterFn).use(router).mount('#app');
