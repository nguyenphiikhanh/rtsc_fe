<template>
  <div class="flex w-full items-center gap-3">
    <div class="relative w-1/2">
      <input v-model="username"
             type="text" @input="account_info = DefaultAccountInfo"
             placeholder="Tên tài khoản"
             class="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm
             shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
             outline-none transition"/>
    </div>
    <button @click="searchAccount" class="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2
           text-sm font-medium text-white shadow-sm w-1/6 text-center
           hover:bg-indigo-700 active:scale-95 transition">
      <span>🔎 Tìm</span>
    </button>
  </div>
  <div class="mt-5">
    <div v-if="account_info.id && account_info.username" class="mt-6 p-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <AccountInfo v-model="account_info" :username="username" @update="updateAccount"/>
    </div>
    <div v-else>
      <p class="text-left">Chưa có dữ liệu Account.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {type Account, DefaultAccountInfo} from "../interface/interface.ts";
import AccountInfo from "../components/Account-Info.vue";
import {getAccountInfo, updateAccountInfo} from "../services/account-action.service.ts";

const username = ref("");
const account_info = ref<Account>(DefaultAccountInfo);
  const searchAccount = async () => {
  if(username.value){
    const data = await getAccountInfo(username.value)
    if(data && data?.success){
      const mainData = data?.data[0];
      if(mainData) {
        account_info.value = {
          ...mainData
        }
      } else {
        alert("Không tìm thấy tài khoản");
        return;
      }
    } else {
      alert("Lỗi khi tìm kiếm tài khoản");
    }
  }
};

const updateAccount = async () => {
  try{
    const res = await updateAccountInfo(account_info.value);
    if(res && res?.success){
      alert("Đã cập nhật tài khoản <3!");
      await searchAccount();
    }else {
      alert("Cập nhật thất bại");
    }
  }catch (e) {
    alert("Có lỗi xay ra khi cập nhật tài khoản");
  }
};
</script>