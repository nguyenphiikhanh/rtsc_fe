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
    <button @click="searchPlayer" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>🔎 Tìm</span>
    </button>
  </div>
  <div class="mt-5">
    <div v-if="player_bag_items.length > 0" class="mt-6 p-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <FigureBoxItems v-model="player_bag_items" :player_name="player_name" @update="updateBag()"/>
    </div>
    <div v-else>
      <p class="text-left">Chưa có dữ liệu player.</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {searchItemBoxes} from "../services/figure.services.ts";
import {searchItemByIds, updateBagItems} from "../services/item.service.ts";
import FigureBoxItems from "../components/FigureBoxItems.vue";
import type {BagItem} from "../interface/interface.ts";

const player_name = ref("");
const player_bag_items = ref<BagItem[]>([]);

const searchPlayer = async () => {
  if(player_name.value){
    const data = await searchItemBoxes(player_name.value)
    if(data && data?.success){
      const mainData = data?.data[0];
      if(mainData){
        player_bag_items.value = JSON.parse(mainData.items_bag);
        const temp_ids = player_bag_items.value.reduce((arr: number[], item: any) => {
          if (item.temp_id && item.temp_id > 0) {
            arr.push(item.temp_id);
          }
          return arr;
        }, []);
        const dataItems = await searchItemByIds(temp_ids);
        const itemLists = dataItems?.data || [];
        player_bag_items.value = player_bag_items.value.map((bagItem: any) => {
          const found = itemLists.find(
              (item: any) => item.id == bagItem.temp_id
          );
          return {
            ...bagItem,
            is_up_to_up: +found?.is_up_to_up || 0,
            item_name: found?.name || null,
          };
        });
      } else {
        alert("Không tìm thấy nhân vật");
        return;
      }
    } else {
      alert("Lỗi khi tìm kiếm nhân vật");
    }
  }
};

const updateBag = async () => {
  // Logic to update the bag items
  const res = await updateBagItems(player_name.value, player_bag_items.value as BagItem[]);
  if(res && res?.success){
    alert("Đã cập nhật hành trang <3!");
    await searchPlayer();
  }else {
    alert("Cập nhật thất bại");
  }

}
</script>