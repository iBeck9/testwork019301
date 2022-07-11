import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useContacts() {

	const contacts = ref([]);  
	const contact = ref([]); 
	const router = useRouter();
	const errors = ref(''); 

	const getContacts = async () => {
		let response = await axios.get('/api/contacts');
		contacts.value = response.data.data; 
	}

	const getContact = async (id) => {
		let response = await axios.get('/api/contacts/' + id);
		contact.value = response.data.data;
	}

	const storeContact = async (data) => {
        errors.value = ''

        try {
            await axios.post('/api/contacts', data)
            await router.push({name: 'contacts.index'})
        } catch (e) {
            if (e.response.status === 422) {
            	for (const key in e.response.data.errors) {
            		errors.value +=	e.response.data.errors[key][0] + ' '; 	
            	}
            }
        }
    }

    const updateContact = async (id) => {
        errors.value = ''

        try {
            await axios.put('/api/contacts/' + id, contact.value)
            await router.push({name: 'contacts.index'})
        } catch (e) {
            if (e.response.status === 422) {
            	for (const key in e.response.data.errors) {
            		errors.value +=	e.response.data.errors[key][0] + ' '; 	
            	}
            }
        }
    }

	const destroyContact = async (id) => {
		await axios.delete('/api/contacts/' + id);
	}

	return {
		contacts,
		contact,
		errors, 
		getContacts, 
		getContact, 
		storeContact, 
		updateContact,
		destroyContact
 
	}
}