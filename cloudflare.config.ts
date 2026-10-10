import { bindings, defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "mhx-tmpx-sample",
		compatibilityDate: "2026-01-29",
		entrypoint: "worker/src/index.ts",
		env: {
			ASSETS: bindings.assets(),
		},
	},
});
