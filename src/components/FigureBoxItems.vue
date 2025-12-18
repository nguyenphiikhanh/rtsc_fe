<template>
  <p class="text-left">
    <span>Nhân vật: <b class="text-red-600">{{player_name}}</b></span>
    <span class="ml-3">Hành trang trống: <b class="text-red-600">{{null_bag_item_count}}</b></span>
  </p>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full border-collapse text-sm">
      <thead class="bg-gray-50">
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">STT</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">#ID</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Vật phẩm</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Số lượng</th>
        <th class="px-4 py-3 text-center font-semibold text-gray-600">Hành động</th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-100">
        <template v-for="(item, index) in modelValue">
          <tr v-if="item.temp_id != -1" class="hover:bg-gray-50 transition" :key="index">
            <td class="px-4 py-3 text-left text-gray-500">{{index+1}}</td>
            <td class="px-4 py-3 text-left text-gray-500">{{item.temp_id}}</td>
            <td class="px-4 py-3 font-medium text-left text-gray-800">{{item.item_name}}</td>
            <td class="px-4 py-3 text-left text-gray-700">
              <input v-if="item.is_up_to_up" type="number" v-model="item.quantity" min="1"
                     class="w-1/3 rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
                     shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                     outline-none transition">
              <span v-else class="text-amber-300">{{item.quantity}}</span>
            </td>
            <td class="px-4 py-3 text-center">
              <div class="d-flex gap-3 justify-center h-10 items-center" v-if="!item.is_up_to_up">
                <button @click="addItemToBag(index)" class="text-indigo-600 bg-green-600 hover:text-indigo-800 text-sm text-green-600 font-medium">
                  Thêm
                </button>
                <button @click="removeItemFromBag(index)" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium ml-4">
                  Xoá
                </button>
              </div>
            </td>
          </tr>
        </template>
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

import {computed, ref, watch} from "vue";
import type {BagItem} from "../interface/interface.ts";
const { player_name } = defineProps<{ player_name?: string }>();
const emit = defineEmits<{
  (e: 'update'): void
}>();

const modelValue = defineModel<BagItem[]>({
  required: true,
});

const null_bag_item_count = computed(() => {
  const null_items = modelValue.value.filter(item => item?.temp_id == -1);
  return null_items.length
})

const isShowUpdate = ref(false);

const addItemToBag = (index: number) => {
  if(null_bag_item_count.value <= 0){
    alert("Hành trang đã đầy, không thể thêm vật phẩm mới!");
    return;
  }
  const item_clone = modelValue.value[index] as BagItem;
  const indexChange = modelValue.value.findIndex((i) => i.temp_id == -1);
  if(indexChange >= 0) {
    modelValue.value[indexChange] = {...item_clone};
  }
};

const removeItemFromBag = (index: number) => {
  modelValue.value.splice(index, 1);
  modelValue.value.push(Object.assign(  {
    quantity: 0,
    create_time: 0,
    temp_id: -1,
    option: []
  }))
}

watch(modelValue, () => {
  isShowUpdate.value = true;
}, { deep: true });

</script>