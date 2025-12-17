<template>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full border-collapse text-sm">
      <thead class="bg-gray-50">
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">#</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Tên nhân vật</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Cấp độ</th>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">Trạng thái</th>
        <th class="px-4 py-3 text-center font-semibold text-gray-600">Hành động</th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 text-gray-500">1</td>
        <td class="px-4 py-3 font-medium text-gray-800">Songoku</td>
        <td class="px-4 py-3 text-gray-700">99</td>
        <td class="px-4 py-3">
          <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Online
          </span>
        </td>
        <td class="px-4 py-3 text-center">
          <button class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Xem
          </button>
        </td>
      </tr>

      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 text-gray-500">2</td>
        <td class="px-4 py-3 font-medium text-gray-800">Vegeta</td>
        <td class="px-4 py-3 text-gray-700">95</td>
        <td class="px-4 py-3">
          <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Offline
          </span>
        </td>
        <td class="px-4 py-3 text-center">
          <button class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Xem
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

</script>