<script setup lang='ts'>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Figure from "./views/Figure.vue";
import Account from "./views/Account.vue";
import SQL from "./views/SQL.vue";
import Settings from "./views/Settings.vue";
import ShopeeSetting from "./views/ShopeeSetting.vue";
const activeTab = ref("figure");
const clickTab = (name: string) => {
  activeTab.value = name;
};
</script>
<template>
  <div class="grid place-items-center w-full min-h-screen bg-gray-200 rounded-lg">
    <div>
      <main class="mt-6 space-y-10">
        <section>
          <VTabGroupOutline>
            <VTabsWrapperOutline TabOutlineCenter>
              <VTabOutline title="Player" :isActive="activeTab === 'figure'" @onClick="clickTab('figure')">
                <template #icon>
                  <Icon icon="logos:vue" :class="{ 'text-green-500': activeTab === 'vue' }"
                        class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="Account" :isActive="activeTab === 'account'" @onClick="clickTab('account')">
                <template #icon>
                  <Icon icon="logos:vueuse" :class="{ 'text-green-500': activeTab === 'vueuse' }"
                        class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="SQL" :isActive="activeTab === 'sql'" @onClick="clickTab('sql')">
                <template #icon>
                  <Icon icon="logos:nuxt-icon" :class="{ 'text-green-500': activeTab === 'sql' }"
                        class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="settings" :isActive="activeTab === 'settings'" @onClick="clickTab('settings')">
                <template #icon>
                  <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'settings' }"
                        class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
              <VTabOutline title="Shopee" :isActive="activeTab === 'shopify'" @onClick="clickTab('shopify')">
                <template #icon>
                  <Icon icon="logos:shopify" :class="{ 'text-green-500': activeTab === 'shopify' }"
                        class="text-xl font-medium w-6 h-6 mr-2" />
                </template>
              </VTabOutline>
            </VTabsWrapperOutline>
            <VTabsContentOutline class="bg-gray-500">
              <div class="min-h-screen">
                <div v-if="activeTab === 'figure'">
                  <Figure/>
                </div>
                <div v-if="activeTab === 'account'">
                  <Account/>
                </div>
                <div v-if="activeTab === 'sql'">
                  <SQL/>
                </div>
                <div v-if="activeTab === 'settings'">
                  <Settings/>
                </div>
                <div v-if="activeTab === 'shopify'">
                  <ShopeeSetting/>
                </div>
              </div>
            </VTabsContentOutline>
          </VTabGroupOutline>
        </section>
      </main>
    </div>
  </div>
</template>