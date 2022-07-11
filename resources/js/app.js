import './bootstrap';

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

import { createApp } from 'vue';
import router from './router';
import ContactsIndex from './components/contacts/ContactsIndex';


createApp ({
	components: {
		ContactsIndex
	}
}).use(router).mount('#app')
