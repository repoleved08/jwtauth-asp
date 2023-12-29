<template>
    <footer class="bg-white">
        <div class="container mx-auto text-center">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-black-500 text-center text-3xl font-bold mt-6 mb-6">Links</h1>
                <ul class="list-none flex flex-col items-center text-start space-y-2 mt-6 mb-6 w-3/4">
                    <li><router-link :to="{ name: 'home' }">Privacy</router-link></li>
                    <li> <router-link :to="{ name: 'home' }">Terms and Conditions</router-link> </li>
                    <li> <router-link :to="{ name: 'home' }">renews</router-link> </li>
                    <li> <router-link :to="{ name: 'home' }">Support</router-link> </li>
                </ul>
                <p class="text-black text-sm">Risk Warning: Trading leveraged products such as Forex may not be suitable for
                    all investors as they carry a degree of risk to your capital. You must be aware of the risks and be
                    willing to bear any level of risk to invest in financial markets. Past performance is not indicative of
                    future results. FXSNIPER24 and all individuals associated assume no responsibility for your trading
                    results or investments. Please ensure that you fully understand the risks involved.</p>
                <div class="mt-4">
                    <p class="text-sm font-extrabold mb-6 mt-6">&copy; 2023 Goddie | All Rights Reserved</p>
                </div>
            </div>
            <div class="relative">
                <!-- Other content here -->

                <a href="https://wa.me/0714000481" target="_blank"
                    class="fixed bottom-20 left-5 m-4 bg-blue text-green transform transition-transform duration-500 hover:scale-125">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-4xl text-blue-500" />
                </a>


            </div>

        </div>
    </footer>
</template>
 

<script setup lang="ts">

</script>

<style scoped>
</style>
