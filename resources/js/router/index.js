import { createRouter, createWebHistory } from 'vue-router';

import ContactsIndex from '../components/contacts/ContactsIndex';
import ContactsCreate from '../components/contacts/ContactsCreate'; 
import ContactsEdit from '../components/contacts/ContactsEdit'; 

const routes = [
	{
		path: '/dashboard', 
		name: 'contacts.index', 
		component: ContactsIndex
	}, 
	{
		path: '/contacts/create', 
		name: 'contacts.create', 
		component: ContactsCreate
	}, 
	{
		path: '/contacts/:id/edit', 
		name: 'contacts.edit', 
		component: ContactsEdit, 
		props: true
	}
];

export default createRouter({
	history: createWebHistory(),
	routes
});