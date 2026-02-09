// src/stores/endpoint.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {getEndpoints} from "../src/services/endpoint.service.ts";

export const useEndpointStore = defineStore('endpoint', () => {
        // 1. State: Giá trị mặc định
        const baseUrl = ref(import.meta.env.VITE_API_BASE_URL);

        // 2. Action: Hàm thay đổi giá trị
        function setBaseUrl(url: string) {
            // Xóa dấu / ở cuối nếu người dùng lỡ nhập (VD: .com/ -> .com)
            baseUrl.value = url.replace(/\/$/, "")
        }

        function reset() {
            baseUrl.value = import.meta.env.VITE_API_BASE_URL
        }

        const fetchUrl = async () => {
            const res = await getEndpoints();
            return res.data as string[];
        }

        // 3. Return các state và action ra ngoài
        return { baseUrl, setBaseUrl, reset, fetchUrl }
    },
    {
        // 4. Cấu hình Persist (Lưu vào LocalStorage)
        persist: true
    })