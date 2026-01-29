# Sample tmpx + mhx tasks

web_dir := "web"
worker_public := "worker/public"
mhx_dir := "../mhx.mbt"

# Default: show tasks
default:
    @just --list

# Type check (all targets)
check:
    moon check --target all

# Render HTML to stdout (pick a target)
run target="js":
    moon run src/main --target {{target}}

# Start Vite dev server (requires npm install in web/)
web-dev:
    cd {{web_dir}} && pnpm run dev

# Install web deps
web-install:
    cd {{web_dir}} && pnpm install

# Build assets for Cloudflare Worker (HTML + mhx runtime)
worker-assets:
    moon run src/main --target js > {{worker_public}}/index.html
    moon -C {{mhx_dir}} build --target js
    mkdir -p {{worker_public}}/mhx
    cp {{mhx_dir}}/_build/js/release/build/main/main.js {{worker_public}}/mhx/index.js
    cp {{mhx_dir}}/src/ffi/mhx_ffi.js {{worker_public}}/mhx/mhx_ffi.js

# Start Cloudflare Worker dev server (requires Wrangler)
worker-dev: worker-assets
    pnpx wrangler dev

# Deploy Cloudflare Worker (requires Wrangler + login)
worker-deploy: worker-assets
    pnpx wrangler deploy

# Clean build artifacts
clean:
    rm -rf _build {{web_dir}}/node_modules {{web_dir}}/dist {{web_dir}}/.vite
