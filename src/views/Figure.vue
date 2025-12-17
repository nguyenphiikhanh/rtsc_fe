<template>
  <div class="flex w-full items-center gap-3">
    <div class="relative w-1/2">
      <input v-model="player_name"
          type="text" @input="player_bag_items = []"
          placeholder="Tên nhân vật"
          class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
             shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
             outline-none transition"
      />
    </div>
    <button @click="searchPlayer" class="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm
           hover:bg-indigo-700 active:scale-95 transition">
      🔎 Tìm
    </button>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {searchItemBoxes} from "../services/figure.services.ts";
import {searchItemByIds} from "../services/item.service.ts";

const player_name = ref("");
const player_bag_items = ref([]);

const searchPlayer = async () => {
  if(player_name.value){
    const data = await searchItemBoxes(player_name.value)
    if(data && data?.success){
      const mainData = data?.data[0];
      if(mainData){
        player_bag_items.value = JSON.parse(mainData.items_bag);
        const temp_ids = player_bag_items.value.map((item: any) => {
          if(item.temp_id && item.temp_id > 0) return item.temp_id;
        });
        const dataItems = await searchItemByIds(temp_ids);
        debugger
        player_bag_items.value.map(item => {

        })
      } else {
        alert("Không tìm thấy nhân vật");
        return;
      }
    } else {
      alert("Lỗi khi tìm kiếm nhân vật");
    }
  }
};
</script>