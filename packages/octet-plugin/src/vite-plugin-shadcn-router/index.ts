import { Plugin } from "vite"
import path from "node:path"

type VitePluginShadcnRouterOptions = {
  path?: string
}

const defaultOptions: VitePluginShadcnRouterOptions = {
  path: path.resolve(process.cwd(), "src/config/config.ts"),
}

export default function vitePluginShadcnRouter(
  options?: VitePluginShadcnRouterOptions
): Plugin {
  return {
    name: "vite-plugin-shadcn-router",
    config(config, { command }) {
      options = { ...defaultOptions, ...options }

      // 开发环境
      if (command === "serve") {
        console.log("serve", options.path)
      }
    },
  }
}
