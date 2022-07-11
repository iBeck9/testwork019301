<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors != ''">
          {{ errors }}
    </div>

    <form class="space-y-6" v-on:submit.prevent="saveContact">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="firstname" class="block text-sm font-medium text-gray-700">Firstname</label>
                <div class="mt-1">
                    <input type="text" name="firstname" id="firstname"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.firstname">
                </div>
            </div>

            <div>
                <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
                <div class="mt-1">
                    <input type="text" name="lastname" id="lastname"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.lastname">
                </div>
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                    <input type="text" name="email" id="email"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.email">
                </div>
            </div>

            <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone #</label>
                <div class="mt-1">
                    <input type="text" name="phone" id="phone"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.phone">
                </div>
            </div>

            <div>
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <div class="mt-1">
                    <input type="text" name="city" id="city"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.city">
                </div>
            </div>

            <div>
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                    <input type="text" name="address" id="address"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.address">
                </div>
            </div>

            <div class="row">
                <div class="mt-6">
                    <button type="submit"
                            class="inline-flex items-center px-2 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
                        Create contact
                    </button>&nbsp; 
                    <router-link to="/dashboard"
                            class="inline-flex items-center px-2 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
                        Cancel
                    </router-link>
                </div>
            </div>

        </div>
        
    </form>
</template>

<script>
import { reactive } from 'vue';
import useContacts from '../../composables/contacts';

export default {
    setup() {
        const form = reactive({
            'firstname': '',
            'lastname': '',
            'email': '',
            'phone': '',
            'city': '',
            'address': ''
        })

        const { errors, storeContact } = useContacts();

        const saveContact = async () => {
            await storeContact({...form});
        }

        return {
            form,
            errors,
            saveContact
        }
    }
}
</script>