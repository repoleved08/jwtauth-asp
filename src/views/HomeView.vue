<template>
  <div class="bg-custom-bg ">
    <!-- Text goes here -->
    <div class="container mx-auto px-4 pt-14">
      <div class="flex items-center justify-center mt-3">
        <img src="../assets/mockups/ss.png" width="300px" alt="Icon">
      </div>

      <span><img src="../assets/icons/S.webp" alt="Icon" class="ml-2 w-6 h-6"></span>
      <span class="text-yellow-500 text-sm font-bold">{{ message }}</span>
      <!-- Add pt-4 here -->
      <p class="text-4xl font-bold tracking-wide text-white">Make Money Smart, Not Hard</p>
      <p class="text-3xl tracking-tight text-white leading-loose pt-4">We will show you How</p>
      <font-awesome-icon :icon="['fab', 'paypal']" />
      <div class="size-11/12 lg:pl-40 mt-14 mb-6 relative ">
        <img src="../assets/mockups/phones.png" alt="Icon" class="transform scale-125">
      </div>

      <!-- Get Started -->

      <div>
        <button
          class="text-white bg-sky-500 ring-2 ring-sky-500 ring-inset rounded-lg sm:w-6/12 lg:w-4/12 px-6 py-4 baselinen transform transition-transform duration-500 hover:scale-110 font-bold">
          Get Started <span class="ml-5"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></span>
        </button>


        <p class="text-sm text-white">Join our 5,000+ Users Worldwide </p>
      </div>


      <!-- Services -->

      <div class="mt-4">
        <h1 class="text-5xl font-extrabold text-white">A Massive Upgrade</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 mb-12 mt-8">
          <div class="flex flex-col items-center">
            <img src="../assets/icons/candlestick.png" class="mx-auto max-w-xs" width="80px" alt="">
            <p class="text-white">Trades all major Pairs indices & mental</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/step.png" class="mx-auto max-w-xs" width="80px" alt="">
            <p class="text-white">beginer friendly with 2 trading modes</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/devices.png" class="mx-auto max-w-xs" width="80px" alt="">
            <p class="text-white">Works on phone and laptop</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/peer.png" class="mx-auto max-w-xs" width="80px" alt="">
            <p class="text-white">works with any <br> broker</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/icons/support.png" class="mx-auto max-w-xs" width="80px" alt="">
            <p class="text-white font-bold ">24/7 LIVE CHAT <br> SUPPORT</p>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h1 class="font-bold text-white mb-3">HERE'S WHAT YOU GET</h1>
        <h1 class="text-5xl font-extrabold text-white">ITS TIME YOU TRADE LIKE A PRO, Get Full Immediate Access To:</h1>
        <div
          class="mt-8 outline py-10 rounded-lg outline-offset-2 outline-blue-500 flex flex-col-reverse md:flex-col mb-6 ">
          <div class="basis-1/2 py-12 justify-start items-start order-2 sm:order-1">
            <h1 class="text-2xl font-bold text-white">
              <span>The Modern way of trading</span>
              <span class="inline-block ml-3 pt-1">
                <img src="../assets/icons/check.png" alt="">
              </span>
            </h1>
            <p class="text-darkGrayishBlue text-start ml-14">Choppa S Is A Trading Robot That trades indices / forex and
              metals . Its new
              design makes it easier for beginners and professionals to start making consistent profits from the forex
              market . it has a trailing take profits and stop loss and It can be install on your phone or laptop </p>
          </div>
          <div class="basis-1/2 order-1 sm:order-2">
            <img src="../assets/mockups/laptop.png" width="650px" alt="Laptop">
          </div>
        </div>
        <!-- box 2 -->
        <div
          class="mt-12 outline py-10 rounded-lg outline-offset-2 outline-blue-500 flex flex-col-reverse md:flex-row mb-6 ">
          <div class="basis-1/2 justify-start py-12 items-start order-2 sm:order-1">
            <h1 class="text-2xl font-bold text-white text-start ml-14">
              <span>Beginner friendly</span>
              <span class="inline-block ml-3 pt-1">
                <img src="../assets/icons/check.png" alt="">
              </span>
            </h1>
            <p class="text-darkGrayishBlue text-start ml-14">Its designed for professional traders and beginners too,
              learn as you earn witth included mentorship and choppa s </p>
          </div>
          <div class="basis-1/2 order-1 sm:order-2">
            <img src="../assets/mockups/laptop-2.png" width="650px" alt="Laptop">
          </div>
        </div>
        <!-- box-3 -->
        <div
          class="mt-12 outline py-10 rounded-lg outline-offset-2 outline-blue-500 flex flex-col-reverse md:flex-row mb-6 ">
          <div class="basis-1/2 mt-12 justify-start py-12 items-start order-2 sm:order-1">
            <h1 class="text-3xl font-bold text-white text-start ml-14">
              <span>Whats new</span>
              <span class="inline-block ml-3 pt-1">
                <img src="../assets/icons/check.png" alt="">
              </span>
            </h1>
            <p class="text-darkGrayishBlue text-start ml-14">Our new design made it easy to allow 2 trading mode (normal &
              attack ).Normal mode is the preset settings to trade consistently and with very low risk. Attack mode trade
              aggressively by automatically increasing lot size while keeping low risk managment Additionally the trailing
              take profits and stop loss that moves it to profits when ever the market moves to the positive direction ,
              all this to maximise profitability on each trades it makes</p>
          </div>
          <div class="basis-1/2 order-1 sm:order-2">
            <img src="../assets/mockups/phones-1.png" width="650px" alt="Laptop">
          </div>
        </div>
      </div>

      <!-- Texts -->
      <div>
        <h1 class="font-bold text-white">Get access to choppa s</h1>
        <h1 class="text-5xl mt-3 font-extrabold text-white">Join the new modern way of <br> Make money smart, not hard
        </h1>
        <ul class="flex flex-col items-start justify-center mt-7 space-y-6 mx-auto w-3/4">
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">fully automated</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">Lifetime mentorship</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">24/7 support and live chat</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">Access to VIP group</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">works with any broker</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">98% winning rate</span>
          </li>
          <li class="text-white text-2xl">
            <font-awesome-icon :icon="['fas', 'check']" />
            <span class="ml-4">once off purchase</span>
          </li>
        </ul>
      </div>
      <Bundle />
      <div class="mt-12 mb-12">
        <h1 class="text-2xl text-white font-bold">WARNING: PRICE INCREASING SOON</h1>
        <p class="text-white">The Price will increase to $599 in a month, act now</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          <div class="flex flex-row items-center">
            <img src="../assets/icons/asset_3.png" class="mx-auto max-w-xs" width="40px" alt="">
            <span class="text-white">IMMEDIATE ACCESS</span>
          </div>
          <div class="flex flex-row items-center">
            <img src="../assets/icons/asset_4.png" class="mx-auto max-w-xs" width="40px" alt="">
            <p class="text-white">SATISFACTION GUARANTEE</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="../assets/icons/asset_5.png" class="mx-auto max-w-xs" width="40px" alt="">
            <p class="text-white">SECURE PURCHASE</p>
          </div>
        </div>

        <div class="mt-6 mb-6">
          <h1 class="text-4xl font-bold text-white">Follow Us</h1>
          <div class="flex space-x-2 align-center justify-center">
            <div class="items-center text-3xl">
              <span class="text-white"><font-awesome-icon :icon="['fab', 'instagram']" /></span>
            </div>
            <div class="items-center text-3xl">
              <span class="text-white"><font-awesome-icon :icon="['fab', 'telegram']" /></span>
            </div>
            <div class="items-center text-3xl">
              <span class="text-white"><font-awesome-icon :icon="['fab', 'youtube']" /></span>
            </div>
          </div>





        </div>

        <!-- Community -->
        <div
          class="mt-12 outline py-10 justify-center rounded-lg outline-offset-2 outline-blue-500 flex flex-col-reverse md:flex-row mb-6 ">
          <div class="basis-1/2 justify-start py-6 items-start order-2 sm:order-1">
            <h1 class="text-3xl font-bold text-white text-start ml-14">
              <span>our community</span>
              <span class="inline-block ml-3 pt-1">
                <img src="../assets/icons/check.png" alt="">
              </span>
            </h1>
            <p class="text-darkGrayishBlue text-start ml-14">A dedicated Channel that post Choppa S results </p>

            <button
              class="text-white bg-sky-500 mt-12  ring-2 ring-sky-500 ring-inset rounded-md sm:w-6/12 lg:w-5/12 py-4 baseline transform transition-transform duration-500 hover:scale-110 font-bold">
              Join Community
            </button>
          </div>
          <div class="basis-1/2 order-1 sm:order-2 text-end ml-18">
            <img src="../assets/icons/tel.png" width="350px" alt="Laptop">
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>
 
<script lang="ts" setup>
import Bundle from './Bundle.vue';
import Footer from './Footer.vue';
import { onMounted, ref } from 'vue';

const message = ref("You are not logged in")
const token = ref('');

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5245/api/User/details', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.json();
    message.value = `Hi ${text.name}`;
    console.log(text.name);
  } catch (error) {
    console.error('Failed to fetch user details:', error);
  }

})


</script>
 