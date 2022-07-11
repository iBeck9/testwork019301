<template>
	<div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">

		<div class="flex place-content-end mb-4">
            <div class="px-4 py-2 text-white rounded-md bg-gray-800 cursor-pointer">
                <router-link :to="{ name: 'contacts.create' }" class="text-sm font-medium uppercase">Create contact</router-link>
            </div>
        </div>


			<table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">E-mail</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">Phone #</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">City</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">Address</span>
                </th>
                <th class="px-6 py-3 bg-gray-50" colspan="2">
                    <span
                        class="text-xs font-bold tracking-wider leading-4 text-left text-gray-500 uppercase">Actions</span>
                </th>
                
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in contacts" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        {{ item.firstname + ' ' + item.lastname }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        {{ item.phone }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        {{ item.city }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        {{ item.address }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        <router-link :to="{ name: 'contacts.edit', params: { id: item.id }}" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Edit</router-link>
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border">
                        <button @click="deleteContact(item.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Delete</button>
                    </td>

                </tr>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>
	import useContacts from '../../composables/contacts';
	import { onMounted } from 'vue';

	export default {
		setup () {
			const { contacts, getContacts, destroyContact } = useContacts();

			onMounted(getContacts);

			const deleteContact = async (id) => {
				if (!window.confirm('Are you sure you want to delete this contact?')) {
					return
				}

				await destroyContact(id);
				await getContacts();
			}

			return  {
				contacts, 
				deleteContact
			}
		}
	}
</script>