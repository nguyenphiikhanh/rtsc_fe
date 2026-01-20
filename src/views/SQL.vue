<template>
  <div class="w-full">
    <div class="relative w-1/2">
      <textarea
          v-model="sqlString"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Query"
      ></textarea>
    </div>
    <button @click="sqlExcuse" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>RUN</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {excuse} from "../services/sql.services.ts";

const sqlString = ref("");

const sqlExcuse = async () => {
  try{
    const res = await excuse(sqlString.value);
    if(res && res?.success){
      alert("Excuse done <3!");
    }else {
      alert("Có lỗi xảy ra!");
    }
  }catch (e) {
    alert("Có lỗi xảy ra!");
  }
};
</script>