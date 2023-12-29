<template>
    <div class="relative max-w-2xl mx-auto mt-24">
        <div class="bg-gray-900 text-white p-4 rounded-md">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-400">Code:</span>
                <button class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                    data-clipboard-target="#code">
                    Copy
                </button>
            </div>
            <div class="overflow-x-auto">
                <pre id="code" class="text-gray-300">
                    <code>
                        &lt;div class="flex justify-center items-center bg-blue-500 text-white p-4"&gt;
                        &lt;h1 class="text-2xl"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ClipboardJS from 'clipboard';
import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue';

let clipboard: ClipboardJS;

   onMounted(() => {
     clipboard = new ClipboardJS('.code');
   });

   onBeforeUnmount(() => {
     clipboard.destroy();
   });

</script>
