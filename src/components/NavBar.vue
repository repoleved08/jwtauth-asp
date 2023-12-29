<template>
    <!-- Navbar -->
    <nav class="fixed z-10 bg-transparent hover:bg-white transition-colors duration-200 ease-in-out w-full px-12 py-2"
        @mouseover="isHovering = true" @mouseleave="isHovering = false">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="pt-2">
                <router-link :to="{ name: 'home' }" :class="isHovering ? 'text-black' : 'text-white'">Home</router-link>
            </div>
            <!-- Button -->
            <div class="hidden md:flex space-x-2">
                <router-link :to="{ name: 'home' }"
                    :class="`${isHovering ? 'text-black' : 'text-white'} p-3 pt-2 hover:text-darkGrayishBlue`">Telegram</router-link>
                <router-link :to="{ name: 'home' }"
                    :class="`${isHovering ? 'text-black' : 'text-white'} p-3 pt-2 hover:text-darkGrayishBlue`">Support</router-link>
                <div class="group relative inline-block pt-2">
                    <router-link :to="{ name: 'home' }"
                        :class="`${isHovering ? 'text-black' : 'text-white'} pt-2 hover:text-darkGrayishBlue`">Menu
                        <span
                            class="absolute right-0 top-full w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 group-hover:block hidden">
                            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <router-link :to="{ name: 'home' }"
                                    class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:text-darkGrayishBlue"
                                    role="menuitem">BROKERS</router-link>
                            </div>
                        </span>
                    </router-link>
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </div>

                <router-link :to="{ name: 'login' }"
                    :class="`${isHovering ? 'text-black' : 'text-white'} hidden md:block p-3 px-6 pt-2 text-black hover:text-darkGrayishBlue`">
                    <span><font-awesome-icon :icon="['fas', 'user']" /></span> </router-link>

                <router-link :to="{ name: 'login' }"
                    :class="`${isHovering ? 'text-black' : 'text-white'} hidden md:block p-3 px-6 pt-2 text-black hover:text-darkGrayishBlue`">
                    <span><font-awesome-icon :icon="['fas', 'cart-shopping']" /></span> </router-link>
                <router-link @click="logout" :to="{ name: 'login' }"
                    :class="`${isHovering ? 'text-darkGrayishBlue' : 'text-red-300'} hidden md:block p-3 px-6 pt-2 text-black hover:text-darkGrayishBlue`">
                    <span>Logout</span> </router-link>
            </div>
        </div>
    </nav>
</template>
   
<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'vue-router';

const router = useRouter();
let isHovering = ref(false);

const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    router.push("/login");
};
</script>
   
<style scoped>
</style>
   