import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';
export default defineConfig({base:process.env.GITHUB_ACTIONS?'/LMS-project-9/':'/',plugins:[react()],server:{port:5173,proxy:{'/api':'http://localhost:5000','/topic-assets':'http://localhost:5000'}}});
