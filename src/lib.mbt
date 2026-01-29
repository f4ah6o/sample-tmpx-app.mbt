///|
/// Render full HTML document as a string (includes mhx runtime scripts)
pub fn render_page() -> String {
  @tmpx.render(page_view())
}

///|
/// Render only the <body> element as a string (no runtime scripts)
pub fn render_body() -> String {
  @tmpx.render(body_view())
}

///|
fn page_view() -> @tmpx.Node {
  @tmpx.html_([
    @tmpx.lang_attr("en"),
  ], [
    @tmpx.head([], [
      @tmpx.title([], [@tmpx.text("tmpx + mhx sample")]),
      @tmpx.meta([@tmpx.charset("utf-8")]),
      @tmpx.meta([
        @tmpx.attr("name", "viewport"),
        @tmpx.content("width=device-width, initial-scale=1"),
      ]),
      @tmpx.style_([], [
        @tmpx.raw_html(
          "body{font-family:system-ui,Arial,sans-serif;padding:24px;}" +
          ".results{padding:12px;border:1px solid #ddd;margin-top:12px;}" +
          ".search-form{display:flex;gap:8px;align-items:center;}" +
          ".actions{margin-top:12px;}"
        ),
      ]),
    ]),
    @tmpx.body([
      @tmpx.class_("page"),
    ], body_children(include_runtime=true)),
  ])
}

///|
fn body_view() -> @tmpx.Node {
  @tmpx.body([
    @tmpx.class_("page"),
  ], body_children(include_runtime=false))
}

///|
fn body_children(include_runtime~ : Bool) -> Array[@tmpx.Node] {
  let nodes : Array[@tmpx.Node] = [
    @tmpx.h1([], [@tmpx.text("Search")]),
    search_form(),
    @tmpx.div([
      @tmpx.id_("results"),
      @tmpx.class_("results"),
    ], [
      @tmpx.text("Type to search or submit the form."),
    ]),
    @tmpx.hr([]),
    quick_action(),
  ]
  if include_runtime {
    nodes.push(@tmpx.script([@tmpx.src("/mhx/mhx_ffi.js")], []))
    nodes.push(@tmpx.script([@tmpx.src("/mhx/index.js")], []))
    nodes.push(@tmpx.script([], [
      @tmpx.raw_html(
        "if (globalThis.mhx && globalThis.mhx.init_mhx) {" +
        "  globalThis.mhx.init_mhx();" +
        "}"
      ),
    ]))
  }
  nodes
}

///|
fn search_form() -> @tmpx.Node {
  @tmpx.form([
    @tmpx.mx_get("/search"),
    @tmpx.mx_target("#results"),
    @tmpx.mx_swap(@tmpx.InnerHTML),
    @tmpx.mx_push_url(true),
    @tmpx.mx_trigger("submit prevent"),
    @tmpx.class_("search-form"),
  ], [
    @tmpx.label([
      @tmpx.for_("q"),
    ], [@tmpx.text("Query")]),
    @tmpx.input_([
      @tmpx.id_("q"),
      @tmpx.name_("q"),
      @tmpx.type_("text"),
      @tmpx.placeholder("Search..."),
      @tmpx.mx_get("/search"),
      @tmpx.mx_target("#results"),
      @tmpx.mx_swap(@tmpx.InnerHTML),
      @tmpx.mx_trigger("input changed debounce:300ms"),
    ]),
    @tmpx.button([], [@tmpx.text("Submit")]),
  ])
}

///|
fn quick_action() -> @tmpx.Node {
  @tmpx.div([
    @tmpx.class_("actions"),
  ], [
    @tmpx.button([
      @tmpx.mx_get("/hello"),
      @tmpx.mx_target("#results"),
      @tmpx.mx_swap(@tmpx.InnerHTML),
      @tmpx.mx_trigger("click"),
    ], [
      @tmpx.text("Quick Hello")
    ]),
  ])
}
