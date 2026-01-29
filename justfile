# Sample tmpx + mhx tasks

mhx_root := "../mhx.mbt"
web_dir := "web"

# Default: show tasks
default:
    @just --list

# Type check (all targets)
check:
    moon check --target all

# Render HTML to stdout (pick a target)
run target="js":
    moon run src/main --target {{target}}

# Build mhx runtime and copy into web/public
mhx-build:
    moon -C {{mhx_root}} build --target js
    cp {{mhx_root}}/_build/js/release/build/main/main.js {{web_dir}}/public/mhx/index.js
    cp {{mhx_root}}/src/ffi/mhx_ffi.js {{web_dir}}/public/mhx/mhx_ffi.js
    cp {{mhx_root}}/src/ffi/mhx_ffi.js {{web_dir}}/src/mhx/mhx_ffi.js

# Start Vite dev server (requires npm install in web/)
web-dev:
    cd {{web_dir}} && pnpm run dev

# Install web deps
web-install:
    cd {{web_dir}} && pnpm install

# Start Node demo server
server:
    node server.js

# Clean build artifacts
clean:
    rm -rf _build {{web_dir}}/node_modules {{web_dir}}/dist {{web_dir}}/.vite
