import { defineConfig, loadEnv } from "vite";
import path from "path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ command, mode }) => {
  const root = path.resolve(__dirname, "../");
  const env = loadEnv(mode, root, "");
  return {
    server: {
      cors: {
        origin: true,
      },
    },
    plugins: [mkcert()],
    define: {
      "process.env.BASE_URL": JSON.stringify(env.BASE_URL),
      // "process.env.YOUR_BOOLEAN_VARIABLE": env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});

// proxy: {
//   "/todo": "http://localhost:3000",
//   "/api": {
//     target: "http://localhost:3000",
//     rewrite: path => path.replace(/^\/api/, ""),
//     secure: false,
//     configure: (proxy, options) => {
//       proxy.on("error", (err, _req, _res) => {
//         console.log("error", err);
//       });
//       proxy.on("proxyReq", (proxyReq, req, _res) => {
//         console.log("Request sent to target:", req.method, req.url);
//       });
//       proxy.on("proxyRes", (proxyRes, req, _res) => {
//         console.log(
//           "Response received from target:",
//           proxyRes.statusCode,
//           req.url,
//         );
//       });
//     },
//   },
// },
