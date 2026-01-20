<script setup lang='ts'>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Figure from "./views/Figure.vue";
import Account from "./views/Account.vue";
import SQL from "./views/SQL.vue";
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
              <VTabOutline title="Gridsome" :isActive="activeTab === 'gridsome'" @onClick="clickTab('gridsome')">
                <template #icon>
                  <Icon icon="logos:gridsome-icon" :class="{ 'text-green-500': activeTab === 'gridsome' }"
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
                <div v-if="activeTab === 'gridsome'">
                  Gridsome is a Vue.js powered Jamstack framework for building static generated websites & apps that are
                  fast by default 🚀. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus illum deleniti
                  sint nobis alias sit velit. Ipsa voluptas at harum debitis. Commodi quo cupiditate voluptate, quos aperiam
                  accusantium, minima consequatur id odio asperiores quas saepe nulla quisquam inventore, reiciendis
                  eligendi dolores voluptas delectus ea autem ut nam corrupti consequuntur possimus! Veritatis, accusamus!
                  Veniam, incidunt ad. Illo, voluptate voluptatem corrupti tenetur dolore alias rem ut maxime amet porro est
                  explicabo nostrum consectetur non ex odit, in, illum atque deserunt expedita fugiat praesentium sunt. Quo
                  reiciendis sequi error laboriosam voluptatem. Nemo aliquam autem delectus incidunt, vitae itaque.
                </div>
              </div>
            </VTabsContentOutline>
          </VTabGroupOutline>
        </section>
      </main>
    </div>
  </div>
</template>