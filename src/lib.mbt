///|
/// Render full HTML document as a string (includes mhx runtime scripts)
pub fn render_page() -> String {
  page_view() |> @tmpx.render()
}

///|
/// Render only the <body> element as a string (no runtime scripts)
pub fn render_body() -> String {
  body_view() |> @tmpx.render()
}

///|
fn page_view() -> @tmpx.Node {
  @tmpx.html_([@tmpx.lang_attr("en")], [
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
          ".actions{margin-top:12px;}" +
          ".data-table{width:100%;border-collapse:collapse;margin-top:12px;}" +
          ".data-table th,.data-table td{border:1px solid #ddd;padding:8px;text-align:left;}" +
          ".data-table th{background:#f6f6f6;}",
        ),
      ]),
    ]),
    body_node(include_runtime=true),
  ])
}

///|
fn body_view() -> @tmpx.Node {
  body_node(include_runtime=false)
}

///|
fn body_node(include_runtime~ : Bool) -> @tmpx.Node {
  @tmpx.body([@tmpx.class_("page")], body_children(include_runtime~))
}

///|
fn body_children(include_runtime~ : Bool) -> Array[@tmpx.Node] {
  let nodes : Array[@tmpx.Node] = [
    @tmpx.h1([], [@tmpx.text("Search")]),
    quick_action(),
    search_form(),
    @tmpx.div([@tmpx.id_("results"), @tmpx.class_("results")], [
      @tmpx.text("Type to search or submit the form."),
    ]),
    query_table_section(),
  ]
  if include_runtime {
    nodes
    ..push(
      @tmpx.script([@tmpx.attr("type", "module")], [
        @tmpx.raw_html(
          "import * as mhx_ffi from \"/mhx/mhx_ffi.js\";" +
          "globalThis.mhx_ffi = mhx_ffi;" +
          "const bindExports = () => {" +
          "  const g = globalThis;" +
          "  const init = g.f4ah6o$mhx$core$$init_mhx;" +
          "  const handle = g.f4ah6o$mhx$core$$handle_event;" +
          "  const onFetchOk = g.f4ah6o$mhx$network$$on_fetch_success;" +
          "  const onFetchErr = g.f4ah6o$mhx$network$$on_fetch_error;" +
          "  const onMutation = g.f4ah6o$mhx$core$$on_mutation_observed;" +
          "  const process = () => {};" +
          "  if (g.mhx_ffi && g.mhx_ffi.register_exports && init && handle && onFetchOk && onFetchErr && onMutation) {" +
          "    g.mhx_ffi.register_exports(init, process, handle, \"unknown\", onFetchOk, onFetchErr, onMutation);" +
          "  }" +
          "  if (g.mhx && g.mhx.init_mhx) {" +
          "    g.mhx.init_mhx();" +
          "    if (g.mhx.process) {" +
          "      g.mhx.process(document.body);" +
          "    }" +
          "  }" +
          "};" +
          "const script = document.createElement(\"script\");" +
          "script.src = \"/mhx/index.js\";" +
          "script.onload = bindExports;" +
          "document.head.appendChild(script);",
        ),
      ]),
    )
  }
  nodes
}

///|
fn search_form() -> @tmpx.Node {
  @tmpx.form(
    [
      @tmpx.mx_get("/search"),
      @tmpx.mx_target("#results"),
      @tmpx.mx_swap(@tmpx.InnerHTML),
      @tmpx.mx_push_url(true),
      @tmpx.mx_trigger("submit prevent"),
      @tmpx.class_("search-form"),
    ],
    [
      @tmpx.label([@tmpx.for_("q")], [@tmpx.text("Query")]),
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
    ],
  )
}

///|
fn quick_action() -> @tmpx.Node {
  @tmpx.div([@tmpx.class_("actions")], [
    @tmpx.button(
      [
        @tmpx.mx_get("/hello"),
        @tmpx.mx_target("#results"),
        @tmpx.mx_swap(@tmpx.InnerHTML),
        @tmpx.mx_trigger("click"),
      ],
      [@tmpx.text("Quick Hello")],
    ),
  ])
}

///|
fn query_table_section() -> @tmpx.Node {
  @tmpx.div([], [
    @tmpx.h2([], [@tmpx.text("Query Targets")]),
    table_([@tmpx.class_("data-table")], [
      thead_([], [
        tr_([], [
          th_([], [@tmpx.text("ID")]),
          th_([], [@tmpx.text("Name")]),
          th_([], [@tmpx.text("Category")]),
        ]),
      ]),
      tbody_([], [
        tr_([], [
          td_([], [@tmpx.text("1")]),
          td_([], [@tmpx.text("Alpha")]),
          td_([], [@tmpx.text("Basic")]),
        ]),
        tr_([], [
          td_([], [@tmpx.text("2")]),
          td_([], [@tmpx.text("Beta")]),
          td_([], [@tmpx.text("Basic")]),
        ]),
        tr_([], [
          td_([], [@tmpx.text("3")]),
          td_([], [@tmpx.text("Gamma")]),
          td_([], [@tmpx.text("Advanced")]),
        ]),
        tr_([], [
          td_([], [@tmpx.text("4")]),
          td_([], [@tmpx.text("Delta")]),
          td_([], [@tmpx.text("Advanced")]),
        ]),
      ]),
    ]),
  ])
}

///|
fn tag_(
  name : String,
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  @tmpx.element(@tmpx.Tag::custom(name), attrs, children)
}

///|
fn table_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  tag_("table", attrs, children)
}

///|
fn thead_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  tag_("thead", attrs, children)
}

///|
fn tbody_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  tag_("tbody", attrs, children)
}

///|
fn tr_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  tag_("tr", attrs, children)
}

///|
fn th_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  tag_("th", attrs, children)
}

///|
fn td_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  tag_("td", attrs, children)
}
