<template>
  <div class="container mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mt-4">Get started today</h1>

      <form @submit.prevent="login" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <p class="text-center text-lg font-medium">Sign in to your account</p>
        <div>
          <label for="email" class="sr-only">Email/Username</label>
          <div v-if="errors.includes('Username is required.')" class="text-red-500 text-start ml-4 text-xs mt-1">
            Email is required.
          </div>

          <div class="relative">
            <input type="text" v-model="userName" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email" />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div v-if="errors.includes('Password is required.')" class="text-red-500 text-start ml-4 text-xs mt-1">
            Password is required.
          </div>

          <div class="relative">
            <input type="password" v-model="password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" />

            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </div>
        </div>

        <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
          Sign in
        </button>

        <p class="text-center text-sm text-gray-500">
          No account?
          <router-link :to="{ name: 'register' }" class="underline" href="">Sign up</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const errors = ref<string[]>([]);
const token = ref('');

const userName = ref('');
const password = ref('');
//const error = ref(null);

const router = useRouter();

const login = async () => {
  try {
    errors.value = []; // Reset the errors array

    if (!userName.value) {
      errors.value.push('Username is required.');
    }
    if (!password.value) {
      errors.value.push('Password is required.');
    }

    if (errors.value.length) {
      return; // Stop execution if there are any errors
    }

    const response = await fetch('http://localhost:5245/api/User/login', {
      method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token.value
      },
      credentials: 'include',
      body: JSON.stringify({
        userName: userName.value,
        password: password.value
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the response here. For example, you might save the returned token.
    const data = await response.json();
    token.value = data.result.token;
    
    localStorage.setItem('token', token.value);
    router.push("/")
    console.log(data);
  } catch (err) {
    console.log(err)
  }
};
</script>

<style scoped>
</style>
