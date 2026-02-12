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
  html_([@tmpx.attr("lang", "en")], [
    head_([], [
      title_([], [@tmpx.text("tmpx + mhx sample")]),
      meta_([@tmpx.attr("charset", "utf-8")]),
      meta_([
        @tmpx.attr("name", "viewport"),
        @tmpx.attr("content", "width=device-width, initial-scale=1"),
      ]),
      style_([], [
        @tmpx.raw(
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
  body_([@tmpx.class_("page")], body_children(include_runtime~))
}

///|
fn body_children(include_runtime~ : Bool) -> Array[@tmpx.Node] {
  let nodes : Array[@tmpx.Node] = [
    h1_([], [@tmpx.text("Search")]),
    quick_action(),
    search_form(),
    div_([@tmpx.id_("results"), @tmpx.class_("results")], [
      @tmpx.text("Type to search or submit the form."),
    ]),
    query_table_section(),
  ]
  if include_runtime {
    nodes.push(
      script_([@tmpx.attr("type", "module")], [
        @tmpx.raw(
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
  form_(
    [
      @tmpx.mx_get("/search"),
      @tmpx.mx_target("#results"),
      @tmpx.mx_swap(@tmpx.MxSwap::InnerHTML),
      @tmpx.attr("mx-push-url", "true"),
      @tmpx.mx_trigger("submit prevent"),
      @tmpx.class_("search-form"),
    ],
    [
      label_([@tmpx.attr("for", "q")], [@tmpx.text("Query")]),
      input_([
        @tmpx.id_("q"),
        @tmpx.attr("name", "q"),
        @tmpx.attr("type", "text"),
        @tmpx.attr("placeholder", "Search..."),
        @tmpx.mx_get("/search"),
        @tmpx.mx_target("#results"),
        @tmpx.mx_swap(@tmpx.MxSwap::InnerHTML),
        @tmpx.mx_trigger("input changed debounce:300ms"),
      ]),
      button_([], [@tmpx.text("Submit")]),
    ],
  )
}

///|
fn quick_action() -> @tmpx.Node {
  div_([@tmpx.class_("actions")], [
    button_(
      [
        @tmpx.mx_get("/hello"),
        @tmpx.mx_target("#results"),
        @tmpx.mx_swap(@tmpx.MxSwap::InnerHTML),
        @tmpx.mx_trigger("click"),
      ],
      [@tmpx.text("Quick Hello")],
    ),
  ])
}

///|
fn query_table_section() -> @tmpx.Node {
  div_([], [
    h2_([], [@tmpx.text("Query Targets")]),
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
fn table_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.table_parts, attrs, children)
}

///|
fn thead_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.thead_parts, attrs, children)
}

///|
fn tbody_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.tbody_parts, attrs, children)
}

///|
fn tr_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.tr_parts, attrs, children)
}

///|
fn th_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.th_parts, attrs, children)
}

///|
fn td_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.td_parts, attrs, children)
}

///|
fn parts(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> Array[@tmpx.Part] {
  let parts : Array[@tmpx.Part] = []
  for attr in attrs {
    parts.push(@tmpx.part_attr(attr))
  }
  for child in children {
    parts.push(@tmpx.part_child(child))
  }
  parts
}

///|
fn element_parts(
  builder : (Array[@tmpx.Part]) -> @tmpx.Node,
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  builder(parts(attrs, children))
}

///|
fn html_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.html_parts, attrs, children)
}

///|
fn head_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.head_parts, attrs, children)
}

///|
fn title_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.title_parts, attrs, children)
}

///|
fn style_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  @tmpx.unsafe_custom_element("style", parts(attrs, children))
}

///|
fn body_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.body_parts, attrs, children)
}

///|
fn h1_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.h1_parts, attrs, children)
}

///|
fn h2_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.h2_parts, attrs, children)
}

///|
fn div_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.div_parts, attrs, children)
}

///|
fn script_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  @tmpx.unsafe_custom_element("script", parts(attrs, children))
}

///|
fn form_(attrs : Array[@tmpx.Attr], children : Array[@tmpx.Node]) -> @tmpx.Node {
  element_parts(@tmpx.form_parts, attrs, children)
}

///|
fn label_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.label_parts, attrs, children)
}

///|
fn button_(
  attrs : Array[@tmpx.Attr],
  children : Array[@tmpx.Node],
) -> @tmpx.Node {
  element_parts(@tmpx.button_parts, attrs, children)
}

///|
fn input_(attrs : Array[@tmpx.Attr]) -> @tmpx.Node {
  @tmpx.input_attrs(attrs)
}

///|
fn meta_(attrs : Array[@tmpx.Attr]) -> @tmpx.Node {
  @tmpx.meta_attrs(attrs)
}
