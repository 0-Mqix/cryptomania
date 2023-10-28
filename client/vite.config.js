import { defineConfig } from "vite"

export default defineConfig({
	build: {
		outDir: "build",
		assetsDir: "",
		cssCodeSplit: false,
		lib: {
			formats: ["es"],
			entry: "src/main.ts",
			name: "main"
		}
	},
	plugins: [
		{
			name: "melt",
			closeBundle: async () => {
				try {
					const result = await fetch(
						"http://localhost:3000/reload_event",
						{
							method: "post"
						}
					)
					console.log(
						"[MELT] reload event status code: ",
						result.status
					)
				} catch (error) {
					console.log("[MELT] failed to send reload event")
				}
			}
		}
	]
})
