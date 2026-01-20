<template>
  <div class="flex justify-start items-center gap-4 mb-4">
    <p>Endpoint: <span class="font-bold text-red-700">{{ baseUrl }}</span></p>
    <button @click="endpointStore.reset()" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>Reset</span>
    </button>
  </div>
  <div class="w-full flex">
    <div class="relative w-1/2">
      <input v-model="apiEndpoint"
             type="text"
             placeholder="Endpoint API"
             class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
             shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
             outline-none transition"/>
    </div>
    <button @click="setEndpoint" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>Set</span>
    </button>
    <button @click="apiEndpoint = ''" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>Clear</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useEndpointStore} from "../../stores/endpoint.ts";
import {storeToRefs} from "pinia";


const endpointStore = useEndpointStore()
const { baseUrl } = storeToRefs(endpointStore)

const apiEndpoint = ref("");

const setEndpoint = async () => {
  if (!apiEndpoint.value.trim()) {
    alert("Vui lòng nhập Endpoint!");
    return;
  }

  const urlRegex = /^(https?:\/\/)([a-zA-Z0-9.-]+|localhost)(:[0-9]+)?(\/.*)?$/;
  if (!urlRegex.test(apiEndpoint.value)) {
    alert("Định dạng URL không hợp lệ!");
    return;
  }

  const formattedUrl = apiEndpoint.value.replace(/\/$/, "");
  endpointStore.setBaseUrl(formattedUrl);

  endpointStore.setBaseUrl(apiEndpoint.value)
};
</script>