import { render_body } from "mbt:f4ah6o/mhx-tmpx-sample/main";

document.body.outerHTML = render_body();

void (async () => {
  const mhx = await import("mhx");
  mhx.init_mhx();
  mhx.process(document.body);
})();
