///|
fn main {
  let _ = render_body()
  let html = @sample.render_page()
  println(html)
}

///|
pub fn render_body() -> String {
  @sample.render_body()
}
