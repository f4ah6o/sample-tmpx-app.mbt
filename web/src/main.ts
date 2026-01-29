import { render_body } from "mbt:f4ah6o/mhx-tmpx-sample/main";
import * as mhxFfi from "./mhx/mhx_ffi.js";

globalThis.mhx_ffi = mhxFfi as unknown as Record<string, unknown>;

document.body.outerHTML = render_body();

const mhxScript = document.createElement("script");
mhxScript.src = "/mhx/index.js";
mhxScript.onload = () => {
  const runtime = globalThis as unknown as {
    f4ah6o$mhx$core$$init_mhx?: () => void;
    f4ah6o$mhx$core$$handle_event?: (event: unknown, target: unknown) => void;
    f4ah6o$mhx$$version?: string;
    f4ah6o$mhx$network$$on_fetch_success?: (id: number, text: string) => void;
    f4ah6o$mhx$network$$on_fetch_error?: (id: number, message: string) => void;
    f4ah6o$mhx$core$$on_mutation_observed?: (id: number) => void;
  };
  if (runtime.f4ah6o$mhx$core$$init_mhx) {
    globalThis.mhx = {
      init_mhx: runtime.f4ah6o$mhx$core$$init_mhx,
      handle_event: runtime.f4ah6o$mhx$core$$handle_event,
      version: runtime.f4ah6o$mhx$$version,
    };
    globalThis.mhx_callbacks = {
      on_fetch_success: runtime.f4ah6o$mhx$network$$on_fetch_success,
      on_fetch_error: runtime.f4ah6o$mhx$network$$on_fetch_error,
      on_mutation_observed: runtime.f4ah6o$mhx$core$$on_mutation_observed,
    };
    runtime.f4ah6o$mhx$core$$init_mhx();
  }
};

document.head.appendChild(mhxScript);
