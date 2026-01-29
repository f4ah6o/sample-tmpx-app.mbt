# tmpx + mhx sample (all targets)

This sample renders an HTML page using `tmpx` with `mx-*` attributes for mhx.
It targets **all** MoonBit backends because it only generates HTML on the server side.

## Run (print HTML)

```bash
moon -C sample-tmpx-app.mbt run src/main --target js
moon -C sample-tmpx-app.mbt run src/main --target wasm-gc
moon -C sample-tmpx-app.mbt run src/main --target native
```

The program prints HTML to stdout.

## Browser demo (Node server)

1) Build mhx runtime JS:

```bash
moon -C mhx.mbt build --target js
```

2) Copy runtime to dist:

```bash
cp mhx.mbt/_build/js/release/build/main/main.js mhx.mbt/dist/index.js
cp mhx.mbt/src/ffi/mhx_ffi.js mhx.mbt/dist/mhx_ffi.js
```

3) Start the demo server:

```bash
node sample-tmpx-app.mbt/server.js
```

4) Open:

```
http://localhost:8787
```

## Browser demo (Vite + MoonBit plugin)

1) Build mhx runtime JS and copy to web public:

```bash
moon -C mhx.mbt build --target js
cp mhx.mbt/_build/js/release/build/main/main.js sample-tmpx-app.mbt/web/public/mhx/index.js
cp mhx.mbt/src/ffi/mhx_ffi.js sample-tmpx-app.mbt/web/public/mhx/mhx_ffi.js
```

2) Install dependencies and start Vite:

```bash
cd sample-tmpx-app.mbt/web
npm install
npm run dev
```

3) Open the URL printed by Vite.

## What it demonstrates

- Form submission (`mx-post`) + `mx-target` + `mx-swap`
- Live input trigger (`mx-get` + `input changed debounce:300ms`)
- Button click action

The Vite demo imports MoonBit code via `vite-plugin-moonbit` and injects the rendered body HTML at runtime.
