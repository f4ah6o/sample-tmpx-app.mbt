# Sample tmpx + mhx tasks

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

# Start Vite dev server (requires npm install in web/)
web-dev:
    cd {{web_dir}} && pnpm run dev

# Install web deps
web-install:
    cd {{web_dir}} && pnpm install

# Clean build artifacts
clean:
    rm -rf _build {{web_dir}}/node_modules {{web_dir}}/dist {{web_dir}}/.vite
