import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/style.sass";
import components from '@/components/UI/UIComponents';

const app = createApp(App)
components.forEach((component:any)=> {
    app.component(component.name, component);
});

app.use(store).use(router).mount('#app');
