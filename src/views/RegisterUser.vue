<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">Create your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="register" class="space-y-6">

                <div>
                    <div class="flex items-left">
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    </div>

                    <div class="mt-2">
                        <input id="name" v-model="name" name="name" type="text" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-left">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    </div>

                    <div class="mt-2">
                        <input id="username" v-model="userName" name="username" type="text" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <div class="flex items-left">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    </div>

                    <div class="mt-2">
                        <input id="email" name="email" v-model="email" type="email" autocomplete="email" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" v-model="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        Up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

//const { notify } = useNotifications();


const router = useRouter();
const name = ref('');
const userName = ref('');
const email = ref('');
const password = ref('');
const roles = ref('user');
const error = ref(null);

const register = async () => {
    try {
        const response = await axios.post('http://localhost:5245/api/User/Register', {
            name: name.value,
            userName: userName.value,
            email: email.value,
            password: password.value,
            roles: roles.value
        }, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });

        // Handle the response here. For example, you might save the returned token.
        console.log(response.data);
        const $toast = useToast();
        let instance = $toast.success('Account Created Successfully!');

        // Force dismiss specific toast
        instance.dismiss();

        // Dismiss all opened toast immediately
        $toast.clear();
        router.push("/login")
    } catch (err) {
        console.log(err)
    }
};
</script>

<style scoped>
</style>
