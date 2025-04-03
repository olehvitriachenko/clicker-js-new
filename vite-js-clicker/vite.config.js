import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use 'styles/helpers/index' as *;`
            }
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'styles': path.resolve(__dirname, 'styles'),
        },
    },
    plugins: [
        // Add any Vite plugins here if needed
    ],
});