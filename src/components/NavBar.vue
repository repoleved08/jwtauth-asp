<template>
    <!-- Navbar -->
    <nav class="fixed z-10 bg-white w-full px-12 py-2">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="pt-2">
                <router-link :to="{name: 'home'}">Home</router-link>
            </div>
            <!-- Menu -->
            <div class="hidden md:flex space-x-6">
                <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
                <router-link :to="{name: 'about'}" class="hover:text-darkGrayishBlue">About</router-link>
                <router-link :to="{name: 'register'}" class="hover:text-darkGrayishBlue">Careers</router-link>
                <a href="#" class="hover:text-darkGrayishBlue">Product</a>
                <a href="#" class="hover:text-darkGrayishBlue">Communtity</a>
            </div>
            <!-- Button -->
            <a href="#"
                class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baselinen hover:bg-brightRedLight">Get
                Started</a>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
