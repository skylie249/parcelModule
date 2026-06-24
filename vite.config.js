import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. 호스트 설정: 외부 접속 허용
    host: true,

    // 2. 포트 설정: 원하는 포트 (예: 5173, 3000, 8080 등)
    port: 5173,

    // 3. 프록시 (선택사항): 나중에 백엔드(Node.js 등)를 연결할 때 필요
    // proxy: {
    //   '/api': 'http://localhost:3000', // 예시
    // }
  }
})
