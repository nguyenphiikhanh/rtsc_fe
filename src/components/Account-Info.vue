<template>
  <p class="text-left">
    <span>Nhân vật: <b class="text-red-600">{{ username }}</b></span>
  </p>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full border-collapse text-sm">
      <thead class="bg-gray-50">
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">#ID</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Account</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Password</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">VNĐ</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Tổng Nạp</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Active</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Banned</th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 text-left text-gray-500">{{ modelValue.id }}</td>
        <td class="px-4 py-3 text-left text-gray-500">{{ modelValue.username }}</td>
        <td class="px-4 py-3 font-medium text-left text-gray-800">{{ modelValue.password }}</td>
        <td class="px-4 py-3 text-left text-gray-700">
          <input type="number" v-model="modelValue.vnd" min="0"
                 class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
                     shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                     outline-none transition">
        </td>
        <td class="px-4 py-3 text-left text-gray-700">
          <input type="number" v-model="modelValue.tongnap" min="0"
                 class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
                     shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                     outline-none transition">
        </td>
        <td class="px-4 py-3 text-left text-gray-700">
          <input
              type="checkbox"
              :checked="modelValue.active == 1"
              @change="onChangeActive"
              class="h-5 w-5 cursor-pointer rounded border-gray-300
           text-indigo-600 focus:ring-indigo-500"
          />
        </td>
        <td class="px-4 py-3 text-left text-gray-700">
          <input
              type="checkbox"
              :checked="modelValue.ban == 1"
              @change="onChangeBanned"
              class="h-5 w-5 cursor-pointer rounded border-gray-300
           text-indigo-600 focus:ring-indigo-500"
          />
        </td>
      </tr>
      </tbody>
    </table>
    <div v-show="isShowUpdate" class="p-4 border-t border-gray-200 bg-gray-50 text-right">
      <button class="inline-block rounded-lg bg-indigo-600 px-5 py-2
            text-sm font-medium text-white shadow-sm
            hover:bg-indigo-700 active:scale-95 transition" @click="emit('update')">
        Cập nhật
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";
import {type Account, DefaultAccountInfo} from "../interface/interface.ts";

const {username} = defineProps<{ username: string }>();
const emit = defineEmits<{
  (e: 'update'): void
}>();

const modelValue = defineModel<Account>({
  required: true,
  default: DefaultAccountInfo
});
const isShowUpdate = ref(false);

const onChangeActive = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked;
  modelValue.value.active = checked ? 1 : 0;
};

function onChangeBanned(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  modelValue.value.ban = checked ? 1 : 0;
}

watch(modelValue, () => {
  isShowUpdate.value = true;
}, {deep: true});

</script>