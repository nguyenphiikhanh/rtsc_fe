<template>
  <div class="flex justify-start items-center gap-4 mb-4">
    <p>Active Affiliate Link: </p>
    <input
        type="checkbox"
        :checked="activeStatus"
        @change="onChangeActive"
        class="h-5 w-5 cursor-pointer rounded border-gray-300
           text-indigo-600 focus:ring-indigo-500"
    />
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {getLinkActiveStatus, setLinkActiveStatus} from "../services/shopee_site.service.ts";

const activeStatus = ref(false);

const onChangeActive = async (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked;
  activeStatus.value = checked
  await updateActive(activeStatus.value)
};

const updateActive = async (status: boolean) => {
  await setLinkActiveStatus(status).then(() => {
    alert(`Active status updated successfully: ${status}`);
  }).catch(() => {
    alert("Error updating active status!");
  })
};

onMounted( async() => {
  const res = await getLinkActiveStatus();
  const status = res.data[0].value as boolean
  activeStatus.value = Boolean(Number(status))
})
</script>