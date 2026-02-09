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
  <div class="mt-5">
    <hr>
    <br>
    <h5 class="text-left">Or select endpoint</h5>
    <div class="w-1/2">
      <div class="relative w-full max-w-sm">
        <select
            v-model="apiEndpoint"
            class="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-50"
        >
          <option value="" disabled selected>Chọn Endpoint hệ thống</option>
          <option v-for="(option, index) in endpointOptions" :key="index" :value="option">
            {{ option }}
          </option>
        </select>

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useEndpointStore} from "../../stores/endpoint.ts";
import {storeToRefs} from "pinia";

const endpointStore = useEndpointStore()
const { baseUrl } = storeToRefs(endpointStore)

const apiEndpoint = ref("");
const endpointOptions = ref<string[]>([]);

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

onMounted(async () => {
  const domains = await endpointStore.fetchUrl();
  domains.map(item => {
    const protocolIncluded = item.domain.includes('://')
        ? item.domain
        : `https://${item.domain}`;
    try {
      const url = new URL(protocolIncluded);
      endpointOptions.value.push(url.origin + '/api')
    } catch (error) {
      console.error("Link hỏng rồi bác ơi:", item.domain);
    }
  })
})
</script>