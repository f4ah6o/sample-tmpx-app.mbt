declare global {
  interface Window {
    mhx_ffi?: Record<string, unknown>;
    mhx?: {
      init_mhx?: () => void;
      handle_event?: (event: Event, target: Element) => void;
      version?: string;
    };
  }

  var mhx_ffi: Record<string, unknown> | undefined;
  var mhx:
    | {
        init_mhx?: () => void;
        handle_event?: (event: Event, target: Element) => void;
        version?: string;
      }
    | undefined;
}

export {};
