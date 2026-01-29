const $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Drop = { $tag: 0 };
const $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Replace = { $tag: 1 };
function $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Queue(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Queue.prototype.$tag = 2;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const moonbitlang$core$builtin$$random_seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
const Error$moonbitlang$47$async$47$internal$47$coroutine$46$Cancelled$46$Cancelled = { $tag: 15 };
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 14;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ParseError(param0) {
  this._0 = param0;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ParseError.prototype.$tag = 13;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$NetworkError(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$NetworkError.prototype.$tag = 12;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$TimeoutError(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$TimeoutError.prototype.$tag = 11;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$AbortError(param0) {
  this._0 = param0;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$AbortError.prototype.$tag = 10;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$DomError(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$DomError.prototype.$tag = 9;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ConfigError(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ConfigError.prototype.$tag = 8;
function Error$f4ah6o$47$mhx$47$core$46$MhxError$46$SwapError(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
Error$f4ah6o$47$mhx$47$core$46$MhxError$46$SwapError.prototype.$tag = 7;
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds = { $tag: 6 };
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex = { $tag: 5 };
function Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedChar.prototype.$tag = 4;
function Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedEnd(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedEnd.prototype.$tag = 3;
function Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidNumber.prototype.$tag = 2;
function Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidModifier(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidModifier.prototype.$tag = 1;
function Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidSelector(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidSelector.prototype.$tag = 0;
const moonbitlang$core$builtin$$int_to_string_js = (x, radix) => {
  return x.toString(radix);
};
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$try_init_wasm_helper = function() {
  try {
    return new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {
    return undefined;
  }
};
const moonbitlang$core$builtin$$MyInt64$div_bigint = (a, b) => {
  const aVal = (BigInt(a.hi) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const moonbitlang$core$builtin$$JSArray$set_length = (arr, len) => { arr.length = len; };
const moonbitlang$core$builtin$$JSArray$splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$This = { $tag: 0 };
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Body = { $tag: 1 };
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Window = { $tag: 2 };
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Document = { $tag: 3 };
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Closest(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Closest.prototype.$tag = 4;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Find(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Find.prototype.$tag = 5;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Next(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Next.prototype.$tag = 6;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Previous(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Previous.prototype.$tag = 7;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Css(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Css.prototype.$tag = 8;
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Once = { $tag: 0 };
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Changed = { $tag: 1 };
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Delay(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Delay.prototype.$tag = 2;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Throttle(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Throttle.prototype.$tag = 3;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Debounce(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Debounce.prototype.$tag = 4;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$From(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$From.prototype.$tag = 5;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Target(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Target.prototype.$tag = 6;
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Consume = { $tag: 7 };
const $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Prevent = { $tag: 8 };
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Filter(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Filter.prototype.$tag = 9;
function $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Queue(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Queue.prototype.$tag = 10;
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
function Result$Err$12$(param0) {
  this._0 = param0;
}
Result$Err$12$.prototype.$tag = 0;
function Result$Ok$12$(param0) {
  this._0 = param0;
}
Result$Ok$12$.prototype.$tag = 1;
function Result$Err$13$(param0) {
  this._0 = param0;
}
Result$Err$13$.prototype.$tag = 0;
function Result$Ok$13$(param0) {
  this._0 = param0;
}
Result$Ok$13$.prototype.$tag = 1;
const $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Done = { $tag: 0 };
function $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Fail(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Fail.prototype.$tag = 1;
const $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Running = { $tag: 2 };
function $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Suspend(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Suspend.prototype.$tag = 3;
function $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_0.prototype.$tag = 0;
function $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$_try$47$81(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$_try$47$81.prototype.$tag = 1;
function $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_2.prototype.$tag = 2;
const moonbitlang$async$internal$event_loop$$set_timeout = (duration, f) => setTimeout(f, duration);
const Option$None$14$ = { $tag: 0 };
function Option$Some$14$(param0) {
  this._0 = param0;
}
Option$Some$14$.prototype.$tag = 1;
function $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Execute(param0) {
  this._0 = param0;
}
$64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Execute.prototype.$tag = 0;
const $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Queued = { $tag: 1 };
const $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Dropped = { $tag: 2 };
const Option$None$15$ = { $tag: 0 };
function Option$Some$15$(param0) {
  this._0 = param0;
}
Option$Some$15$.prototype.$tag = 1;
function Result$Err$16$(param0) {
  this._0 = param0;
}
Result$Err$16$.prototype.$tag = 0;
function Result$Ok$16$(param0) {
  this._0 = param0;
}
Result$Ok$16$.prototype.$tag = 1;
const $$$64$moonbitlang$47$core$47$builtin$46$StringBuilder$36$as$36$64$moonbitlang$47$core$47$builtin$46$Logger = { method_0: moonbitlang$core$builtin$$Logger$write_string$0$, method_1: moonbitlang$core$builtin$$Logger$write_substring$1$, method_2: moonbitlang$core$builtin$$Logger$write_view$0$, method_3: moonbitlang$core$builtin$$Logger$write_char$0$ };
const moonbitlang$core$builtin$$trim$46$42$bind$124$6102 = "\t\n\r ";
const moonbitlang$core$builtin$$wasm_helper_cache = { tried: false, exports: undefined };
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$603 = "";
const f4ah6o$mhx$45$spec$parser$$modifier_keywords = ["once", "changed", "consume", "prevent", "delay", "throttle", "debounce", "from", "target", "queue"];
const f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$309 = "closest ";
const f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$312 = "find ";
const f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$315 = "next ";
const f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$318 = "previous ";
const f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$85 = "ms";
const f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$86 = "s";
const f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$87 = ".";
const f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$112 = " ";
const f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$106 = ":";
const f4ah6o$mhx$45$spec$swap$$default$46$record$47$1895 = { strategy: 0, swap_delay: 0, settle_delay: 20, scroll: "", show: "", focus_scroll: false };
const f4ah6o$mhx$event$$default_events = ["click", "submit", "change", "input", "focus", "blur", "keydown", "keyup", "mouseenter", "mouseleave", "load", "revealed", "intersect"];
const f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$413 = "closest ";
const f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$414 = "find ";
const f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$492 = "&";
const f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$481 = "=";
const f4ah6o$mhx$core$$parse_json_value$46$42$bind$124$510 = "\"";
const f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$518 = "{";
const f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$519 = "}";
const f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$532 = ":";
const f4ah6o$mhx$core$$build_request_url$46$42$bind$124$625 = "?";
const f4ah6o$mhx$core$$process_mutation_record$46$42$bind$124$676 = "mx-";
const moonbitlang$async$internal$coroutine$$scheduler = { coro_id: 0, curr_coro: undefined, blocking: 0, run_later: moonbitlang$core$deque$$Deque$new$46$inner$2$(0) };
const moonbitlang$core$builtin$$seed = moonbitlang$core$builtin$$random_seed();
const f4ah6o$mhx$core$$global_mhx = f4ah6o$mhx$core$$Mhx$new();
const f4ah6o$mhx$core$$global_error_state = { handler: f4ah6o$mhx$core$$default_error_handler };
const moonbitlang$core$builtin$$brute_force_find$46$constr$47$370 = 0;
const moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$356 = 0;
const f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1938 = new $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Queue(2);
const f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1939 = new $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Queue(1);
const f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1940 = new $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Queue(0);
const f4ah6o$mhx$event$$parse_element_config$46$tuple$47$1988 = { _0: 0, _1: "" };
const _bind = [];
const f4ah6o$mhx$core$$mutation_registry = { next_id: 1, callbacks: moonbitlang$core$builtin$$Map$from_array$3$({ buf: _bind, start: 0, end: 0 }) };
const _bind$2 = [];
const f4ah6o$mhx$network$$callback_registry = { next_id: 1, callbacks: moonbitlang$core$builtin$$Map$from_array$4$({ buf: _bind$2, start: 0, end: 0 }) };
const f4ah6o$mhx$core$$build_request_options$46$tuple$47$2438 = { _0: "HX-Request", _1: "true" };
const f4ah6o$mhx$core$$build_request_options$46$42$bind$47$2439 = [f4ah6o$mhx$core$$build_request_options$46$tuple$47$2438];
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$7$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$8$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$Logger$write_object$9$(self, obj) {
  moonbitlang$core$builtin$$Show$output$9$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$10$(self, obj) {
  moonbitlang$core$builtin$$Show$output$10$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$11$(self, obj) {
  moonbitlang$core$builtin$$Show$output$11$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$12$(self, obj) {
  moonbitlang$core$builtin$$Show$output$12$(obj, self);
}
function moonbitlang$core$builtin$$Logger$write_object$13$(self, obj) {
  moonbitlang$core$builtin$$Show$output$13$(obj, self);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  self.acc = Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$abort$5$(string, loc) {
  return moonbitlang$core$abort$$abort$5$(`${string}\n  at ${moonbitlang$core$builtin$$Show$to_string$14$(loc)}\n`);
}
function moonbitlang$core$builtin$$abort$6$(string, loc) {
  return moonbitlang$core$abort$$abort$6$(`${string}\n  at ${moonbitlang$core$builtin$$Show$to_string$14$(loc)}\n`);
}
function moonbitlang$core$builtin$$abort$7$(string, loc) {
  moonbitlang$core$abort$$abort$7$(`${string}\n  at ${moonbitlang$core$builtin$$Show$to_string$14$(loc)}\n`);
}
function moonbitlang$core$builtin$$abort$8$(string, loc) {
  return moonbitlang$core$abort$$abort$8$(`${string}\n  at ${moonbitlang$core$builtin$$Show$to_string$14$(loc)}\n`);
}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$0$(self, ch) {
  const _bind$3 = self;
  _bind$3.val = `${_bind$3.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$uint16$$UInt16$is_leading_surrogate(self) {
  return moonbitlang$core$builtin$$Compare$op_ge$15$(self, 55296) && moonbitlang$core$builtin$$Compare$op_le$15$(self, 56319);
}
function moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(self) {
  return moonbitlang$core$builtin$$Compare$op_ge$15$(self, 56320) && moonbitlang$core$builtin$$Compare$op_le$15$(self, 57343);
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1)) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$array$$Array$at$10$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$SourceLocRepr$parse(repr) {
  const _bind$3 = { str: repr, start: 0, end: repr.length };
  const _data = _bind$3.str;
  const _start = _bind$3.start;
  const _end = _start + (_bind$3.end - _bind$3.start | 0) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let match_tag_saver_1 = -1;
  let match_tag_saver_2 = -1;
  let match_tag_saver_3 = -1;
  let match_tag_saver_4 = -1;
  let tag_0 = -1;
  let tag_1 = -1;
  let tag_1_1 = -1;
  let tag_1_2 = -1;
  let tag_3 = -1;
  let tag_2 = -1;
  let tag_2_1 = -1;
  let tag_4 = -1;
  _L: {
    let join_dispatch_19;
    _L$2: {
      if (_cursor < _end) {
        const _p = _cursor;
        const next_char = _data.charCodeAt(_p);
        _cursor = _cursor + 1 | 0;
        if (next_char < 65) {
          if (next_char < 64) {
            break _L;
          } else {
            while (true) {
              tag_0 = _cursor;
              if (_cursor < _end) {
                _L$3: {
                  const _p$2 = _cursor;
                  const next_char$2 = _data.charCodeAt(_p$2);
                  _cursor = _cursor + 1 | 0;
                  if (next_char$2 < 55296) {
                    if (next_char$2 < 58) {
                      break _L$3;
                    } else {
                      if (next_char$2 > 58) {
                        break _L$3;
                      } else {
                        if (_cursor < _end) {
                          _L$4: {
                            const _p$3 = _cursor;
                            const next_char$3 = _data.charCodeAt(_p$3);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$3 < 56319) {
                              if (next_char$3 < 55296) {
                                break _L$4;
                              } else {
                                join_dispatch_19 = 7;
                                break _L$2;
                              }
                            } else {
                              if (next_char$3 > 56319) {
                                if (next_char$3 < 65536) {
                                  break _L$4;
                                } else {
                                  break _L;
                                }
                              } else {
                                join_dispatch_19 = 8;
                                break _L$2;
                              }
                            }
                          }
                          join_dispatch_19 = 0;
                          break _L$2;
                        } else {
                          break _L;
                        }
                      }
                    }
                  } else {
                    if (next_char$2 > 56318) {
                      if (next_char$2 < 57344) {
                        if (_cursor < _end) {
                          const _p$3 = _cursor;
                          const next_char$3 = _data.charCodeAt(_p$3);
                          _cursor = _cursor + 1 | 0;
                          if (next_char$3 < 56320) {
                            break _L;
                          } else {
                            if (next_char$3 > 57343) {
                              break _L;
                            } else {
                              continue;
                            }
                          }
                        } else {
                          break _L;
                        }
                      } else {
                        if (next_char$2 > 65535) {
                          break _L;
                        } else {
                          break _L$3;
                        }
                      }
                    } else {
                      if (_cursor < _end) {
                        const _p$3 = _cursor;
                        const next_char$3 = _data.charCodeAt(_p$3);
                        _cursor = _cursor + 1 | 0;
                        if (next_char$3 < 56320) {
                          break _L;
                        } else {
                          if (next_char$3 > 65535) {
                            break _L;
                          } else {
                            continue;
                          }
                        }
                      } else {
                        break _L;
                      }
                    }
                  }
                }
                continue;
              } else {
                break _L;
              }
            }
          }
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    let _tmp = join_dispatch_19;
    _L$3: while (true) {
      const dispatch_19 = _tmp;
      _L$4: {
        _L$5: {
          switch (dispatch_19) {
            case 3: {
              tag_1_2 = tag_1_1;
              tag_1_1 = tag_1;
              tag_1 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      if (next_char < 48) {
                        break _L$6;
                      } else {
                        tag_1 = _cursor;
                        tag_2_1 = tag_2;
                        tag_2 = _cursor;
                        tag_3 = _cursor;
                        if (_cursor < _end) {
                          _L$7: {
                            const _p$2 = _cursor;
                            const next_char$2 = _data.charCodeAt(_p$2);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$2 < 59) {
                              if (next_char$2 < 46) {
                                if (next_char$2 < 45) {
                                  break _L$7;
                                } else {
                                  break _L$4;
                                }
                              } else {
                                if (next_char$2 > 47) {
                                  if (next_char$2 < 58) {
                                    _tmp = 6;
                                    continue _L$3;
                                  } else {
                                    _tmp = 3;
                                    continue _L$3;
                                  }
                                } else {
                                  break _L$7;
                                }
                              }
                            } else {
                              if (next_char$2 > 55295) {
                                if (next_char$2 < 57344) {
                                  if (next_char$2 < 56319) {
                                    _tmp = 7;
                                    continue _L$3;
                                  } else {
                                    _tmp = 8;
                                    continue _L$3;
                                  }
                                } else {
                                  if (next_char$2 > 65535) {
                                    break _L;
                                  } else {
                                    break _L$7;
                                  }
                                }
                              } else {
                                break _L$7;
                              }
                            }
                          }
                          _tmp = 0;
                          continue _L$3;
                        } else {
                          break _L;
                        }
                      }
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        _tmp = 1;
                        continue _L$3;
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            case 2: {
              tag_1 = _cursor;
              tag_2 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      if (next_char < 48) {
                        break _L$6;
                      } else {
                        _tmp = 2;
                        continue _L$3;
                      }
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        _tmp = 3;
                        continue _L$3;
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            case 0: {
              tag_1 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      break _L$6;
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        _tmp = 1;
                        continue _L$3;
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            case 8: {
              if (_cursor < _end) {
                const _p = _cursor;
                const next_char = _data.charCodeAt(_p);
                _cursor = _cursor + 1 | 0;
                if (next_char < 56320) {
                  break _L;
                } else {
                  if (next_char > 57343) {
                    break _L;
                  } else {
                    _tmp = 0;
                    continue _L$3;
                  }
                }
              } else {
                break _L;
              }
            }
            case 4: {
              tag_1 = _cursor;
              tag_4 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      if (next_char < 48) {
                        break _L$6;
                      } else {
                        _tmp = 4;
                        continue _L$3;
                      }
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        tag_1_2 = tag_1_1;
                        tag_1_1 = tag_1;
                        tag_1 = _cursor;
                        if (_cursor < _end) {
                          _L$7: {
                            const _p$2 = _cursor;
                            const next_char$2 = _data.charCodeAt(_p$2);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$2 < 55296) {
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$7;
                                } else {
                                  tag_1 = _cursor;
                                  tag_2_1 = tag_2;
                                  tag_2 = _cursor;
                                  if (_cursor < _end) {
                                    _L$8: {
                                      const _p$3 = _cursor;
                                      const next_char$3 = _data.charCodeAt(_p$3);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$3 < 55296) {
                                        if (next_char$3 < 58) {
                                          if (next_char$3 < 48) {
                                            break _L$8;
                                          } else {
                                            _tmp = 5;
                                            continue _L$3;
                                          }
                                        } else {
                                          if (next_char$3 > 58) {
                                            break _L$8;
                                          } else {
                                            _tmp = 3;
                                            continue _L$3;
                                          }
                                        }
                                      } else {
                                        if (next_char$3 > 56318) {
                                          if (next_char$3 < 57344) {
                                            _tmp = 8;
                                            continue _L$3;
                                          } else {
                                            if (next_char$3 > 65535) {
                                              break _L;
                                            } else {
                                              break _L$8;
                                            }
                                          }
                                        } else {
                                          _tmp = 7;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L$5;
                                  }
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$7;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            } else {
                              if (next_char$2 > 56318) {
                                if (next_char$2 < 57344) {
                                  _tmp = 8;
                                  continue _L$3;
                                } else {
                                  if (next_char$2 > 65535) {
                                    break _L;
                                  } else {
                                    break _L$7;
                                  }
                                }
                              } else {
                                _tmp = 7;
                                continue _L$3;
                              }
                            }
                          }
                          _tmp = 0;
                          continue _L$3;
                        } else {
                          break _L;
                        }
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            case 5: {
              tag_1 = _cursor;
              tag_2 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      if (next_char < 48) {
                        break _L$6;
                      } else {
                        _tmp = 5;
                        continue _L$3;
                      }
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        _tmp = 3;
                        continue _L$3;
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L$5;
              }
            }
            case 6: {
              tag_1 = _cursor;
              tag_2 = _cursor;
              tag_3 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 59) {
                    if (next_char < 46) {
                      if (next_char < 45) {
                        break _L$6;
                      } else {
                        break _L$4;
                      }
                    } else {
                      if (next_char > 47) {
                        if (next_char < 58) {
                          _tmp = 6;
                          continue _L$3;
                        } else {
                          _tmp = 3;
                          continue _L$3;
                        }
                      } else {
                        break _L$6;
                      }
                    }
                  } else {
                    if (next_char > 55295) {
                      if (next_char < 57344) {
                        if (next_char < 56319) {
                          _tmp = 7;
                          continue _L$3;
                        } else {
                          _tmp = 8;
                          continue _L$3;
                        }
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      break _L$6;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            case 7: {
              if (_cursor < _end) {
                const _p = _cursor;
                const next_char = _data.charCodeAt(_p);
                _cursor = _cursor + 1 | 0;
                if (next_char < 56320) {
                  break _L;
                } else {
                  if (next_char > 65535) {
                    break _L;
                  } else {
                    _tmp = 0;
                    continue _L$3;
                  }
                }
              } else {
                break _L;
              }
            }
            case 1: {
              tag_1_1 = tag_1;
              tag_1 = _cursor;
              if (_cursor < _end) {
                _L$6: {
                  const _p = _cursor;
                  const next_char = _data.charCodeAt(_p);
                  _cursor = _cursor + 1 | 0;
                  if (next_char < 55296) {
                    if (next_char < 58) {
                      if (next_char < 48) {
                        break _L$6;
                      } else {
                        _tmp = 2;
                        continue _L$3;
                      }
                    } else {
                      if (next_char > 58) {
                        break _L$6;
                      } else {
                        _tmp = 1;
                        continue _L$3;
                      }
                    }
                  } else {
                    if (next_char > 56318) {
                      if (next_char < 57344) {
                        _tmp = 8;
                        continue _L$3;
                      } else {
                        if (next_char > 65535) {
                          break _L;
                        } else {
                          break _L$6;
                        }
                      }
                    } else {
                      _tmp = 7;
                      continue _L$3;
                    }
                  }
                }
                _tmp = 0;
                continue _L$3;
              } else {
                break _L;
              }
            }
            default: {
              break _L;
            }
          }
        }
        tag_1 = tag_1_2;
        tag_2 = tag_2_1;
        match_tag_saver_0 = tag_0;
        match_tag_saver_1 = tag_1;
        match_tag_saver_2 = tag_2;
        match_tag_saver_3 = tag_3;
        match_tag_saver_4 = tag_4;
        accept_state = 0;
        match_end = _cursor;
        break _L;
      }
      tag_1_1 = tag_1_2;
      tag_1 = _cursor;
      tag_2 = tag_2_1;
      if (_cursor < _end) {
        _L$5: {
          const _p = _cursor;
          const next_char = _data.charCodeAt(_p);
          _cursor = _cursor + 1 | 0;
          if (next_char < 55296) {
            if (next_char < 58) {
              if (next_char < 48) {
                break _L$5;
              } else {
                _tmp = 4;
                continue;
              }
            } else {
              if (next_char > 58) {
                break _L$5;
              } else {
                _tmp = 1;
                continue;
              }
            }
          } else {
            if (next_char > 56318) {
              if (next_char < 57344) {
                _tmp = 8;
                continue;
              } else {
                if (next_char > 65535) {
                  break _L;
                } else {
                  break _L$5;
                }
              }
            } else {
              _tmp = 7;
              continue;
            }
          }
        }
        _tmp = 0;
        continue;
      } else {
        break _L;
      }
    }
  }
  if (accept_state === 0) {
    let start_line;
    let _try_err;
    _L$2: {
      _L$3: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_1 + 1 | 0, match_tag_saver_2);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          start_line = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$3;
        }
        break _L$2;
      }
      start_line = $panic();
    }
    let start_column;
    let _try_err$2;
    _L$3: {
      _L$4: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_2 + 1 | 0, match_tag_saver_3);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          start_column = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err$2 = _tmp;
          break _L$4;
        }
        break _L$3;
      }
      start_column = $panic();
    }
    let pkg;
    let _try_err$3;
    _L$4: {
      _L$5: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, _start + 1 | 0, match_tag_saver_0);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          pkg = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err$3 = _tmp;
          break _L$5;
        }
        break _L$4;
      }
      pkg = $panic();
    }
    let filename;
    let _try_err$4;
    _L$5: {
      _L$6: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_0 + 1 | 0, match_tag_saver_1);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          filename = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err$4 = _tmp;
          break _L$6;
        }
        break _L$5;
      }
      filename = $panic();
    }
    let end_line;
    let _try_err$5;
    _L$6: {
      _L$7: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_3 + 1 | 0, match_tag_saver_4);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          end_line = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err$5 = _tmp;
          break _L$7;
        }
        break _L$6;
      }
      end_line = $panic();
    }
    let end_column;
    let _try_err$6;
    _L$7: {
      _L$8: {
        const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_4 + 1 | 0, match_end);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          end_column = _ok._0;
        } else {
          const _err = _bind$4;
          const _tmp = _err._0;
          _try_err$6 = _tmp;
          break _L$8;
        }
        break _L$7;
      }
      end_column = $panic();
    }
    return { pkg: pkg, filename: filename, start_line: start_line, start_column: start_column, end_line: end_line, end_column: end_column };
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$0$(self, str) {
  const _bind$3 = self;
  _bind$3.val = `${_bind$3.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  moonbitlang$core$builtin$$Hasher$combine_uint(self, value);
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$Hasher$combine$11$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$11$(value, self);
}
function moonbitlang$core$builtin$$Hasher$combine$10$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$10$(value, self);
}
function moonbitlang$core$builtin$$Eq$not_equal$16$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$5$(x, y);
}
function moonbitlang$core$builtin$$Compare$op_lt$15$(x, y) {
  return $compare_int(x, y) < 0;
}
function moonbitlang$core$builtin$$Compare$op_lt$17$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$18$(x, y) < 0;
}
function moonbitlang$core$builtin$$Compare$op_gt$17$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$18$(x, y) > 0;
}
function moonbitlang$core$builtin$$Compare$op_le$15$(x, y) {
  return $compare_int(x, y) <= 0;
}
function moonbitlang$core$builtin$$Compare$op_le$17$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$18$(x, y) <= 0;
}
function moonbitlang$core$builtin$$Compare$op_ge$15$(x, y) {
  return $compare_int(x, y) >= 0;
}
function moonbitlang$core$builtin$$Compare$op_ge$17$(x, y) {
  return moonbitlang$core$builtin$$Compare$compare$18$(x, y) >= 0;
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new$46$inner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = moonbitlang$core$builtin$$seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return moonbitlang$core$builtin$$Hasher$new$46$inner(seed);
}
function moonbitlang$core$builtin$$Hash$hash$19$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$11$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Hash$hash$20$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(undefined);
  moonbitlang$core$builtin$$Hasher$combine$10$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$string$$String$sub$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len && moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(self.charCodeAt(start$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    if (end$2 < len && moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(self.charCodeAt(end$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$0$({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function moonbitlang$core$string$$String$sub(self, start$46$opt, end) {
  let start;
  if (start$46$opt === undefined) {
    start = 0;
  } else {
    const _Some = start$46$opt;
    start = _Some;
  }
  return moonbitlang$core$string$$String$sub$46$inner(self, start, end);
}
function moonbitlang$core$builtin$$Logger$write_substring$1$(self, value, start, len) {
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(value, start, start + len | 0);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp = _ok._0;
      } else {
        const _err = _bind$3;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      break _L;
    }
    _tmp = $panic();
  }
  moonbitlang$core$builtin$$Logger$write_view$0$(self, _tmp);
}
function moonbitlang$core$builtin$$Show$to_string$21$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$22$(self, { self: logger, method_table: $$$64$moonbitlang$47$core$47$builtin$46$StringBuilder$36$as$36$64$moonbitlang$47$core$47$builtin$46$Logger });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$14$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$23$(self, { self: logger, method_table: $$$64$moonbitlang$47$core$47$builtin$46$StringBuilder$36$as$36$64$moonbitlang$47$core$47$builtin$46$Logger });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$19$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$11$(self, { self: logger, method_table: $$$64$moonbitlang$47$core$47$builtin$46$StringBuilder$36$as$36$64$moonbitlang$47$core$47$builtin$46$Logger });
  return logger.val;
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  return moonbitlang$core$builtin$$int_to_string_js(self, radix);
}
function moonbitlang$core$string$$StringView$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$builtin$$abort$5$("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:113:5-113:36");
}
function moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$3743(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function moonbitlang$core$byte$$Byte$to_hex(b) {
  const _self = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _p = 16;
  moonbitlang$core$builtin$$Logger$write_char$0$(_self, moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$3743((b / _p | 0) & 255));
  const _p$2 = 16;
  moonbitlang$core$builtin$$Logger$write_char$0$(_self, moonbitlang$core$builtin$$to_hex$46$to_hex_digit$124$3743((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_1(logger.self, self, seg, i - seg | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Show$output$10$(self, logger) {
  logger.method_table.method_3(logger.self, 34);
  const _env = { _0: self, _1: logger };
  const len = self.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
      break;
    }
    const code = self.charCodeAt(i);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (moonbitlang$core$builtin$$Compare$op_lt$15$(code, 32)) {
            moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, moonbitlang$core$byte$$Byte$to_hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    moonbitlang$core$builtin$$output$46$flush_segment$124$3733(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, c);
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  logger.method_table.method_3(logger.self, 34);
}
function moonbitlang$core$builtin$$Show$to_string$5$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$string$$StringView$iter(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const _p = () => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Iter2$new$24$(f) {
  return f;
}
function moonbitlang$core$string$$StringView$iter2(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  const char_index = { val: 0 };
  return moonbitlang$core$builtin$$Iter2$new$24$(() => {
    if (index.val < end) {
      const _tmp = self.str;
      const _tmp$2 = index.val;
      const c1 = _tmp.charCodeAt(_tmp$2);
      if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const _tmp$3 = self.str;
        const _tmp$4 = index.val + 1 | 0;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c2)) {
          const result = { _0: char_index.val, _1: moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2) };
          index.val = index.val + 2 | 0;
          char_index.val = char_index.val + 1 | 0;
          return result;
        }
      }
      const result = { _0: char_index.val, _1: c1 };
      index.val = index.val + 1 | 0;
      char_index.val = char_index.val + 1 | 0;
      return result;
    } else {
      return undefined;
    }
  });
}
function moonbitlang$core$builtin$$Eq$equal$5$(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = self.str;
        const _tmp$3 = self.start + i | 0;
        const _p = _tmp$2.charCodeAt(_tmp$3);
        const _tmp$4 = other.str;
        const _tmp$5 = other.start + i | 0;
        const _p$2 = _tmp$4.charCodeAt(_tmp$5);
        if (_p === _p$2) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$builtin$$abort$5$("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:399:5-399:36");
}
function moonbitlang$core$string$$String$char_length_eq$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$7$("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:424:9-424:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$7$("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:452:9-452:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$8$("Invalid start index", "@moonbitlang/core/builtin:string.mbt:327:5-327:33");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char$46$inner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i | 0, start_offset, end_offset$2);
}
function moonbitlang$core$builtin$$Logger$write_view$0$(self, str) {
  const _bind$3 = self;
  _bind$3.val = `${_bind$3.val}${moonbitlang$core$builtin$$Show$to_string$5$(str)}`;
}
function moonbitlang$core$builtin$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end4200 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end4200) {
          const _tmp$2 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$2.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end4206 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end4206) {
              const _p = i + j | 0;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p | 0;
              const _p$2 = _tmp$4.charCodeAt(_tmp$5);
              const _tmp$6 = needle.str;
              const _tmp$7 = needle.start + j | 0;
              const _p$3 = _tmp$6.charCodeAt(_tmp$7);
              if (_p$2 !== _p$3) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$builtin$$boyer_moore_horspool_find$46$constr$47$356;
  }
}
function moonbitlang$core$builtin$$brute_force_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              const _p$3 = _tmp$4.charCodeAt(_tmp$5);
              _tmp$3 = _p$3 !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _p$3 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$6 = needle.str;
                const _tmp$7 = needle.start + j | 0;
                const _p$4 = _tmp$6.charCodeAt(_tmp$7);
                if (_p$3 !== _p$4) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return moonbitlang$core$builtin$$brute_force_find$46$constr$47$370;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_find(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$builtin$$boyer_moore_horspool_rev_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      let _tmp = needle_len - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i > 0) {
          const _tmp$2 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$2.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = i;
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = haystack_len - needle_len | 0;
      while (true) {
        const i = _tmp$2;
        if (i >= 0) {
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j < needle_len) {
              const _p = i + j | 0;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p | 0;
              const _p$2 = _tmp$4.charCodeAt(_tmp$5);
              const _tmp$6 = needle.str;
              const _tmp$7 = needle.start + j | 0;
              const _p$3 = _tmp$6.charCodeAt(_tmp$7);
              if (_p$2 !== _p$3) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + i | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i - skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$string$$String$find(self, str) {
  return moonbitlang$core$string$$StringView$find({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$find_by(self, pred) {
  const _it = moonbitlang$core$string$$StringView$iter2(self);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter2$next$24$(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _i = _x._0;
      const _c = _x._1;
      if (pred(_c)) {
        return _i;
      }
      continue;
    }
  }
  return undefined;
}
function moonbitlang$core$string$$String$find_by(self, pred) {
  return moonbitlang$core$string$$StringView$find_by({ str: self, start: 0, end: self.length }, pred);
}
function moonbitlang$core$builtin$$brute_force_rev_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      let i = haystack_len - needle_len | 0;
      while (true) {
        if (i >= 0) {
          while (true) {
            let _tmp$3;
            if (i >= 0) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              const _p$3 = _tmp$4.charCodeAt(_tmp$5);
              _tmp$3 = _p$3 !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i >= 0) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _p$3 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$6 = needle.str;
                const _tmp$7 = needle.start + j | 0;
                const _p$4 = _tmp$6.charCodeAt(_tmp$7);
                if (_p$3 !== _p$4) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i - 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return haystack_len;
  }
}
function moonbitlang$core$string$$StringView$rev_find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$builtin$$brute_force_rev_find(self, str) : moonbitlang$core$builtin$$boyer_moore_horspool_rev_find(self, str);
}
function moonbitlang$core$string$$StringView$has_suffix(self, str) {
  const _bind$3 = moonbitlang$core$string$$StringView$rev_find(self, str);
  if (_bind$3 === undefined) {
    return false;
  } else {
    const _Some = _bind$3;
    const _i = _Some;
    return _i === ((self.end - self.start | 0) - (str.end - str.start | 0) | 0);
  }
}
function moonbitlang$core$string$$String$has_suffix(self, str) {
  return moonbitlang$core$string$$StringView$has_suffix({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$has_prefix(self, str) {
  const _bind$3 = moonbitlang$core$string$$StringView$find(self, str);
  if (_bind$3 === undefined) {
    return false;
  } else {
    const _Some = _bind$3;
    const _i = _Some;
    return _i === 0;
  }
}
function moonbitlang$core$string$$String$has_prefix(self, str) {
  return moonbitlang$core$string$$StringView$has_prefix({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$array$$Array$push$25$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$26$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$27$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$10$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$next$2$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$13$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$26$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$5$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$27$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$28$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$builtin$$Iter$next$10$(self) {
  const _func = self;
  return _func();
}
function moonbitlang$core$string$$StringView$contains(self, str) {
  const _bind$3 = moonbitlang$core$string$$StringView$find(self, str);
  return !(_bind$3 === undefined);
}
function moonbitlang$core$string$$String$contains(self, str) {
  return moonbitlang$core$string$$StringView$contains({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$contains_char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 <= 65535) {
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < len) {
          const _tmp$2 = self.str;
          const _tmp$3 = self.start + i | 0;
          if (_tmp$2.charCodeAt(_tmp$3) === c$2) {
            return true;
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (len >= 2) {
        const adj = c$2 - 65536 | 0;
        const high = 55296 + (adj >> 10) | 0;
        const low = 56320 + (adj & 1023) | 0;
        let i = 0;
        while (true) {
          if (i < (len - 1 | 0)) {
            const _p = i;
            const _tmp = self.str;
            const _tmp$2 = self.start + _p | 0;
            if (_tmp.charCodeAt(_tmp$2) === high) {
              i = i + 1 | 0;
              const _p$2 = i;
              const _tmp$3 = self.str;
              const _tmp$4 = self.start + _p$2 | 0;
              if (_tmp$3.charCodeAt(_tmp$4) === low) {
                return true;
              }
            }
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$StringView$trim_start$46$inner(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
      const _tmp$2 = _param.str;
      const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
      let _tmp$3;
      if (_bind$3 === undefined) {
        _tmp$3 = _param.end;
      } else {
        const _Some = _bind$3;
        _tmp$3 = _Some;
      }
      const _tmp$4 = _tmp$3;
      const _x = { str: _tmp$2, start: _tmp$4, end: _param.end };
      if (moonbitlang$core$string$$StringView$contains_char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim_end$46$inner(self, chars) {
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param.str, 0, _param.start, _param.end)) {
      return _param;
    } else {
      const _c = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, -1, _param.start, _param.end));
      const _x = { str: _param.str, start: _param.start, end: moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, -1, _param.start, _param.end) };
      if (moonbitlang$core$string$$StringView$contains_char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return _param;
      }
    }
  }
}
function moonbitlang$core$string$$StringView$trim$46$inner(self, chars) {
  return moonbitlang$core$string$$StringView$trim_end$46$inner(moonbitlang$core$string$$StringView$trim_start$46$inner(self, chars), chars);
}
function moonbitlang$core$string$$String$trim$46$inner(self, chars) {
  return moonbitlang$core$string$$StringView$trim$46$inner({ str: self, start: 0, end: self.length }, chars);
}
function moonbitlang$core$string$$String$trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = { str: moonbitlang$core$builtin$$trim$46$42$bind$124$6102, start: 0, end: moonbitlang$core$builtin$$trim$46$42$bind$124$6102.length };
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return moonbitlang$core$string$$String$trim$46$inner(self, chars);
}
function moonbitlang$core$string$$StringView$is_empty(self) {
  return (self.end - self.start | 0) === 0;
}
function moonbitlang$core$string$$String$iter(self) {
  const len = self.length;
  const index = { val: 0 };
  const _p = () => {
    if (index.val < len) {
      const _tmp = index.val;
      const c1 = self.charCodeAt(_tmp);
      if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c1) && (index.val + 1 | 0) < len) {
        const _tmp$2 = index.val + 1 | 0;
        const c2 = self.charCodeAt(_tmp$2);
        if (moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c2)) {
          const c = moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Iter$map$29$(self, f) {
  return () => {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$5$(self);
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      return f(_x);
    }
  };
}
function moonbitlang$core$builtin$$Iter$map$30$(self, f) {
  return () => {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(self);
    if (_bind$3 === -1) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      return f(_x);
    }
  };
}
function moonbitlang$core$builtin$$Show$to_string$13$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$string$$StringView$split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return moonbitlang$core$builtin$$Iter$map$30$(moonbitlang$core$string$$StringView$iter(self), (c) => moonbitlang$core$string$$String$view$46$inner(moonbitlang$core$builtin$$Show$to_string$13$(c), 0, undefined));
  }
  const remaining = { val: self };
  const _p = () => {
    const _bind$3 = remaining.val;
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _view = _Some;
      const _bind$4 = moonbitlang$core$string$$StringView$find(_view, sep);
      if (_bind$4 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$4;
        const _end = _Some$2;
        remaining.val = moonbitlang$core$string$$StringView$view$46$inner(_view, _end + sep_len | 0, undefined);
        return moonbitlang$core$string$$StringView$view$46$inner(_view, 0, _end);
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$split(self, sep) {
  return moonbitlang$core$string$$StringView$split({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$builtin$$Iter$to_array$10$(self) {
  const result = [];
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$10$(self);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      moonbitlang$core$array$$Array$push$10$(result, _x);
      continue;
    }
  }
  return result;
}
function moonbitlang$core$char$$Char$is_ascii_uppercase(self) {
  return self >= 65 && self <= 90;
}
function moonbitlang$core$string$$String$to_lower(self) {
  const _bind$3 = moonbitlang$core$string$$String$find_by(self, (x) => moonbitlang$core$char$$Char$is_ascii_uppercase(x));
  if (_bind$3 === undefined) {
    return self;
  } else {
    const _Some = _bind$3;
    const _idx = _Some;
    const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(self.length);
    const head = moonbitlang$core$string$$String$view$46$inner(self, 0, _idx);
    moonbitlang$core$builtin$$Logger$write_substring$1$(buf, head.str, head.start, head.end - head.start | 0);
    const _it = moonbitlang$core$string$$StringView$iter(moonbitlang$core$string$$String$view$46$inner(self, _idx, undefined));
    while (true) {
      const _bind$4 = moonbitlang$core$builtin$$Iter$next$13$(_it);
      if (_bind$4 === -1) {
        break;
      } else {
        const _Some$2 = _bind$4;
        const _c = _Some$2;
        if (moonbitlang$core$char$$Char$is_ascii_uppercase(_c)) {
          moonbitlang$core$builtin$$Logger$write_char$0$(buf, _c + 32 | 0);
        } else {
          moonbitlang$core$builtin$$Logger$write_char$0$(buf, _c);
        }
        continue;
      }
    }
    return buf.val;
  }
}
function moonbitlang$core$string$$String$get_char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (moonbitlang$core$uint16$$UInt16$is_leading_surrogate(c)) {
      if ((idx + 1 | 0) < self.length) {
        const _tmp = idx + 1 | 0;
        const next = self.charCodeAt(_tmp);
        return moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(next) ? moonbitlang$core$builtin$$code_point_of_surrogate_pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return moonbitlang$core$uint16$$UInt16$is_trailing_surrogate(c) ? -1 : c;
    }
  } else {
    return -1;
  }
}
function moonbitlang$core$builtin$$Show$output$11$(self, logger) {
  logger.method_table.method_0(logger.self, moonbitlang$core$int$$Int$to_string$46$inner(self, 10));
}
function moonbitlang$core$array$$ArrayView$iter$26$(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  };
  return _p;
}
function moonbitlang$core$array$$ArrayView$iter$10$(self) {
  const i = { val: 0 };
  const _p = () => {
    if (i.val < (self.end - self.start | 0)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$26$(self) {
  return moonbitlang$core$array$$ArrayView$iter$26$({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$array$$Array$iter$10$(self) {
  return moonbitlang$core$array$$ArrayView$iter$10$({ buf: self, start: 0, end: self.length });
}
function moonbitlang$core$int$$Int$next_power_of_two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Map$new$46$inner$31$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$32$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$33$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$34$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$35$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$36$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$37$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$38$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$36$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$34$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$37$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$38$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$4$(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$3$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$31$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$36$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$35$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$32$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$33$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$34$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$37$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$38$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$4$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$3$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$3$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$31$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$31$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$36$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$36$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$36$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$35$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$35$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$32$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$32$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$33$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$33$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$34$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$34$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$34$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$37$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$37$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$37$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$38$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$38$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$38$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$4$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind$3 = _tmp$4[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$4$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$4$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$3$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$3$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$3$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$31$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$31$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$31$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$36$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$36$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$36$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$36$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$35$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$35$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$35$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$32$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$32$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$32$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$33$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$33$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$33$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$34$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$34$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$34$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$34$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$37$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$37$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$37$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$37$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$38$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$38$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$38$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$38$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$4$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$4$(self);
  }
  let _bind$3;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$4 = _tmp$3[idx];
    if (_bind$4 === undefined) {
      _bind$3 = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$4$(self, idx, _curr_entry);
        _bind$3 = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind$3._0;
  const _psl = _bind$3._1;
  const _bind$4 = self.tail;
  const _bind$5 = undefined;
  const entry = { prev: _bind$4, next: _bind$5, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$4$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$3$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$3$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$31$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$31$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$36$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$36$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$35$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$35$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$32$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$32$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$33$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$33$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$34$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$34$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$37$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$37$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$38$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$38$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$4$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$4$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$3$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$3$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$31$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$31$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$36$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$36$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$35$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$35$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$32$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$32$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$33$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$33$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$34$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$34$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$set$37$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$37$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$38$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$38$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$4$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$4$(self, key, value, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$from_array$31$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$31$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$31$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$3$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$3$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$3$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$32$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$32$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$32$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$33$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$33$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$33$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$34$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$34$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$34$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$35$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$35$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$35$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$36$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$36$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$36$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$37$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$37$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$37$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$38$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$38$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$38$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$4$(arr) {
  const length = arr.end - arr.start | 0;
  let capacity = moonbitlang$core$int$$Int$next_power_of_two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = moonbitlang$core$builtin$$Map$new$46$inner$4$(capacity);
  const _len = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      moonbitlang$core$builtin$$Map$set$4$(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$Map$get$3$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$36$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$35$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$31$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$37$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$34$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$get$4$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$35$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$19$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$32$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$35$(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_entry$4$(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind$3);
    const _p = _tmp[_bind$3];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    const _tmp$3 = _tmp$2;
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$35$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$3 = _tmp$2[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$35$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$shift_back$4$(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = idx$2 + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind$3 = _tmp$2[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          moonbitlang$core$builtin$$Map$set_entry$4$(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$35$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$35$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$35$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove_with_hash$4$(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$3 = _tmp$3[idx];
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        moonbitlang$core$builtin$$Map$remove_entry$4$(self, _entry);
        moonbitlang$core$builtin$$Map$shift_back$4$(self, idx);
        self.size = self.size - 1 | 0;
        break;
      }
      if (i > _entry.psl) {
        break;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$remove$35$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$35$(self, key, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$builtin$$Map$remove$4$(self, key) {
  moonbitlang$core$builtin$$Map$remove_with_hash$4$(self, key, moonbitlang$core$builtin$$Hash$hash$19$(key));
}
function moonbitlang$core$array$$FixedArray$fill$46$inner$39$(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$core$builtin$$Map$iter$38$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$3 = curr_entry.val;
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$iter2$38$(self) {
  return moonbitlang$core$builtin$$Map$iter$38$(self);
}
function moonbitlang$core$builtin$$Iter$filter$5$(self, f) {
  return () => {
    while (true) {
      const _bind$3 = moonbitlang$core$builtin$$Iter$next$5$(self);
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  };
}
function moonbitlang$core$builtin$$Iter2$next$24$(self) {
  return moonbitlang$core$builtin$$Iter$next$28$(self);
}
function moonbitlang$core$builtin$$Iter2$next$38$(self) {
  return moonbitlang$core$builtin$$Iter$next$27$(self);
}
function moonbitlang$core$int$$Int$to_char(self) {
  _L: {
    if (self >= 0 && self <= 55295) {
      break _L;
    } else {
      if (self >= 57344 && self <= 1114111) {
        break _L;
      } else {
        return -1;
      }
    }
  }
  return self;
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$add$40$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$40$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$40$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$try_get_int64_wasm_helper() {
  if (moonbitlang$core$builtin$$wasm_helper_cache.tried) {
    const _bind$3 = moonbitlang$core$builtin$$wasm_helper_cache.exports;
    return !(_bind$3 === undefined);
  }
  moonbitlang$core$builtin$$wasm_helper_cache.tried = true;
  moonbitlang$core$builtin$$wasm_helper_cache.exports = moonbitlang$core$builtin$$try_init_wasm_helper();
  const _bind$3 = moonbitlang$core$builtin$$wasm_helper_cache.exports;
  return !(_bind$3 === undefined);
}
function moonbitlang$core$builtin$$Div$div$40$(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!moonbitlang$core$builtin$$try_get_int64_wasm_helper()) {
      return moonbitlang$core$builtin$$MyInt64$div_bigint(self, other);
    }
    const _bind$3 = moonbitlang$core$builtin$$wasm_helper_cache.exports;
    if (_bind$3 === undefined) {
      return $panic();
    } else {
      const _Some = _bind$3;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_s;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return { hi: hi, lo: lo };
    }
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Add$add$18$(self, other) {
  return moonbitlang$core$builtin$$Add$add$40$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$18$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$40$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$18$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$40$(self, other);
}
function moonbitlang$core$builtin$$Div$div$18$(self, other) {
  return moonbitlang$core$builtin$$Div$div$40$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$18$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  const _p = self;
  return _p.lo;
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end2395 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end2395) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$10$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$11$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_int(hasher, self);
}
function moonbitlang$core$double$$Double$to_int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function moonbitlang$core$char$$Char$to_hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? moonbitlang$core$byte$$Byte$to_hex(code & 255) : code <= 65535 ? `${moonbitlang$core$byte$$Byte$to_hex(code >> 8 & 255)}${moonbitlang$core$byte$$Byte$to_hex(code & 255)}` : `${moonbitlang$core$byte$$Byte$to_hex(code >> 16 & 255)}${moonbitlang$core$byte$$Byte$to_hex(code >> 8 & 255)}${moonbitlang$core$byte$$Byte$to_hex(code & 255)}`;
}
function moonbitlang$core$char$$Char$is_control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function moonbitlang$core$char$$Char$is_printable(self) {
  if (moonbitlang$core$char$$Char$is_control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (55296 <= self$2 && self$2 <= 57343) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function moonbitlang$core$builtin$$Show$output$13$(self, logger) {
  logger.method_table.method_3(logger.self, 39);
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!moonbitlang$core$char$$Char$is_printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, moonbitlang$core$char$$Char$to_hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  logger.method_table.method_3(logger.self, 39);
}
function moonbitlang$core$builtin$$Show$output$41$(self, logger) {
  const pkg = self.pkg;
  const _data = pkg.str;
  const _start = pkg.start;
  const _end = _start + (pkg.end - pkg.start | 0) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let tag_0 = -1;
  let _bind$3;
  _L: {
    _L$2: {
      _L$3: while (true) {
        if (_cursor < _end) {
          _L$4: {
            _L$5: {
              const _p = _cursor;
              const next_char = _data.charCodeAt(_p);
              _cursor = _cursor + 1 | 0;
              if (next_char < 55296) {
                if (next_char < 47) {
                  break _L$5;
                } else {
                  if (next_char > 47) {
                    break _L$5;
                  } else {
                    _L$6: while (true) {
                      tag_0 = _cursor;
                      if (_cursor < _end) {
                        _L$7: {
                          const _p$2 = _cursor;
                          const next_char$2 = _data.charCodeAt(_p$2);
                          _cursor = _cursor + 1 | 0;
                          if (next_char$2 < 55296) {
                            if (next_char$2 < 47) {
                              break _L$7;
                            } else {
                              if (next_char$2 > 47) {
                                break _L$7;
                              } else {
                                while (true) {
                                  if (_cursor < _end) {
                                    _L$8: {
                                      const _p$3 = _cursor;
                                      const next_char$3 = _data.charCodeAt(_p$3);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$3 < 56319) {
                                        if (next_char$3 < 55296) {
                                          break _L$8;
                                        } else {
                                          if (_cursor < _end) {
                                            const _p$4 = _cursor;
                                            const next_char$4 = _data.charCodeAt(_p$4);
                                            _cursor = _cursor + 1 | 0;
                                            if (next_char$4 < 56320) {
                                              break _L$2;
                                            } else {
                                              if (next_char$4 > 65535) {
                                                break _L$2;
                                              } else {
                                                continue;
                                              }
                                            }
                                          } else {
                                            break _L$2;
                                          }
                                        }
                                      } else {
                                        if (next_char$3 > 56319) {
                                          if (next_char$3 < 65536) {
                                            break _L$8;
                                          } else {
                                            break _L$2;
                                          }
                                        } else {
                                          if (_cursor < _end) {
                                            const _p$4 = _cursor;
                                            const next_char$4 = _data.charCodeAt(_p$4);
                                            _cursor = _cursor + 1 | 0;
                                            if (next_char$4 < 56320) {
                                              break _L$2;
                                            } else {
                                              if (next_char$4 > 57343) {
                                                break _L$2;
                                              } else {
                                                continue;
                                              }
                                            }
                                          } else {
                                            break _L$2;
                                          }
                                        }
                                      }
                                    }
                                    continue;
                                  } else {
                                    match_tag_saver_0 = tag_0;
                                    accept_state = 0;
                                    match_end = _cursor;
                                    break _L$2;
                                  }
                                }
                              }
                            }
                          } else {
                            if (next_char$2 > 56318) {
                              if (next_char$2 < 57344) {
                                if (_cursor < _end) {
                                  const _p$3 = _cursor;
                                  const next_char$3 = _data.charCodeAt(_p$3);
                                  _cursor = _cursor + 1 | 0;
                                  if (next_char$3 < 56320) {
                                    break _L$2;
                                  } else {
                                    if (next_char$3 > 57343) {
                                      break _L$2;
                                    } else {
                                      continue;
                                    }
                                  }
                                } else {
                                  break _L$2;
                                }
                              } else {
                                if (next_char$2 > 65535) {
                                  break _L$2;
                                } else {
                                  break _L$7;
                                }
                              }
                            } else {
                              if (_cursor < _end) {
                                const _p$3 = _cursor;
                                const next_char$3 = _data.charCodeAt(_p$3);
                                _cursor = _cursor + 1 | 0;
                                if (next_char$3 < 56320) {
                                  break _L$2;
                                } else {
                                  if (next_char$3 > 65535) {
                                    break _L$2;
                                  } else {
                                    continue;
                                  }
                                }
                              } else {
                                break _L$2;
                              }
                            }
                          }
                        }
                        continue;
                      } else {
                        break _L$2;
                      }
                    }
                  }
                }
              } else {
                if (next_char > 56318) {
                  if (next_char < 57344) {
                    if (_cursor < _end) {
                      const _p$2 = _cursor;
                      const next_char$2 = _data.charCodeAt(_p$2);
                      _cursor = _cursor + 1 | 0;
                      if (next_char$2 < 56320) {
                        break _L$2;
                      } else {
                        if (next_char$2 > 57343) {
                          break _L$2;
                        } else {
                          continue;
                        }
                      }
                    } else {
                      break _L$2;
                    }
                  } else {
                    if (next_char > 65535) {
                      break _L$2;
                    } else {
                      break _L$5;
                    }
                  }
                } else {
                  if (_cursor < _end) {
                    const _p$2 = _cursor;
                    const next_char$2 = _data.charCodeAt(_p$2);
                    _cursor = _cursor + 1 | 0;
                    if (next_char$2 < 56320) {
                      break _L$2;
                    } else {
                      if (next_char$2 > 65535) {
                        break _L$2;
                      } else {
                        continue;
                      }
                    }
                  } else {
                    break _L$2;
                  }
                }
              }
              break _L$4;
            }
            continue;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    if (accept_state === 0) {
      let package_name;
      let _try_err;
      _L$3: {
        _L$4: {
          const _bind$4 = moonbitlang$core$string$$String$sub(_data, match_tag_saver_0 + 1 | 0, match_end);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            package_name = _ok._0;
          } else {
            const _err = _bind$4;
            const _tmp = _err._0;
            _try_err = _tmp;
            break _L$4;
          }
          break _L$3;
        }
        package_name = $panic();
      }
      let module_name;
      let _try_err$2;
      _L$4: {
        _L$5: {
          const _bind$4 = moonbitlang$core$string$$String$sub(_data, _start, match_tag_saver_0);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            module_name = _ok._0;
          } else {
            const _err = _bind$4;
            const _tmp = _err._0;
            _try_err$2 = _tmp;
            break _L$5;
          }
          break _L$4;
        }
        module_name = $panic();
      }
      _bind$3 = { _0: module_name, _1: package_name };
    } else {
      _bind$3 = { _0: pkg, _1: undefined };
    }
  }
  const _module_name = _bind$3._0;
  const _package_name = _bind$3._1;
  if (_package_name === undefined) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_table.method_2(logger.self, _pkg_name);
    logger.method_table.method_3(logger.self, 47);
  }
  logger.method_table.method_2(logger.self, self.filename);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_column);
  logger.method_table.method_3(logger.self, 45);
  logger.method_table.method_2(logger.self, self.end_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.end_column);
  logger.method_table.method_3(logger.self, 64);
  logger.method_table.method_2(logger.self, _module_name);
}
function moonbitlang$core$builtin$$Show$output$23$(self, logger) {
  moonbitlang$core$builtin$$Show$output$41$(moonbitlang$core$builtin$$SourceLocRepr$parse(self), logger);
}
function moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, new_len) {
  moonbitlang$core$builtin$$JSArray$set_length(self, new_len);
}
function moonbitlang$core$array$$Array$remove$6$(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    moonbitlang$core$builtin$$JSArray$splice(self, index, 1);
    return value;
  } else {
    return moonbitlang$core$builtin$$abort$6$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$19$(self.length)} but the index is ${moonbitlang$core$builtin$$Show$to_string$19$(index)}`, "@moonbitlang/core/builtin:arraycore_js.mbt:251:5-253:6");
  }
}
function moonbitlang$core$array$$Array$clear$6$(self) {
  moonbitlang$core$array$$Array$unsafe_truncate_to_length$6$(self, 0);
}
function moonbitlang$core$strconv$$base_err$42$() {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind$3 === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$4 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$5 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$6 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$7 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$7;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$8 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$8;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$1$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$1$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$1$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$1$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind$3 === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$4 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$5 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$6 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$7 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$7;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$8 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$8;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$1$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$1$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$1$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$1$({ _0: base, _1: view, _2: false }) : moonbitlang$core$strconv$$base_err$42$();
  }
}
function moonbitlang$core$strconv$$range_err$7$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$18$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$11$() {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$18$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$builtin$$Add$add$18$(moonbitlang$core$builtin$$Div$div$18$($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$builtin$$Add$add$18$(moonbitlang$core$builtin$$Div$div$18$($9223372036854775807L, $16L), $1L) : moonbitlang$core$builtin$$Add$add$18$(moonbitlang$core$builtin$$Div$div$18$($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$builtin$$Div$div$18$($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$builtin$$Div$div$18$($_9223372036854775808L, $16L) : moonbitlang$core$builtin$$Div$div$18$($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$parse_int64$46$inner(str, base) {
  if (moonbitlang$core$builtin$$Eq$not_equal$16$(str, { str: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$603, start: 0, end: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$603.length })) {
    let _bind$3;
    let rest;
    _L: {
      _L$2: {
        const _bind$4 = moonbitlang$core$string$$StringView$view$46$inner(str, 0, undefined);
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$4.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 0, _bind$4.start, _bind$4.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$4.str;
              const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
              let _tmp$2;
              if (_bind$5 === undefined) {
                _tmp$2 = _bind$4.end;
              } else {
                const _Some = _bind$5;
                _tmp$2 = _Some;
              }
              const _tmp$3 = _tmp$2;
              const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$4.end };
              _bind$3 = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$4 = _bind$4.str;
              const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
              let _tmp$5;
              if (_bind$6 === undefined) {
                _tmp$5 = _bind$4.end;
              } else {
                const _Some = _bind$6;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$4.end };
              _bind$3 = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$4;
              break _L$2;
            }
          }
        } else {
          rest = _bind$4;
          break _L$2;
        }
        break _L;
      }
      _bind$3 = { _0: false, _1: rest };
    }
    const _neg = _bind$3._0;
    const _rest = _bind$3._1;
    const _bind$4 = moonbitlang$core$strconv$$check_and_consume_base(_rest, base);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _num_base = _bind$5._0;
    const _rest$2 = _bind$5._1;
    const _allow_underscore = _bind$5._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_num_base, _neg);
    let has_digit;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$6 = moonbitlang$core$strconv$$syntax_err$18$();
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$6;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$6 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$6;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$6 = moonbitlang$core$strconv$$syntax_err$18$();
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$6;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$6 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$6;
                    _tmp$6 = _Some;
                  }
                  const _tmp$7 = _tmp$6;
                  const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$6 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$6;
                  _tmp$6 = _Some;
                }
                const _tmp$7 = _tmp$6;
                const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$6 = moonbitlang$core$strconv$$syntax_err$11$();
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                d = _ok._0;
              } else {
                return _bind$6;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (moonbitlang$core$builtin$$Compare$op_ge$17$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Sub$sub$18$(moonbitlang$core$builtin$$Mul$mul$18$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$Compare$op_le$17$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$6 = moonbitlang$core$strconv$$range_err$18$();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$6;
                }
              }
            } else {
              const _bind$6 = moonbitlang$core$strconv$$range_err$18$();
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$6;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$Compare$op_lt$17$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Add$add$18$(moonbitlang$core$builtin$$Mul$mul$18$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$Compare$op_ge$17$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$6 = moonbitlang$core$strconv$$range_err$18$();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$6;
                }
              }
            } else {
              const _bind$6 = moonbitlang$core$strconv$$range_err$18$();
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$6;
              }
            }
          }
        } else {
          const _bind$6 = moonbitlang$core$strconv$$syntax_err$18$();
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$6;
          }
        }
      }
      return new Result$Ok$3$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$18$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$18$();
  }
}
function moonbitlang$core$strconv$$parse_int$46$inner(str, base) {
  const _bind$3 = moonbitlang$core$strconv$$parse_int64$46$inner(str, base);
  let n;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    n = _ok._0;
  } else {
    return _bind$3;
  }
  if (moonbitlang$core$builtin$$Compare$op_lt$17$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$Compare$op_gt$17$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$4 = moonbitlang$core$strconv$$range_err$7$();
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  return new Result$Ok$4$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$deque$$Deque$new$46$inner$2$(capacity) {
  return { buf: new Array(capacity), len: 0, head: 0 };
}
function moonbitlang$core$deque$$Deque$realloc$2$(self) {
  const _p = self.buf;
  const old_cap = _p.length;
  const new_cap = old_cap === 0 ? 8 : Math.imul(old_cap, 2) | 0;
  const new_buf = new Array(new_cap);
  const _end404 = self.len;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end404) {
      const src_idx = (self.head + i | 0) % old_cap | 0;
      const _tmp$2 = self.buf;
      $bound_check(_tmp$2, src_idx);
      $bound_check(new_buf, i);
      new_buf[i] = _tmp$2[src_idx];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.head = 0;
  self.buf = new_buf;
}
function moonbitlang$core$deque$$Deque$push_back$2$(self, value) {
  const _tmp = self.len;
  const _p = self.buf;
  if (_tmp === _p.length) {
    moonbitlang$core$deque$$Deque$realloc$2$(self);
  }
  const _p$2 = self.buf;
  const cap = _p$2.length;
  const write_idx = (self.head + self.len | 0) % cap | 0;
  const _tmp$2 = self.buf;
  $bound_check(_tmp$2, write_idx);
  _tmp$2[write_idx] = value;
  self.len = self.len + 1 | 0;
}
function moonbitlang$core$deque$$Deque$pop_front$2$(self) {
  if (self.len > 0) {
    const _tmp = self.buf;
    const _tmp$2 = self.head;
    $bound_check(_tmp, _tmp$2);
    const value = _tmp[_tmp$2];
    const _tmp$3 = self.buf;
    const _tmp$4 = self.head;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4] = null;
    const _p = self.buf;
    const cap = _p.length;
    self.head = (self.head + 1 | 0) % cap | 0;
    self.len = self.len - 1 | 0;
    return value;
  } else {
    return undefined;
  }
}
function moonbitlang$core$set$$Set$new$46$inner$2$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return { entries: _bind$5, size: 0, capacity: capacity$2, capacity_mask: _bind$3, grow_at: _bind$4, head: _bind$6, tail: -1 };
}
function moonbitlang$core$set$$Set$clear$2$(self) {
  moonbitlang$core$array$$FixedArray$fill$46$inner$39$(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function moonbitlang$core$set$$Set$iter$2$(self) {
  const curr_entry = { val: self.head };
  const _p = () => {
    const _bind$3 = curr_entry.val;
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      curr_entry.val = _next;
      return _key;
    }
  };
  return _p;
}
function f4ah6o$mhx$ffi$$MutationObserver$new_ffi(_tmp) {
  return mhx_ffi.mutation_observer_new(_tmp);
}
function f4ah6o$mhx$ffi$$MutationObserver$observe(_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5) {
  return mhx_ffi.mutation_observer_observe(_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5);
}
function f4ah6o$mhx$ffi$$MutationObserver$records_count(_tmp) {
  return mhx_ffi.mutation_observer_records_count(_tmp);
}
function f4ah6o$mhx$ffi$$MutationObserver$record_at(_tmp, _tmp$2) {
  return mhx_ffi.mutation_observer_record_at(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$MutationObserver$clear_records(_tmp) {
  return mhx_ffi.mutation_observer_clear_records(_tmp);
}
function f4ah6o$mhx$ffi$$MutationRecord$type_(_tmp) {
  return mhx_ffi.mutation_record_type(_tmp);
}
function f4ah6o$mhx$ffi$$MutationRecord$target(_tmp) {
  return mhx_ffi.mutation_record_target(_tmp);
}
function f4ah6o$mhx$ffi$$MutationRecord$added_nodes_count(_tmp) {
  return mhx_ffi.mutation_record_added_nodes_count(_tmp);
}
function f4ah6o$mhx$ffi$$MutationRecord$added_node_at(_tmp, _tmp$2) {
  return mhx_ffi.mutation_record_added_node_at(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$MutationRecord$attribute_name(_tmp) {
  return mhx_ffi.mutation_record_attribute_name(_tmp);
}
function f4ah6o$mhx$ffi$$MutationRecord$has_attribute_name(_tmp) {
  return mhx_ffi.mutation_record_has_attribute_name(_tmp);
}
function f4ah6o$mhx$ffi$$Node$is_element(_tmp) {
  return mhx_ffi.node_is_element(_tmp);
}
function f4ah6o$mhx$ffi$$Node$as_element(_tmp) {
  return mhx_ffi.node_as_element(_tmp);
}
function f4ah6o$mhx$ffi$$JsResponse$status(_tmp) {
  return mhx_ffi.response_status(_tmp);
}
function f4ah6o$mhx$ffi$$JsResponse$status_text(_tmp) {
  return mhx_ffi.response_status_text(_tmp);
}
function f4ah6o$mhx$ffi$$JsResponse$ok(_tmp) {
  return mhx_ffi.response_ok(_tmp);
}
function f4ah6o$mhx$ffi$$AbortController$new() {
  return mhx_ffi.abort_controller_new();
}
function f4ah6o$mhx$ffi$$AbortController$signal(_tmp) {
  return mhx_ffi.abort_controller_signal(_tmp);
}
function f4ah6o$mhx$ffi$$AbortController$abort(_tmp) {
  return mhx_ffi.abort_controller_abort(_tmp);
}
function f4ah6o$mhx$ffi$$JsFormData$from_element(_tmp) {
  return mhx_ffi.form_data_from_element(_tmp);
}
function f4ah6o$mhx$ffi$$JsFormData$to_url_encoded(_tmp) {
  return mhx_ffi.form_data_to_url_encoded(_tmp);
}
function f4ah6o$mhx$ffi$$Event$type_(_tmp) {
  return mhx_ffi.event_type(_tmp);
}
function f4ah6o$mhx$ffi$$Event$target_ffi(_tmp) {
  return mhx_ffi.event_target(_tmp);
}
function f4ah6o$mhx$ffi$$Event$has_target(_tmp) {
  return mhx_ffi.event_has_target(_tmp);
}
function f4ah6o$mhx$ffi$$Event$prevent_default(_tmp) {
  return mhx_ffi.event_prevent_default(_tmp);
}
function f4ah6o$mhx$ffi$$Event$stop_propagation(_tmp) {
  return mhx_ffi.event_stop_propagation(_tmp);
}
function f4ah6o$mhx$ffi$$Event$cancel_bubble(_tmp) {
  return mhx_ffi.event_cancel_bubble(_tmp);
}
function f4ah6o$mhx$ffi$$Event$eval_filter(_tmp, _tmp$2) {
  return mhx_ffi.event_eval_filter(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$get_attribute(_tmp, _tmp$2) {
  return mhx_ffi.element_get_attribute(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$has_attribute(_tmp, _tmp$2) {
  return mhx_ffi.element_has_attribute(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$add_class(_tmp, _tmp$2) {
  return mhx_ffi.element_add_class(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$remove_class(_tmp, _tmp$2) {
  return mhx_ffi.element_remove_class(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$query_selector_ffi(_tmp, _tmp$2) {
  return mhx_ffi.element_query_selector(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$query_selector_exists(_tmp, _tmp$2) {
  return mhx_ffi.element_query_selector_exists(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$closest_ffi(_tmp, _tmp$2) {
  return mhx_ffi.element_closest(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$closest_exists(_tmp, _tmp$2) {
  return mhx_ffi.element_closest_exists(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$matches(_tmp, _tmp$2) {
  return mhx_ffi.element_matches(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$parent_element_ffi(_tmp) {
  return mhx_ffi.element_parent_element(_tmp);
}
function f4ah6o$mhx$ffi$$Element$has_parent(_tmp) {
  return mhx_ffi.element_has_parent(_tmp);
}
function f4ah6o$mhx$ffi$$Element$same(_tmp, _tmp$2) {
  return mhx_ffi.element_same(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$tag_name(_tmp) {
  return mhx_ffi.element_tag_name(_tmp);
}
function f4ah6o$mhx$ffi$$Element$id(_tmp) {
  return mhx_ffi.element_id(_tmp);
}
function f4ah6o$mhx$ffi$$Element$set_inner_html(_tmp, _tmp$2) {
  return mhx_ffi.element_set_inner_html(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$set_outer_html(_tmp, _tmp$2) {
  return mhx_ffi.element_set_outer_html(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$insert_adjacent_html(_tmp, _tmp$2, _tmp$3) {
  return mhx_ffi.element_insert_adjacent_html(_tmp, _tmp$2, _tmp$3);
}
function f4ah6o$mhx$ffi$$Element$remove(_tmp) {
  return mhx_ffi.element_remove(_tmp);
}
function f4ah6o$mhx$ffi$$Element$is_null(_tmp) {
  return mhx_ffi.element_is_null(_tmp);
}
function f4ah6o$mhx$ffi$$Element$child_count(_tmp) {
  return mhx_ffi.element_child_count(_tmp);
}
function f4ah6o$mhx$ffi$$Element$child_at(_tmp, _tmp$2) {
  return mhx_ffi.element_child_at(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Element$value(_tmp) {
  return mhx_ffi.element_value(_tmp);
}
function f4ah6o$mhx$ffi$$document() {
  return mhx_ffi.get_document();
}
function f4ah6o$mhx$ffi$$window() {
  return mhx_ffi.get_window();
}
function f4ah6o$mhx$ffi$$Document$body_ffi(_tmp) {
  return mhx_ffi.document_body(_tmp);
}
function f4ah6o$mhx$ffi$$Document$document_element_ffi(_tmp) {
  return mhx_ffi.document_document_element(_tmp);
}
function f4ah6o$mhx$ffi$$Document$query_selector_ffi(_tmp, _tmp$2) {
  return mhx_ffi.document_query_selector(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Document$query_selector_exists(_tmp, _tmp$2) {
  return mhx_ffi.document_query_selector_exists(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$Document$add_event_listener(_tmp, _tmp$2, _tmp$3) {
  return mhx_ffi.document_add_event_listener(_tmp, _tmp$2, _tmp$3);
}
function f4ah6o$mhx$ffi$$Window$history_push_state(_tmp, _tmp$2, _tmp$3) {
  return mhx_ffi.window_history_push_state(_tmp, _tmp$2, _tmp$3);
}
function f4ah6o$mhx$ffi$$Window$set_timeout(_tmp, _tmp$2, _tmp$3) {
  return mhx_ffi.window_set_timeout(_tmp, _tmp$2, _tmp$3);
}
function f4ah6o$mhx$ffi$$Window$clear_timeout(_tmp, _tmp$2) {
  return mhx_ffi.window_clear_timeout(_tmp, _tmp$2);
}
function f4ah6o$mhx$ffi$$console_error(_tmp) {
  return mhx_ffi.console_error(_tmp);
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$new(event_name, modifiers) {
  return { event_name: event_name, modifiers: modifiers };
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$is_once(self) {
  const _p = moonbitlang$core$array$$Array$iter$26$(self.modifiers);
  while (true) {
    const _p$2 = moonbitlang$core$builtin$$Iter$next$26$(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      let _tmp;
      if (_p$4.$tag === 0) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return true;
      }
      continue;
    }
  }
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$is_changed(self) {
  const _p = moonbitlang$core$array$$Array$iter$26$(self.modifiers);
  while (true) {
    const _p$2 = moonbitlang$core$builtin$$Iter$next$26$(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      let _tmp;
      if (_p$4.$tag === 1) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return true;
      }
      continue;
    }
  }
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_delay(self) {
  const _arr = self.modifiers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const m = _arr[_i];
      if (m.$tag === 2) {
        const _Delay = m;
        const _ms = _Delay._0;
        return _ms;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_throttle(self) {
  const _arr = self.modifiers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const m = _arr[_i];
      if (m.$tag === 3) {
        const _Throttle = m;
        const _ms = _Throttle._0;
        return _ms;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_debounce(self) {
  const _arr = self.modifiers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const m = _arr[_i];
      if (m.$tag === 4) {
        const _Debounce = m;
        const _ms = _Debounce._0;
        return _ms;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_target(self) {
  const _arr = self.modifiers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const m = _arr[_i];
      if (m.$tag === 6) {
        const _Target = m;
        const _sel = _Target._0;
        return _sel;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_filter(self) {
  const _arr = self.modifiers;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const m = _arr[_i];
      if (m.$tag === 9) {
        const _Filter = m;
        const _expr = _Filter._0;
        return _expr;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$should_consume(self) {
  const _p = moonbitlang$core$array$$Array$iter$26$(self.modifiers);
  while (true) {
    const _p$2 = moonbitlang$core$builtin$$Iter$next$26$(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      let _tmp;
      if (_p$4.$tag === 7) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return true;
      }
      continue;
    }
  }
}
function f4ah6o$mhx$45$spec$trigger$$TriggerDef$should_prevent(self) {
  const _p = moonbitlang$core$array$$Array$iter$26$(self.modifiers);
  while (true) {
    const _p$2 = moonbitlang$core$builtin$$Iter$next$26$(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      let _tmp;
      if (_p$4.$tag === 8) {
        _tmp = true;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return true;
      }
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$9$(_x_151, _x_152) {
  switch (_x_151.$tag) {
    case 4: {
      const _UnexpectedChar = _x_151;
      const _$42$arg_153 = _UnexpectedChar._0;
      const _$42$arg_154 = _UnexpectedChar._1;
      _x_152.method_table.method_0(_x_152.self, "UnexpectedChar(");
      _x_152.method_table.method_0(_x_152.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$12$(_x_152, _$42$arg_153);
      _x_152.method_table.method_0(_x_152.self, ", ");
      _x_152.method_table.method_0(_x_152.self, "expected=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_152, _$42$arg_154);
      _x_152.method_table.method_0(_x_152.self, ")");
      return;
    }
    case 3: {
      const _UnexpectedEnd = _x_151;
      const _$42$arg_155 = _UnexpectedEnd._0;
      const _$42$arg_156 = _UnexpectedEnd._1;
      _x_152.method_table.method_0(_x_152.self, "UnexpectedEnd(");
      _x_152.method_table.method_0(_x_152.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$12$(_x_152, _$42$arg_155);
      _x_152.method_table.method_0(_x_152.self, ", ");
      _x_152.method_table.method_0(_x_152.self, "expected=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_152, _$42$arg_156);
      _x_152.method_table.method_0(_x_152.self, ")");
      return;
    }
    case 2: {
      const _InvalidNumber = _x_151;
      const _$42$arg_157 = _InvalidNumber._0;
      const _$42$arg_158 = _InvalidNumber._1;
      _x_152.method_table.method_0(_x_152.self, "InvalidNumber(");
      _x_152.method_table.method_0(_x_152.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$12$(_x_152, _$42$arg_157);
      _x_152.method_table.method_0(_x_152.self, ", ");
      _x_152.method_table.method_0(_x_152.self, "value=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_152, _$42$arg_158);
      _x_152.method_table.method_0(_x_152.self, ")");
      return;
    }
    case 1: {
      const _InvalidModifier = _x_151;
      const _$42$arg_159 = _InvalidModifier._0;
      const _$42$arg_160 = _InvalidModifier._1;
      _x_152.method_table.method_0(_x_152.self, "InvalidModifier(");
      _x_152.method_table.method_0(_x_152.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$12$(_x_152, _$42$arg_159);
      _x_152.method_table.method_0(_x_152.self, ", ");
      _x_152.method_table.method_0(_x_152.self, "name=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_152, _$42$arg_160);
      _x_152.method_table.method_0(_x_152.self, ")");
      return;
    }
    default: {
      const _InvalidSelector = _x_151;
      const _$42$arg_161 = _InvalidSelector._0;
      const _$42$arg_162 = _InvalidSelector._1;
      _x_152.method_table.method_0(_x_152.self, "InvalidSelector(");
      _x_152.method_table.method_0(_x_152.self, "pos=");
      moonbitlang$core$builtin$$Logger$write_object$12$(_x_152, _$42$arg_161);
      _x_152.method_table.method_0(_x_152.self, ", ");
      _x_152.method_table.method_0(_x_152.self, "value=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_152, _$42$arg_162);
      _x_152.method_table.method_0(_x_152.self, ")");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$12$(_x_99, _x_100) {
  _x_100.method_table.method_0(_x_100.self, "{");
  _x_100.method_table.method_0(_x_100.self, "offset: ");
  moonbitlang$core$builtin$$Logger$write_object$11$(_x_100, _x_99.offset);
  _x_100.method_table.method_0(_x_100.self, ", ");
  _x_100.method_table.method_0(_x_100.self, "char: ");
  moonbitlang$core$builtin$$Logger$write_object$13$(_x_100, _x_99.char);
  _x_100.method_table.method_0(_x_100.self, "}");
}
function f4ah6o$mhx$45$spec$parser$$Scanner$new(input) {
  return { input: input, pos: 0 };
}
function f4ah6o$mhx$45$spec$parser$$Scanner$peek(self) {
  return self.pos >= self.input.length ? -1 : moonbitlang$core$string$$String$get_char(self.input, self.pos);
}
function f4ah6o$mhx$45$spec$parser$$Scanner$advance(self) {
  if (self.pos < self.input.length) {
    self.pos = self.pos + 1 | 0;
    return;
  } else {
    return;
  }
}
function f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(self) {
  while (true) {
    if (!(self.pos >= self.input.length)) {
      _L: {
        _L$2: {
          _L$3: {
            const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
            if (_bind$3 === -1) {
              break _L$2;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              switch (_x) {
                case 32: {
                  break _L$3;
                }
                case 9: {
                  break _L$3;
                }
                case 10: {
                  break _L$3;
                }
                case 13: {
                  break _L$3;
                }
                default: {
                  break _L$2;
                }
              }
            }
          }
          f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
          break _L;
        }
        break;
      }
      continue;
    } else {
      return;
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$Scanner$check(self, c) {
  const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
  if (_bind$3 === -1) {
    return false;
  } else {
    const _Some = _bind$3;
    const _ch = _Some;
    return _ch === c;
  }
}
function f4ah6o$mhx$45$spec$parser$$Position$at(offset, input) {
  let char;
  if (offset < input.length) {
    const _bind$3 = moonbitlang$core$string$$String$get_char(input, offset);
    char = _bind$3 === -1 ? 0 : _bind$3;
  } else {
    char = 0;
  }
  return { offset: offset, char: char };
}
function f4ah6o$mhx$45$spec$parser$$Scanner$expect(self, c) {
  if (self.pos >= self.input.length) {
    return new Result$Err$5$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedEnd(f4ah6o$mhx$45$spec$parser$$Position$at(self.pos, self.input), moonbitlang$core$builtin$$Show$to_string$13$(c)));
  }
  const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
  if (_bind$3 === -1) {
    return new Result$Err$5$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedEnd(f4ah6o$mhx$45$spec$parser$$Position$at(self.pos, self.input), moonbitlang$core$builtin$$Show$to_string$13$(c)));
  } else {
    const _Some = _bind$3;
    const _ch = _Some;
    if (_ch === c) {
      return new Result$Ok$5$(f4ah6o$mhx$45$spec$parser$$Scanner$advance(self));
    } else {
      return new Result$Err$5$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedChar(f4ah6o$mhx$45$spec$parser$$Position$at(self.pos, self.input), moonbitlang$core$builtin$$Show$to_string$13$(c)));
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$Scanner$try_consume(self, c) {
  if (f4ah6o$mhx$45$spec$parser$$Scanner$check(self, c)) {
    f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
    return true;
  } else {
    return false;
  }
}
function f4ah6o$mhx$45$spec$parser$$is_letter(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function f4ah6o$mhx$45$spec$parser$$is_ident_char(c) {
  return f4ah6o$mhx$45$spec$parser$$is_letter(c) || (c >= 48 && c <= 57 || (c === 45 || c === 95));
}
function f4ah6o$mhx$45$spec$parser$$is_modifier_keyword(s) {
  const _p = moonbitlang$core$array$$Array$iter$10$(f4ah6o$mhx$45$spec$parser$$modifier_keywords);
  while (true) {
    const _p$2 = moonbitlang$core$builtin$$Iter$next$10$(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      if (_p$4 === s) {
        return true;
      }
      continue;
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(self) {
  const start = self.pos;
  while (true) {
    if (!(self.pos >= self.input.length)) {
      _L: {
        _L$2: {
          const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
          if (_bind$3 === -1) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _c = _Some;
            if (f4ah6o$mhx$45$spec$parser$$is_ident_char(_c)) {
              f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  let _try_err;
  _L: {
    const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(self.input, start, self.pos);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      const _err = _bind$3;
      const _tmp$2 = _err._0;
      _try_err = _tmp$2;
      break _L;
    }
    return moonbitlang$core$builtin$$Show$to_string$5$(_tmp);
  }
  return $panic();
}
function f4ah6o$mhx$45$spec$parser$$Scanner$is_at_modifier_start(self) {
  const saved_pos = self.pos;
  f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(self);
  const word = f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(self);
  let result;
  if (f4ah6o$mhx$45$spec$parser$$is_modifier_keyword(word)) {
    switch (word) {
      case "once": {
        result = true;
        break;
      }
      case "changed": {
        result = true;
        break;
      }
      case "consume": {
        result = true;
        break;
      }
      case "prevent": {
        result = true;
        break;
      }
      default: {
        f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(self);
        result = f4ah6o$mhx$45$spec$parser$$Scanner$check(self, 58);
      }
    }
  } else {
    result = false;
  }
  self.pos = saved_pos;
  return result;
}
function f4ah6o$mhx$45$spec$parser$$Scanner$scan_int(self) {
  const start = self.pos;
  while (true) {
    if (!(self.pos >= self.input.length)) {
      _L: {
        _L$2: {
          const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
          if (_bind$3 === -1) {
            break _L$2;
          } else {
            const _Some = _bind$3;
            const _c = _Some;
            if (_c >= 48 && _c <= 57) {
              f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
            } else {
              break _L$2;
            }
          }
          break _L;
        }
        break;
      }
      continue;
    } else {
      break;
    }
  }
  let num_str;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(self.input, start, self.pos);
      let _tmp;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp = _ok._0;
      } else {
        const _err = _bind$3;
        const _tmp$2 = _err._0;
        _try_err = _tmp$2;
        break _L$2;
      }
      num_str = moonbitlang$core$builtin$$Show$to_string$5$(_tmp);
      break _L;
    }
    num_str = $panic();
  }
  if (num_str === "") {
    return new Result$Err$6$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidNumber(f4ah6o$mhx$45$spec$parser$$Position$at(start, self.input), num_str));
  }
  let result = 0;
  const _it = moonbitlang$core$string$$String$iter(num_str);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(_it);
    if (_bind$3 === -1) {
      break;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      result = (Math.imul(result, 10) | 0) + (_c - 48 | 0) | 0;
      continue;
    }
  }
  return new Result$Ok$6$(result);
}
function f4ah6o$mhx$45$spec$parser$$Scanner$scan_until(self, end_char) {
  const start = self.pos;
  while (true) {
    if (!(self.pos >= self.input.length)) {
      const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _c = _Some;
        if (_c === end_char) {
          break;
        } else {
          f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
        }
      }
      continue;
    } else {
      break;
    }
  }
  let _try_err;
  _L: {
    const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(self.input, start, self.pos);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      const _err = _bind$3;
      const _tmp$2 = _err._0;
      _try_err = _tmp$2;
      break _L;
    }
    return moonbitlang$core$builtin$$Show$to_string$5$(_tmp);
  }
  return $panic();
}
function f4ah6o$mhx$45$spec$parser$$Scanner$scan_bracketed(self) {
  const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(self, 91);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  const content = f4ah6o$mhx$45$spec$parser$$Scanner$scan_until(self, 93);
  const _bind$4 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(self, 93);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  return new Result$Ok$7$(content);
}
function f4ah6o$mhx$45$spec$parser$$Scanner$scan_selector_value(self) {
  const start = self.pos;
  let depth = 0;
  while (true) {
    if (!(self.pos >= self.input.length)) {
      if (f4ah6o$mhx$45$spec$parser$$Scanner$check(self, 44) && depth === 0) {
        break;
      }
      if (f4ah6o$mhx$45$spec$parser$$Scanner$check(self, 91) && depth === 0) {
        break;
      }
      if (depth === 0 && f4ah6o$mhx$45$spec$parser$$Scanner$is_at_modifier_start(self)) {
        break;
      }
      const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$peek(self);
      if (_bind$3 === -1) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        switch (_x) {
          case 40: {
            depth = depth + 1 | 0;
            f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
            break;
          }
          case 41: {
            depth = depth - 1 | 0;
            f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
            break;
          }
          default: {
            f4ah6o$mhx$45$spec$parser$$Scanner$advance(self);
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(self.input, start, self.pos);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind$3;
        const _tmp$3 = _err._0;
        _try_err = _tmp$3;
        break _L$2;
      }
      _tmp = moonbitlang$core$builtin$$Show$to_string$5$(_tmp$2);
      break _L;
    }
    _tmp = $panic();
  }
  return moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_tmp, undefined));
}
function f4ah6o$mhx$45$spec$parser$$Scanner$make_position(self) {
  return f4ah6o$mhx$45$spec$parser$$Position$at(self.pos, self.input);
}
function f4ah6o$mhx$45$spec$parser$$parse_queue_mode(scanner) {
  const value = f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(scanner);
  switch (value) {
    case "drop": {
      return new Result$Ok$8$(0);
    }
    case "replace": {
      return new Result$Ok$8$(1);
    }
    case "first": {
      return new Result$Ok$8$(2);
    }
    case "last": {
      return new Result$Ok$8$(3);
    }
    case "all": {
      return new Result$Ok$8$(4);
    }
    default: {
      return new Result$Err$8$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidModifier(f4ah6o$mhx$45$spec$parser$$Scanner$make_position(scanner), `queue:${value}`));
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$parse_selector(scanner) {
  const value = f4ah6o$mhx$45$spec$parser$$Scanner$scan_selector_value(scanner);
  switch (value) {
    case "this": {
      return $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$This;
    }
    case "body": {
      return $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Body;
    }
    case "window": {
      return $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Window;
    }
    case "document": {
      return $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Document;
    }
    default: {
      if (moonbitlang$core$string$$String$has_prefix(value, { str: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$309, start: 0, end: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$309.length })) {
        let _tmp;
        let _try_err;
        _L: {
          _L$2: {
            const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(value, 8, undefined);
            let _tmp$2;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp$2 = _ok._0;
            } else {
              const _err = _bind$3;
              const _tmp$3 = _err._0;
              _try_err = _tmp$3;
              break _L$2;
            }
            _tmp = moonbitlang$core$builtin$$Show$to_string$5$(_tmp$2);
            break _L;
          }
          _tmp = $panic();
        }
        const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_tmp, undefined));
        return new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Closest(sel);
      } else {
        if (moonbitlang$core$string$$String$has_prefix(value, { str: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$312, start: 0, end: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$312.length })) {
          let _tmp;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(value, 5, undefined);
              let _tmp$2;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$2 = _ok._0;
              } else {
                const _err = _bind$3;
                const _tmp$3 = _err._0;
                _try_err = _tmp$3;
                break _L$2;
              }
              _tmp = moonbitlang$core$builtin$$Show$to_string$5$(_tmp$2);
              break _L;
            }
            _tmp = $panic();
          }
          const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_tmp, undefined));
          return new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Find(sel);
        } else {
          if (moonbitlang$core$string$$String$has_prefix(value, { str: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$315, start: 0, end: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$315.length })) {
            let _tmp;
            let _try_err;
            _L: {
              _L$2: {
                const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(value, 5, undefined);
                let _tmp$2;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _tmp$2 = _ok._0;
                } else {
                  const _err = _bind$3;
                  const _tmp$3 = _err._0;
                  _try_err = _tmp$3;
                  break _L$2;
                }
                _tmp = moonbitlang$core$builtin$$Show$to_string$5$(_tmp$2);
                break _L;
              }
              _tmp = $panic();
            }
            const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_tmp, undefined));
            return new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Next(sel);
          } else {
            if (moonbitlang$core$string$$String$has_prefix(value, { str: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$318, start: 0, end: f4ah6o$mhx$45$spec$parser$$parse_selector$46$42$bind$124$318.length })) {
              let _tmp;
              let _try_err;
              _L: {
                _L$2: {
                  const _bind$3 = moonbitlang$core$string$$String$sub$46$inner(value, 9, undefined);
                  let _tmp$2;
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _tmp$2 = _ok._0;
                  } else {
                    const _err = _bind$3;
                    const _tmp$3 = _err._0;
                    _try_err = _tmp$3;
                    break _L$2;
                  }
                  _tmp = moonbitlang$core$builtin$$Show$to_string$5$(_tmp$2);
                  break _L;
                }
                _tmp = $panic();
              }
              const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_tmp, undefined));
              return new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Previous(sel);
            } else {
              return new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Selector$Css(value);
            }
          }
        }
      }
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$parse_time_value(scanner) {
  const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$scan_int(scanner);
  let value;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    value = _ok._0;
  } else {
    return _bind$3;
  }
  const unit = f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(scanner);
  _L: {
    switch (unit) {
      case "": {
        break _L;
      }
      case "ms": {
        break _L;
      }
      case "s": {
        return new Result$Ok$6$(Math.imul(value, 1000) | 0);
      }
      default: {
        return new Result$Ok$6$(value);
      }
    }
  }
  return new Result$Ok$6$(value);
}
function f4ah6o$mhx$45$spec$parser$$parse_modifier_by_name(scanner, name) {
  switch (name) {
    case "once": {
      return new Result$Ok$9$($64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Once);
    }
    case "changed": {
      return new Result$Ok$9$($64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Changed);
    }
    case "consume": {
      return new Result$Ok$9$($64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Consume);
    }
    case "prevent": {
      return new Result$Ok$9$($64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Prevent);
    }
    case "delay": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _ok._0;
      } else {
        return _bind$3;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$4 = f4ah6o$mhx$45$spec$parser$$parse_time_value(scanner);
      let ms;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        ms = _ok._0;
      } else {
        return _bind$4;
      }
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Delay(ms));
    }
    case "throttle": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$5 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$6 = f4ah6o$mhx$45$spec$parser$$parse_time_value(scanner);
      let ms$2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        ms$2 = _ok._0;
      } else {
        return _bind$6;
      }
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Throttle(ms$2));
    }
    case "debounce": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$7 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _ok._0;
      } else {
        return _bind$7;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$8 = f4ah6o$mhx$45$spec$parser$$parse_time_value(scanner);
      let ms$3;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        ms$3 = _ok._0;
      } else {
        return _bind$8;
      }
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Debounce(ms$3));
    }
    case "from": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$9 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        return _bind$9;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const selector = f4ah6o$mhx$45$spec$parser$$parse_selector(scanner);
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$From(selector));
    }
    case "target": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$10 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _ok._0;
      } else {
        return _bind$10;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const selector$2 = f4ah6o$mhx$45$spec$parser$$parse_selector(scanner);
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Target(selector$2));
    }
    case "queue": {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$11 = f4ah6o$mhx$45$spec$parser$$Scanner$expect(scanner, 58);
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      const _bind$12 = f4ah6o$mhx$45$spec$parser$$parse_queue_mode(scanner);
      let mode;
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        mode = _ok._0;
      } else {
        return _bind$12;
      }
      return new Result$Ok$9$(new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Queue(mode));
    }
    default: {
      return new Result$Err$9$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$InvalidModifier(f4ah6o$mhx$45$spec$parser$$Scanner$make_position(scanner), name));
    }
  }
}
function f4ah6o$mhx$45$spec$parser$$parse_modifiers(scanner) {
  const modifiers = [];
  while (true) {
    if (!(scanner.pos >= scanner.input.length) && !f4ah6o$mhx$45$spec$parser$$Scanner$check(scanner, 44)) {
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      if (scanner.pos >= scanner.input.length || f4ah6o$mhx$45$spec$parser$$Scanner$check(scanner, 44)) {
        break;
      }
      if (f4ah6o$mhx$45$spec$parser$$Scanner$check(scanner, 91)) {
        const _bind$3 = f4ah6o$mhx$45$spec$parser$$Scanner$scan_bracketed(scanner);
        let expr;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          expr = _ok._0;
        } else {
          return _bind$3;
        }
        moonbitlang$core$array$$Array$push$26$(modifiers, new $64$f4ah6o$47$mhx$45$spec$47$trigger$46$Modifier$Filter(expr));
        continue;
      }
      const name = f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(scanner);
      if (name === "") {
        break;
      }
      const _bind$3 = f4ah6o$mhx$45$spec$parser$$parse_modifier_by_name(scanner, name);
      let modifier;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        modifier = _ok._0;
      } else {
        return _bind$3;
      }
      moonbitlang$core$array$$Array$push$26$(modifiers, modifier);
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$10$(modifiers);
}
function f4ah6o$mhx$45$spec$parser$$parse_single_trigger(scanner) {
  const event_name = f4ah6o$mhx$45$spec$parser$$Scanner$scan_identifier(scanner);
  if (event_name === "") {
    return new Result$Err$11$(new Error$f4ah6o$47$mhx$45$spec$47$parser$46$ParseError$46$UnexpectedChar(f4ah6o$mhx$45$spec$parser$$Scanner$make_position(scanner), "event name (identifier)"));
  }
  const _bind$3 = f4ah6o$mhx$45$spec$parser$$parse_modifiers(scanner);
  let modifiers;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    modifiers = _ok._0;
  } else {
    return _bind$3;
  }
  return new Result$Ok$11$(f4ah6o$mhx$45$spec$trigger$$TriggerDef$new(event_name, modifiers));
}
function f4ah6o$mhx$45$spec$parser$$parse_trigger(input) {
  const scanner = f4ah6o$mhx$45$spec$parser$$Scanner$new(input);
  const triggers = [];
  f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
  while (true) {
    if (!(scanner.pos >= scanner.input.length)) {
      const _bind$3 = f4ah6o$mhx$45$spec$parser$$parse_single_trigger(scanner);
      let trigger;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        trigger = _ok._0;
      } else {
        return _bind$3;
      }
      moonbitlang$core$array$$Array$push$25$(triggers, trigger);
      f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      if (f4ah6o$mhx$45$spec$parser$$Scanner$try_consume(scanner, 44)) {
        f4ah6o$mhx$45$spec$parser$$Scanner$skip_whitespace(scanner);
      }
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$12$(triggers);
}
function f4ah6o$mhx$45$spec$swap$$Strategy$from_string(s) {
  const _bind$3 = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(moonbitlang$core$string$$String$to_lower(s), undefined));
  switch (_bind$3) {
    case "innerhtml": {
      return 0;
    }
    case "outerhtml": {
      return 1;
    }
    case "beforebegin": {
      return 2;
    }
    case "afterbegin": {
      return 3;
    }
    case "beforeend": {
      return 4;
    }
    case "afterend": {
      return 5;
    }
    case "delete": {
      return 6;
    }
    case "none": {
      return 7;
    }
    default: {
      return 0;
    }
  }
}
function f4ah6o$mhx$45$spec$swap$$SwapOptions$with_strategy(strategy) {
  const _bind$3 = f4ah6o$mhx$45$spec$swap$$default$46$record$47$1895;
  return { strategy: strategy, swap_delay: _bind$3.swap_delay, settle_delay: _bind$3.settle_delay, scroll: _bind$3.scroll, show: _bind$3.show, focus_scroll: _bind$3.focus_scroll };
}
function f4ah6o$mhx$45$spec$swap$$parse_int_or(s, default_val) {
  let _try_err;
  _L: {
    const _bind$3 = moonbitlang$core$strconv$$parse_int$46$inner({ str: s, start: 0, end: s.length }, 0);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      return _ok._0;
    } else {
      const _err = _bind$3;
      const _tmp = _err._0;
      _try_err = _tmp;
      break _L;
    }
  }
  return default_val;
}
function f4ah6o$mhx$45$spec$swap$$pow10(n) {
  let result = 1;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < n) {
      result = Math.imul(result, 10) | 0;
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function f4ah6o$mhx$45$spec$swap$$parse_time_ms(s) {
  const trimmed = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(s, undefined));
  if (moonbitlang$core$string$$String$has_suffix(trimmed, { str: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$85, start: 0, end: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$85.length })) {
    const num_str = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(trimmed, 0, trimmed.length - 2 | 0));
    return f4ah6o$mhx$45$spec$swap$$parse_int_or(num_str, 0);
  } else {
    if (moonbitlang$core$string$$String$has_suffix(trimmed, { str: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$86, start: 0, end: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$86.length })) {
      const num_str = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(trimmed, 0, trimmed.length - 1 | 0));
      const _bind$3 = moonbitlang$core$string$$String$find(num_str, { str: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$87, start: 0, end: f4ah6o$mhx$45$spec$swap$$parse_time_ms$46$42$bind$124$87.length });
      if (_bind$3 === undefined) {
        return Math.imul(f4ah6o$mhx$45$spec$swap$$parse_int_or(num_str, 0), 1000) | 0;
      } else {
        const _Some = _bind$3;
        const _dot_idx = _Some;
        const whole = f4ah6o$mhx$45$spec$swap$$parse_int_or(moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(num_str, 0, _dot_idx)), 0);
        const frac_str = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(num_str, _dot_idx + 1 | 0, undefined));
        const frac = f4ah6o$mhx$45$spec$swap$$parse_int_or(frac_str, 0);
        const frac_len = frac_str.length;
        const divisor = f4ah6o$mhx$45$spec$swap$$pow10(frac_len);
        return (Math.imul(whole, 1000) | 0) + ((Math.imul(frac, 1000) | 0) / divisor | 0) | 0;
      }
    } else {
      return f4ah6o$mhx$45$spec$swap$$parse_int_or(trimmed, 0);
    }
  }
}
function f4ah6o$mhx$45$spec$swap$$SwapOptions$parse(value) {
  const trimmed = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(value, undefined));
  if (trimmed === "") {
    return f4ah6o$mhx$45$spec$swap$$default$46$record$47$1895;
  }
  const parts = moonbitlang$core$builtin$$Iter$to_array$10$(moonbitlang$core$builtin$$Iter$map$29$(moonbitlang$core$builtin$$Iter$filter$5$(moonbitlang$core$string$$String$split(trimmed, { str: f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$112, start: 0, end: f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$112.length }), (sv) => !moonbitlang$core$string$$StringView$is_empty(sv)), (sv) => moonbitlang$core$builtin$$Show$to_string$5$(sv)));
  if (parts.length === 0) {
    return f4ah6o$mhx$45$spec$swap$$default$46$record$47$1895;
  }
  const strategy = f4ah6o$mhx$45$spec$swap$$Strategy$from_string(moonbitlang$core$array$$Array$at$10$(parts, 0));
  let options = f4ah6o$mhx$45$spec$swap$$SwapOptions$with_strategy(strategy);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < parts.length) {
      const part = moonbitlang$core$array$$Array$at$10$(parts, i);
      const _bind$3 = moonbitlang$core$string$$String$find(part, { str: f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$106, start: 0, end: f4ah6o$mhx$45$spec$swap$$parse$46$42$bind$124$106.length });
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _colon_idx = _Some;
        const modifier = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(part, 0, _colon_idx));
        const value$2 = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(part, _colon_idx + 1 | 0, undefined));
        switch (modifier) {
          case "swap": {
            const _bind$4 = options;
            options = { strategy: _bind$4.strategy, swap_delay: f4ah6o$mhx$45$spec$swap$$parse_time_ms(value$2), settle_delay: _bind$4.settle_delay, scroll: _bind$4.scroll, show: _bind$4.show, focus_scroll: _bind$4.focus_scroll };
            break;
          }
          case "settle": {
            const _bind$5 = options;
            options = { strategy: _bind$5.strategy, swap_delay: _bind$5.swap_delay, settle_delay: f4ah6o$mhx$45$spec$swap$$parse_time_ms(value$2), scroll: _bind$5.scroll, show: _bind$5.show, focus_scroll: _bind$5.focus_scroll };
            break;
          }
          case "scroll": {
            const _bind$6 = options;
            options = { strategy: _bind$6.strategy, swap_delay: _bind$6.swap_delay, settle_delay: _bind$6.settle_delay, scroll: value$2, show: _bind$6.show, focus_scroll: _bind$6.focus_scroll };
            break;
          }
          case "show": {
            const _bind$7 = options;
            options = { strategy: _bind$7.strategy, swap_delay: _bind$7.swap_delay, settle_delay: _bind$7.settle_delay, scroll: _bind$7.scroll, show: value$2, focus_scroll: _bind$7.focus_scroll };
            break;
          }
          case "focus-scroll": {
            const _bind$8 = options;
            options = { strategy: _bind$8.strategy, swap_delay: _bind$8.swap_delay, settle_delay: _bind$8.settle_delay, scroll: _bind$8.scroll, show: _bind$8.show, focus_scroll: value$2 === "true" };
            break;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return options;
}
function f4ah6o$mhx$45$spec$sync$$parse_sync_strategy(value) {
  const v = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(moonbitlang$core$string$$String$to_lower(value), undefined));
  _L: {
    _L$2: {
      _L$3: {
        switch (v) {
          case "drop": {
            return $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Drop;
          }
          case "replace": {
            return $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Replace;
          }
          case "queue": {
            break _L$3;
          }
          case "queue first": {
            break _L$3;
          }
          case "queue:first": {
            break _L$3;
          }
          case "queue last": {
            break _L$2;
          }
          case "queue:last": {
            break _L$2;
          }
          case "queue all": {
            break _L;
          }
          case "queue:all": {
            break _L;
          }
          default: {
            return $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Drop;
          }
        }
      }
      return f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1940;
    }
    return f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1939;
  }
  return f4ah6o$mhx$45$spec$sync$$parse_sync_strategy$46$constr$47$1938;
}
function f4ah6o$mhx$event$$TimingState$new() {
  return { pending_timeout: 0, last_execution: 0, is_throttled: false, queued_action: undefined };
}
function f4ah6o$mhx$event$$TimingManager$new() {
  const _bind$3 = [];
  return { states: moonbitlang$core$builtin$$Map$from_array$37$({ buf: _bind$3, start: 0, end: 0 }) };
}
function f4ah6o$mhx$event$$TimingManager$get_state(self, element_id, trigger_index) {
  const key = `${moonbitlang$core$int$$Int$to_string$46$inner(element_id, 10)}_${moonbitlang$core$int$$Int$to_string$46$inner(trigger_index, 10)}`;
  const _bind$3 = moonbitlang$core$builtin$$Map$get$37$(self.states, key);
  if (_bind$3 === undefined) {
    const state = f4ah6o$mhx$event$$TimingState$new();
    moonbitlang$core$builtin$$Map$set$37$(self.states, key, state);
    return state;
  } else {
    const _Some = _bind$3;
    return _Some;
  }
}
function f4ah6o$mhx$event$$apply_delay(state, delay_ms, action) {
  if (state.pending_timeout > 0) {
    const win = f4ah6o$mhx$ffi$$window();
    f4ah6o$mhx$ffi$$Window$clear_timeout(win, state.pending_timeout);
  }
  const win = f4ah6o$mhx$ffi$$window();
  state.pending_timeout = f4ah6o$mhx$ffi$$Window$set_timeout(win, () => {
    state.pending_timeout = 0;
    action();
  }, delay_ms);
}
function f4ah6o$mhx$event$$current_time_ffi() {
  return mhx_ffi.current_time();
}
function f4ah6o$mhx$event$$current_time() {
  return f4ah6o$mhx$event$$current_time_ffi();
}
function f4ah6o$mhx$event$$apply_throttle(state, throttle_ms, action) {
  const now = f4ah6o$mhx$event$$current_time();
  const elapsed = now - state.last_execution;
  if (elapsed >= throttle_ms + 0) {
    state.last_execution = now;
    action();
    return;
  } else {
    if (!state.is_throttled) {
      state.is_throttled = true;
      const remaining = throttle_ms + 0 - elapsed;
      const win = f4ah6o$mhx$ffi$$window();
      state.pending_timeout = f4ah6o$mhx$ffi$$Window$set_timeout(win, () => {
        state.pending_timeout = 0;
        state.is_throttled = false;
        state.last_execution = f4ah6o$mhx$event$$current_time();
        const _bind$3 = state.queued_action;
        if (_bind$3 === undefined) {
          action();
          return;
        } else {
          const _Some = _bind$3;
          const _queued = _Some;
          state.queued_action = undefined;
          _queued();
          return;
        }
      }, moonbitlang$core$double$$Double$to_int(remaining));
      return;
    } else {
      state.queued_action = action;
      return;
    }
  }
}
function f4ah6o$mhx$event$$apply_debounce(state, debounce_ms, action) {
  if (state.pending_timeout > 0) {
    const win = f4ah6o$mhx$ffi$$window();
    f4ah6o$mhx$ffi$$Window$clear_timeout(win, state.pending_timeout);
  }
  const win = f4ah6o$mhx$ffi$$window();
  state.pending_timeout = f4ah6o$mhx$ffi$$Window$set_timeout(win, () => {
    state.pending_timeout = 0;
    action();
  }, debounce_ms);
}
function f4ah6o$mhx$event$$apply_timing_modifiers(state, trigger, action) {
  const _bind$3 = f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_delay(trigger);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _delay_ms = _Some;
    f4ah6o$mhx$event$$apply_delay(state, _delay_ms, action);
    return false;
  }
  const _bind$4 = f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_throttle(trigger);
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _throttle_ms = _Some;
    f4ah6o$mhx$event$$apply_throttle(state, _throttle_ms, action);
    return false;
  }
  const _bind$5 = f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_debounce(trigger);
  if (_bind$5 === undefined) {
  } else {
    const _Some = _bind$5;
    const _debounce_ms = _Some;
    f4ah6o$mhx$event$$apply_debounce(state, _debounce_ms, action);
    return false;
  }
  return true;
}
function f4ah6o$mhx$event$$has_mhx_attributes(element) {
  return f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-get") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-post") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-put") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-patch") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-delete") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-trigger") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-target") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-swap") || (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-sync") || f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-vals")))))))));
}
function f4ah6o$mhx$event$$get_request_info(element) {
  return f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-get") ? { _0: 0, _1: f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-get") } : f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-post") ? { _0: 1, _1: f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-post") } : f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-put") ? { _0: 2, _1: f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-put") } : f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-patch") ? { _0: 3, _1: f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-patch") } : f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-delete") ? { _0: 4, _1: f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-delete") } : undefined;
}
function f4ah6o$mhx$event$$parse_element_config(element) {
  const _bind$3 = f4ah6o$mhx$event$$get_request_info(element);
  let _bind$4;
  if (_bind$3 === undefined) {
    _bind$4 = f4ah6o$mhx$event$$parse_element_config$46$tuple$47$1988;
  } else {
    const _Some = _bind$3;
    _bind$4 = _Some;
  }
  const _http_method = _bind$4._0;
  const _url = _bind$4._1;
  let trigger_str;
  if (f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-trigger")) {
    trigger_str = f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-trigger");
  } else {
    const tag = f4ah6o$mhx$ffi$$Element$tag_name(element);
    switch (tag) {
      case "FORM": {
        trigger_str = "submit";
        break;
      }
      case "INPUT": {
        trigger_str = "change";
        break;
      }
      case "TEXTAREA": {
        trigger_str = "change";
        break;
      }
      case "SELECT": {
        trigger_str = "change";
        break;
      }
      default: {
        trigger_str = "click";
      }
    }
  }
  const _bind$5 = f4ah6o$mhx$45$spec$parser$$parse_trigger(trigger_str);
  let triggers;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    triggers = _ok._0;
  } else {
    return _bind$5;
  }
  const swap = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-swap") ? f4ah6o$mhx$45$spec$swap$$Strategy$from_string(f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-swap")) : 0;
  const target = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-target") ? f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-target") : undefined;
  const sync = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-sync") ? f4ah6o$mhx$45$spec$sync$$parse_sync_strategy(f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-sync")) : undefined;
  const vals = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-vals") ? f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-vals") : undefined;
  return new Result$Ok$13$({ triggers: triggers, http_method: _http_method, url: _url, swap: swap, target: target, sync: sync, vals: vals, processed: true });
}
function f4ah6o$mhx$event$$check_filter_conditions(trigger, event) {
  const _bind$3 = f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_filter(trigger);
  if (_bind$3 === undefined) {
    return true;
  } else {
    const _Some = _bind$3;
    const _expr = _Some;
    return f4ah6o$mhx$ffi$$Event$eval_filter(event, _expr);
  }
}
function f4ah6o$mhx$event$$ConfigCache$new() {
  const _bind$3 = [];
  const _tmp = moonbitlang$core$builtin$$Map$from_array$35$({ buf: _bind$3, start: 0, end: 0 });
  const _bind$4 = [];
  return { configs: _tmp, next_id: 1, element_ids: moonbitlang$core$builtin$$Map$from_array$36$({ buf: _bind$4, start: 0, end: 0 }) };
}
function f4ah6o$mhx$event$$EventDelegator$new() {
  const _bind$3 = [];
  const _tmp = moonbitlang$core$builtin$$Map$from_array$32$({ buf: _bind$3, start: 0, end: 0 });
  const _bind$4 = [];
  return { registered_events: _tmp, handlers: moonbitlang$core$builtin$$Map$from_array$33$({ buf: _bind$4, start: 0, end: 0 }), cache: f4ah6o$mhx$event$$ConfigCache$new(), active: false };
}
function f4ah6o$mhx$event$$EventDelegator$register_event(self, event_type) {
  if (!moonbitlang$core$builtin$$Map$contains$32$(self.registered_events, event_type)) {
    moonbitlang$core$builtin$$Map$set$32$(self.registered_events, event_type, true);
    moonbitlang$core$builtin$$Map$set$33$(self.handlers, event_type, []);
    return;
  } else {
    return;
  }
}
function f4ah6o$mhx$event$$EventDelegator$set_active(self, active) {
  self.active = active;
}
function f4ah6o$mhx$event$$EventDelegator$register_defaults(self) {
  const _len = f4ah6o$mhx$event$$default_events.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const event_type = f4ah6o$mhx$event$$default_events[_i];
      f4ah6o$mhx$event$$EventDelegator$register_event(self, event_type);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function f4ah6o$mhx$event$$ConfigCache$get_element_id(self, element_hash) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$36$(self.element_ids, element_hash);
  if (_bind$3 === undefined) {
    const id = self.next_id;
    self.next_id = self.next_id + 1 | 0;
    moonbitlang$core$builtin$$Map$set$36$(self.element_ids, element_hash, id);
    return id;
  } else {
    const _Some = _bind$3;
    return _Some;
  }
}
function f4ah6o$mhx$event$$ConfigCache$set(self, element_id, config) {
  moonbitlang$core$builtin$$Map$set$35$(self.configs, element_id, config);
}
function f4ah6o$mhx$event$$ConfigCache$get(self, element_id) {
  return moonbitlang$core$builtin$$Map$get$35$(self.configs, element_id);
}
function f4ah6o$mhx$event$$ConfigCache$remove(self, element_id) {
  moonbitlang$core$builtin$$Map$remove$35$(self.configs, element_id);
}
function f4ah6o$mhx$event$$ConfigCache$has(self, element_id) {
  return moonbitlang$core$builtin$$Map$contains$35$(self.configs, element_id);
}
function moonbitlang$async$internal$coroutine$$has_immediately_ready_task() {
  const _p = moonbitlang$async$internal$coroutine$$scheduler.run_later;
  return !(_p.len === 0);
}
function moonbitlang$async$internal$coroutine$$no_more_work() {
  if (moonbitlang$async$internal$coroutine$$scheduler.blocking === 0) {
    const _p = moonbitlang$async$internal$coroutine$$scheduler.run_later;
    return _p.len === 0;
  } else {
    return false;
  }
}
function moonbitlang$async$internal$coroutine$$reschedule() {
  const _p = moonbitlang$async$internal$coroutine$$scheduler.run_later;
  const n = _p.len;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < n) {
      const _bind$3 = moonbitlang$core$deque$$Deque$pop_front$2$(moonbitlang$async$internal$coroutine$$scheduler.run_later);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _coro = _Some;
        _coro.ready = false;
        const _bind$4 = _coro.state;
        if (_bind$4.$tag === 3) {
          const _Suspend = _bind$4;
          const _ok_cont = _Suspend._0;
          const _err_cont = _Suspend._1;
          _coro.state = $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Running;
          const last_coro = moonbitlang$async$internal$coroutine$$scheduler.curr_coro;
          moonbitlang$async$internal$coroutine$$scheduler.curr_coro = _coro;
          if (_coro.cancelled && !_coro.shielded) {
            _err_cont(Error$moonbitlang$47$async$47$internal$47$coroutine$46$Cancelled$46$Cancelled);
          } else {
            _ok_cont(undefined);
          }
          moonbitlang$async$internal$coroutine$$scheduler.curr_coro = last_coro;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$async$internal$coroutine$$Coroutine$wake(self) {
  self.ready = true;
  moonbitlang$core$deque$$Deque$push_back$2$(moonbitlang$async$internal$coroutine$$scheduler.run_later, self);
}
function moonbitlang$async$internal$coroutine$$spawn$46$42$cont$124$183(_param) {}
function moonbitlang$async$internal$coroutine$$spawn$46$42$async_driver$124$184(_state) {
  let _tmp = _state;
  _L: while (true) {
    const _state$2 = _tmp;
    switch (_state$2.$tag) {
      case 0: {
        const _State_0 = _state$2;
        const coro = _State_0._1;
        _State_0._0;
        const _it = moonbitlang$core$set$$Set$iter$2$(coro.downstream);
        while (true) {
          const _bind$3 = moonbitlang$core$builtin$$Iter$next$2$(_it);
          if (_bind$3 === undefined) {
            break;
          } else {
            const _Some = _bind$3;
            const _coro = _Some;
            moonbitlang$async$internal$coroutine$$Coroutine$wake(_coro);
            continue;
          }
        }
        return moonbitlang$core$set$$Set$clear$2$(coro.downstream);
      }
      case 1: {
        const _$42$try$47$81 = _state$2;
        const coro$2 = _$42$try$47$81._1;
        const _try_err = _$42$try$47$81._0;
        coro$2.state = new $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Fail(_try_err);
        _tmp = new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_0(undefined, coro$2);
        continue _L;
      }
      default: {
        const _State_2 = _state$2;
        const coro$3 = _State_2._1;
        coro$3.state = $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Done;
        _tmp = new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_0(undefined, coro$3);
        continue _L;
      }
    }
  }
}
function moonbitlang$async$internal$coroutine$$spawn(f) {
  moonbitlang$async$internal$coroutine$$scheduler.coro_id = moonbitlang$async$internal$coroutine$$scheduler.coro_id + 1 | 0;
  const _bind$3 = $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Running;
  const _bind$4 = moonbitlang$core$set$$Set$new$46$inner$2$(8);
  const _bind$5 = moonbitlang$async$internal$coroutine$$scheduler.coro_id;
  const coro = { coro_id: _bind$5, state: _bind$3, shielded: true, cancelled: false, ready: true, downstream: _bind$4 };
  const run = (_discard_) => {
    coro.shielded = false;
    let _err;
    _L: {
      _L$2: {
        const _bind$6 = f((_cont_param) => {
          const _bind$7 = moonbitlang$async$internal$coroutine$$spawn$46$42$async_driver$124$184(new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_2(_cont_param, coro));
          if (_bind$7 === -1) {
            return;
          } else {
            const _Some = _bind$7;
            const _payload = _Some;
            moonbitlang$async$internal$coroutine$$spawn$46$42$cont$124$183(_payload);
            return;
          }
        }, (_cont_param) => {
          const _bind$7 = moonbitlang$async$internal$coroutine$$spawn$46$42$async_driver$124$184(new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$_try$47$81(_cont_param, coro));
          if (_bind$7 === -1) {
            return;
          } else {
            const _Some = _bind$7;
            const _payload = _Some;
            moonbitlang$async$internal$coroutine$$spawn$46$42$cont$124$183(_payload);
            return;
          }
        });
        let _bind$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _bind$7 = _ok._0;
        } else {
          const _err$2 = _bind$6;
          const _tmp = _err$2._0;
          _err = _tmp;
          break _L$2;
        }
        if (_bind$7 === -1) {
        } else {
          const _Some = _bind$7;
          const _payload = _Some;
          moonbitlang$async$internal$coroutine$$spawn$46$42$async_driver$124$184(new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$State_2(_payload, coro));
        }
        break _L;
      }
      moonbitlang$async$internal$coroutine$$spawn$46$42$async_driver$124$184(new $36$moonbitlang$47$async$47$internal$47$coroutine$46$spawn$46$run$47$17$46$lambda$47$182$46$State$_try$47$81(_err, coro));
    }
  };
  coro.state = new $64$moonbitlang$47$async$47$internal$47$coroutine$46$State$Suspend(run, (_discard_) => {
  });
  moonbitlang$core$deque$$Deque$push_back$2$(moonbitlang$async$internal$coroutine$$scheduler.run_later, coro);
  return coro;
}
function moonbitlang$async$internal$event_loop$$reschedule() {
  if (!moonbitlang$async$internal$coroutine$$no_more_work()) {
    moonbitlang$async$internal$coroutine$$reschedule();
    if (moonbitlang$async$internal$coroutine$$has_immediately_ready_task()) {
      moonbitlang$async$internal$event_loop$$set_timeout(0, moonbitlang$async$internal$event_loop$$reschedule);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function moonbitlang$async$$run_async_main(main) {
  moonbitlang$async$internal$coroutine$$spawn(main);
  moonbitlang$async$internal$event_loop$$reschedule();
}
function f4ah6o$mhx$network$$RequestOptions$with_signal(self, signal) {
  return { http_method: self.http_method, headers: self.headers, body: self.body, signal: new Option$Some$14$(signal) };
}
function f4ah6o$mhx$network$$RequestOptions$with_header(self, name, value) {
  const headers = self.headers;
  moonbitlang$core$builtin$$Map$set$38$(headers, name, value);
  return { http_method: self.http_method, headers: headers, body: self.body, signal: self.signal };
}
function f4ah6o$mhx$network$$escape_json_string(s) {
  let result = "";
  const _it = moonbitlang$core$string$$String$iter(s);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(_it);
    if (_bind$3 === -1) {
      break;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      switch (_c) {
        case 34: {
          result = `${result}\\\"`;
          break;
        }
        case 92: {
          result = `${result}\\\\`;
          break;
        }
        case 10: {
          result = `${result}\\n`;
          break;
        }
        case 13: {
          result = `${result}\\r`;
          break;
        }
        case 9: {
          result = `${result}\\t`;
          break;
        }
        default: {
          result = `${result}${moonbitlang$core$builtin$$Show$to_string$13$(_c)}`;
        }
      }
      continue;
    }
  }
  return result;
}
function f4ah6o$mhx$network$$RequestOptions$to_json_string(self) {
  let result = "{";
  result = `${result}\"method\":\"${self.http_method}\"`;
  const _p = self.headers;
  if (_p.size > 0) {
    result = `${result},\"headers\":{`;
    let first = true;
    const _it = moonbitlang$core$builtin$$Map$iter2$38$(self.headers);
    while (true) {
      const _bind$3 = moonbitlang$core$builtin$$Iter2$next$38$(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        if (!first) {
          result = `${result},`;
        }
        result = `${result}\"${f4ah6o$mhx$network$$escape_json_string(_key)}\":\"`;
        result = `${result}${f4ah6o$mhx$network$$escape_json_string(_value)}\"`;
        first = false;
        continue;
      }
    }
    result = `${result}}`;
  }
  const _bind$3 = self.body;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _b = _Some;
    result = `${result},\"body\":\"${f4ah6o$mhx$network$$escape_json_string(_b)}\"`;
  }
  result = `${result}}`;
  return result;
}
function f4ah6o$mhx$network$$create_dummy_response_ffi() {
  return mhx_ffi.create_dummy_response();
}
function f4ah6o$mhx$network$$Response$from_text(text) {
  return { raw: f4ah6o$mhx$network$$create_dummy_response_ffi(), body: text };
}
function f4ah6o$mhx$network$$Response$status(self) {
  return f4ah6o$mhx$ffi$$JsResponse$status(self.raw);
}
function f4ah6o$mhx$network$$Response$status_text(self) {
  return f4ah6o$mhx$ffi$$JsResponse$status_text(self.raw);
}
function f4ah6o$mhx$network$$Response$ok(self) {
  return f4ah6o$mhx$ffi$$JsResponse$ok(self.raw);
}
function f4ah6o$mhx$network$$RequestTask$new(id, element_id, url, options, sync_strategy) {
  const controller = f4ah6o$mhx$ffi$$AbortController$new();
  const options_with_signal = f4ah6o$mhx$network$$RequestOptions$with_signal(options, f4ah6o$mhx$ffi$$AbortController$signal(controller));
  return { id: id, element_id: element_id, url: url, options: options_with_signal, controller: controller, sync_strategy: sync_strategy };
}
function f4ah6o$mhx$network$$RequestTask$cancel(self) {
  f4ah6o$mhx$ffi$$AbortController$abort(self.controller);
}
function f4ah6o$mhx$network$$RequestQueue$new() {
  return { current: undefined, pending: [] };
}
function f4ah6o$mhx$network$$RequestManager$new() {
  const _bind$3 = [];
  return { queues: moonbitlang$core$builtin$$Map$from_array$34$({ buf: _bind$3, start: 0, end: 0 }), next_id: 1 };
}
function f4ah6o$mhx$network$$RequestManager$get_queue(self, element_id) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$34$(self.queues, element_id);
  if (_bind$3 === undefined) {
    const queue = f4ah6o$mhx$network$$RequestQueue$new();
    moonbitlang$core$builtin$$Map$set$34$(self.queues, element_id, queue);
    return queue;
  } else {
    const _Some = _bind$3;
    return _Some;
  }
}
function f4ah6o$mhx$network$$RequestManager$schedule(self, element_id, url, options, strategy) {
  const task_id = self.next_id;
  self.next_id = self.next_id + 1 | 0;
  const queue = f4ah6o$mhx$network$$RequestManager$get_queue(self, element_id);
  const task = f4ah6o$mhx$network$$RequestTask$new(task_id, element_id, url, options, strategy);
  switch (strategy.$tag) {
    case 0: {
      const _p = queue.current;
      if (!(_p === undefined)) {
        return $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Dropped;
      } else {
        queue.current = task;
        return new $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Execute(task);
      }
    }
    case 1: {
      const _bind$3 = queue.current;
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _current = _Some;
        f4ah6o$mhx$network$$RequestTask$cancel(_current);
      }
      moonbitlang$core$array$$Array$clear$6$(queue.pending);
      queue.current = task;
      return new $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Execute(task);
    }
    default: {
      const _Queue = strategy;
      const _behavior = _Queue._0;
      const _p$2 = queue.current;
      if (!(_p$2 === undefined)) {
        switch (_behavior) {
          case 0: {
            moonbitlang$core$array$$Array$push$6$(queue.pending, task);
            return $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Queued;
          }
          case 1: {
            moonbitlang$core$array$$Array$clear$6$(queue.pending);
            moonbitlang$core$array$$Array$push$6$(queue.pending, task);
            return $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Queued;
          }
          default: {
            moonbitlang$core$array$$Array$push$6$(queue.pending, task);
            return $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Queued;
          }
        }
      } else {
        queue.current = task;
        return new $64$f4ah6o$47$mhx$47$network$46$ScheduleResult$Execute(task);
      }
    }
  }
}
function f4ah6o$mhx$network$$RequestManager$complete(self, element_id, _task_id) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$34$(self.queues, element_id);
  if (_bind$3 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$3;
    const _queue = _Some;
    _queue.current = undefined;
    const _p = _queue.pending;
    if (_p.length === 0) {
      return undefined;
    } else {
      const next = moonbitlang$core$array$$Array$remove$6$(_queue.pending, 0);
      _queue.current = next;
      return next;
    }
  }
}
function f4ah6o$mhx$network$$register_callbacks(on_success, on_error) {
  const id = f4ah6o$mhx$network$$callback_registry.next_id;
  f4ah6o$mhx$network$$callback_registry.next_id = f4ah6o$mhx$network$$callback_registry.next_id + 1 | 0;
  moonbitlang$core$builtin$$Map$set$4$(f4ah6o$mhx$network$$callback_registry.callbacks, id, { _0: on_success, _1: on_error });
  return id;
}
function f4ah6o$mhx$network$$on_fetch_success(callback_id, response_text) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$4$(f4ah6o$mhx$network$$callback_registry.callbacks, callback_id);
  if (_bind$3 === undefined) {
    f4ah6o$mhx$ffi$$console_error(`Unknown callback ID: ${moonbitlang$core$int$$Int$to_string$46$inner(callback_id, 10)}`);
    return;
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    const _success_cb = _x._0;
    const response = f4ah6o$mhx$network$$Response$from_text(response_text);
    const _func = _success_cb.on_success;
    _func(response);
    moonbitlang$core$builtin$$Map$remove$4$(f4ah6o$mhx$network$$callback_registry.callbacks, callback_id);
    return;
  }
}
function f4ah6o$mhx$network$$on_fetch_error(callback_id, error_message) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$4$(f4ah6o$mhx$network$$callback_registry.callbacks, callback_id);
  if (_bind$3 === undefined) {
    f4ah6o$mhx$ffi$$console_error(`Unknown callback ID: ${moonbitlang$core$int$$Int$to_string$46$inner(callback_id, 10)}`);
    return;
  } else {
    const _Some = _bind$3;
    const _x = _Some;
    const _error_cb = _x._1;
    const _func = _error_cb.on_error;
    _func(error_message);
    moonbitlang$core$builtin$$Map$remove$4$(f4ah6o$mhx$network$$callback_registry.callbacks, callback_id);
    return;
  }
}
function f4ah6o$mhx$network$$initiate_fetch_ffi(_tmp, _tmp$2, _tmp$3) {
  return mhx_ffi.initiate_fetch(_tmp, _tmp$2, _tmp$3);
}
function f4ah6o$mhx$network$$fetch_async(url, options, on_success, on_error) {
  const callback_id = f4ah6o$mhx$network$$register_callbacks({ on_success: on_success }, { on_error: on_error });
  if (callback_id < 0) {
    f4ah6o$mhx$network$$on_fetch_success(callback_id, "");
    f4ah6o$mhx$network$$on_fetch_error(callback_id, "");
  }
  const json_options = f4ah6o$mhx$network$$RequestOptions$to_json_string(options);
  f4ah6o$mhx$network$$initiate_fetch_ffi(url, json_options, callback_id);
  return callback_id;
}
function f4ah6o$mhx$swap$$perform_swap(target, content, options) {
  const _bind$3 = options.strategy;
  switch (_bind$3) {
    case 0: {
      f4ah6o$mhx$ffi$$Element$set_inner_html(target, content);
      return;
    }
    case 1: {
      f4ah6o$mhx$ffi$$Element$set_outer_html(target, content);
      return;
    }
    case 2: {
      f4ah6o$mhx$ffi$$Element$insert_adjacent_html(target, "beforebegin", content);
      return;
    }
    case 3: {
      f4ah6o$mhx$ffi$$Element$insert_adjacent_html(target, "afterbegin", content);
      return;
    }
    case 4: {
      f4ah6o$mhx$ffi$$Element$insert_adjacent_html(target, "beforeend", content);
      return;
    }
    case 5: {
      f4ah6o$mhx$ffi$$Element$insert_adjacent_html(target, "afterend", content);
      return;
    }
    case 6: {
      f4ah6o$mhx$ffi$$Element$remove(target);
      return;
    }
    default: {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Show$output$22$(_x_330, _x_331) {
  switch (_x_330.$tag) {
    case 13: {
      const _ParseError = _x_330;
      const _$42$arg_332 = _ParseError._0;
      _x_331.method_table.method_0(_x_331.self, "ParseError(");
      moonbitlang$core$builtin$$Logger$write_object$9$(_x_331, _$42$arg_332);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    case 12: {
      const _NetworkError = _x_330;
      const _$42$arg_333 = _NetworkError._0;
      const _$42$arg_334 = _NetworkError._1;
      _x_331.method_table.method_0(_x_331.self, "NetworkError(");
      _x_331.method_table.method_0(_x_331.self, "url=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_333);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "message=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_334);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    case 11: {
      const _TimeoutError = _x_330;
      const _$42$arg_335 = _TimeoutError._0;
      const _$42$arg_336 = _TimeoutError._1;
      _x_331.method_table.method_0(_x_331.self, "TimeoutError(");
      _x_331.method_table.method_0(_x_331.self, "url=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_335);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "timeout_ms=");
      moonbitlang$core$builtin$$Logger$write_object$11$(_x_331, _$42$arg_336);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    case 10: {
      const _AbortError = _x_330;
      const _$42$arg_337 = _AbortError._0;
      _x_331.method_table.method_0(_x_331.self, "AbortError(");
      _x_331.method_table.method_0(_x_331.self, "url=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_337);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    case 9: {
      const _DomError = _x_330;
      const _$42$arg_338 = _DomError._0;
      const _$42$arg_339 = _DomError._1;
      const _$42$arg_340 = _DomError._2;
      _x_331.method_table.method_0(_x_331.self, "DomError(");
      _x_331.method_table.method_0(_x_331.self, "element=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_338);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "operation=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_339);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "message=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_340);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    case 8: {
      const _ConfigError = _x_330;
      const _$42$arg_341 = _ConfigError._0;
      const _$42$arg_342 = _ConfigError._1;
      _x_331.method_table.method_0(_x_331.self, "ConfigError(");
      _x_331.method_table.method_0(_x_331.self, "attribute=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_341);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "message=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_342);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
    default: {
      const _SwapError = _x_330;
      const _$42$arg_343 = _SwapError._0;
      const _$42$arg_344 = _SwapError._1;
      const _$42$arg_345 = _SwapError._2;
      _x_331.method_table.method_0(_x_331.self, "SwapError(");
      _x_331.method_table.method_0(_x_331.self, "target=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_343);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "strategy=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_344);
      _x_331.method_table.method_0(_x_331.self, ", ");
      _x_331.method_table.method_0(_x_331.self, "message=");
      moonbitlang$core$builtin$$Logger$write_object$10$(_x_331, _$42$arg_345);
      _x_331.method_table.method_0(_x_331.self, ")");
      return;
    }
  }
}
function f4ah6o$mhx$core$$find_child_index(parent, child) {
  const count = f4ah6o$mhx$ffi$$Element$child_count(parent);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < count) {
      const candidate = f4ah6o$mhx$ffi$$Element$child_at(parent, i);
      if (f4ah6o$mhx$ffi$$Element$same(candidate, child)) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function f4ah6o$mhx$core$$find_adjacent_sibling(element, selector, forward) {
  let parent;
  if (f4ah6o$mhx$ffi$$Element$has_parent(element)) {
    parent = f4ah6o$mhx$ffi$$Element$parent_element_ffi(element);
  } else {
    return element;
  }
  if (f4ah6o$mhx$ffi$$Element$is_null(parent)) {
    return element;
  }
  const count = f4ah6o$mhx$ffi$$Element$child_count(parent);
  if (count <= 0) {
    return element;
  }
  let index = f4ah6o$mhx$core$$find_child_index(parent, element);
  if (index < 0) {
    return element;
  }
  if (forward) {
    index = index + 1 | 0;
    while (true) {
      if (index < count) {
        const candidate = f4ah6o$mhx$ffi$$Element$child_at(parent, index);
        if (!f4ah6o$mhx$ffi$$Element$is_null(candidate) && f4ah6o$mhx$ffi$$Element$matches(candidate, selector)) {
          return candidate;
        }
        index = index + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    index = index - 1 | 0;
    while (true) {
      if (index >= 0) {
        const candidate = f4ah6o$mhx$ffi$$Element$child_at(parent, index);
        if (!f4ah6o$mhx$ffi$$Element$is_null(candidate) && f4ah6o$mhx$ffi$$Element$matches(candidate, selector)) {
          return candidate;
        }
        index = index - 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return element;
}
function f4ah6o$mhx$core$$resolve_selector(element, selector) {
  switch (selector.$tag) {
    case 0: {
      return element;
    }
    case 1: {
      return f4ah6o$mhx$ffi$$Document$body_ffi(f4ah6o$mhx$ffi$$document());
    }
    case 3: {
      return f4ah6o$mhx$ffi$$Document$document_element_ffi(f4ah6o$mhx$ffi$$document());
    }
    case 2: {
      return element;
    }
    case 4: {
      const _Closest = selector;
      const _sel = _Closest._0;
      return f4ah6o$mhx$ffi$$Element$closest_exists(element, _sel) ? f4ah6o$mhx$ffi$$Element$closest_ffi(element, _sel) : element;
    }
    case 5: {
      const _Find = selector;
      const _sel$2 = _Find._0;
      return f4ah6o$mhx$ffi$$Element$query_selector_exists(element, _sel$2) ? f4ah6o$mhx$ffi$$Element$query_selector_ffi(element, _sel$2) : element;
    }
    case 6: {
      const _Next = selector;
      const _sel$3 = _Next._0;
      return f4ah6o$mhx$core$$find_adjacent_sibling(element, _sel$3, true);
    }
    case 7: {
      const _Previous = selector;
      const _sel$4 = _Previous._0;
      return f4ah6o$mhx$core$$find_adjacent_sibling(element, _sel$4, false);
    }
    default: {
      const _Css = selector;
      const _sel$5 = _Css._0;
      const doc = f4ah6o$mhx$ffi$$document();
      return f4ah6o$mhx$ffi$$Document$query_selector_exists(doc, _sel$5) ? f4ah6o$mhx$ffi$$Document$query_selector_ffi(doc, _sel$5) : element;
    }
  }
}
function f4ah6o$mhx$core$$resolve_swap_target(element, config) {
  const _bind$3 = config.target;
  if (_bind$3 === undefined) {
    return element;
  } else {
    const _Some = _bind$3;
    const _selector = _Some;
    if (_selector === "this") {
      return element;
    } else {
      if (moonbitlang$core$string$$String$has_prefix(_selector, { str: f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$413, start: 0, end: f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$413.length })) {
        const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(_selector, 8, undefined));
        return f4ah6o$mhx$ffi$$Element$closest_exists(element, sel) ? f4ah6o$mhx$ffi$$Element$closest_ffi(element, sel) : element;
      } else {
        if (moonbitlang$core$string$$String$has_prefix(_selector, { str: f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$414, start: 0, end: f4ah6o$mhx$core$$resolve_swap_target$46$42$bind$124$414.length })) {
          const sel = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(_selector, 5, undefined));
          return f4ah6o$mhx$ffi$$Element$query_selector_exists(element, sel) ? f4ah6o$mhx$ffi$$Element$query_selector_ffi(element, sel) : element;
        } else {
          const doc = f4ah6o$mhx$ffi$$document();
          return f4ah6o$mhx$ffi$$Document$query_selector_exists(doc, _selector) ? f4ah6o$mhx$ffi$$Document$query_selector_ffi(doc, _selector) : element;
        }
      }
    }
  }
}
function f4ah6o$mhx$core$$resolve_swap_target_from_trigger(element, trigger, config) {
  const _bind$3 = f4ah6o$mhx$45$spec$trigger$$TriggerDef$get_target(trigger);
  if (_bind$3 === undefined) {
    return f4ah6o$mhx$core$$resolve_swap_target(element, config);
  } else {
    const _Some = _bind$3;
    const _sel = _Some;
    return f4ah6o$mhx$core$$resolve_selector(element, _sel);
  }
}
function f4ah6o$mhx$core$$collect_form_data(form) {
  const form_data = f4ah6o$mhx$ffi$$JsFormData$from_element(form);
  return f4ah6o$mhx$ffi$$JsFormData$to_url_encoded(form_data);
}
function f4ah6o$mhx$core$$encode_url_component(value) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _it = moonbitlang$core$string$$String$iter(value);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(_it);
    if (_bind$3 === -1) {
      break;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      switch (_c) {
        case 32: {
          moonbitlang$core$builtin$$Logger$write_char$0$(sb, 43);
          break;
        }
        case 37: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%25");
          break;
        }
        case 38: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%26");
          break;
        }
        case 61: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%3D");
          break;
        }
        case 43: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%2B");
          break;
        }
        case 10: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%0A");
          break;
        }
        case 13: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "%0D");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$0$(sb, _c);
        }
      }
      continue;
    }
  }
  return sb.val;
}
function f4ah6o$mhx$core$$encode_form_pairs(pairs) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let first = true;
  const _len = pairs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const pair = pairs[_i];
      const _key = pair._0;
      const _value = pair._1;
      if (!first) {
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, 38);
      }
      first = false;
      moonbitlang$core$builtin$$Logger$write_string$0$(sb, f4ah6o$mhx$core$$encode_url_component(_key));
      moonbitlang$core$builtin$$Logger$write_char$0$(sb, 61);
      moonbitlang$core$builtin$$Logger$write_string$0$(sb, f4ah6o$mhx$core$$encode_url_component(_value));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function f4ah6o$mhx$core$$char_from_byte(b) {
  const code = b;
  const _bind$3 = moonbitlang$core$int$$Int$to_char(code);
  return _bind$3 === -1 ? 0 : _bind$3;
}
function f4ah6o$mhx$core$$hex_digit_value(c) {
  return c >= 48 && c <= 57 ? c - 48 | 0 : c >= 97 && c <= 102 ? (c - 97 | 0) + 10 | 0 : c >= 65 && c <= 70 ? (c - 65 | 0) + 10 | 0 : undefined;
}
function f4ah6o$mhx$core$$parse_hex_byte(hex) {
  if (hex.length !== 2) {
    return -1;
  }
  const _bind$3 = moonbitlang$core$string$$String$get_char(hex, 0);
  let hi;
  if (_bind$3 === -1) {
    hi = undefined;
  } else {
    const _Some = _bind$3;
    const _ch = _Some;
    hi = f4ah6o$mhx$core$$hex_digit_value(_ch);
  }
  const _bind$4 = moonbitlang$core$string$$String$get_char(hex, 1);
  let lo;
  if (_bind$4 === -1) {
    lo = undefined;
  } else {
    const _Some = _bind$4;
    const _ch = _Some;
    lo = f4ah6o$mhx$core$$hex_digit_value(_ch);
  }
  _L: {
    if (hi === undefined) {
      break _L;
    } else {
      const _Some = hi;
      const _h = _Some;
      if (lo === undefined) {
        break _L;
      } else {
        const _Some$2 = lo;
        const _l = _Some$2;
        return ((Math.imul(_h, 16) | 0) + _l | 0) & 255;
      }
    }
  }
  return -1;
}
function f4ah6o$mhx$core$$decode_url_component(value) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let i = 0;
  while (true) {
    if (i < value.length) {
      const _bind$3 = moonbitlang$core$string$$String$get_char(value, i);
      let c;
      if (_bind$3 === -1) {
        i = i + 1 | 0;
        continue;
      } else {
        c = _bind$3;
      }
      if (c === 43) {
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, 32);
        i = i + 1 | 0;
      } else {
        if (c === 37 && (i + 2 | 0) < value.length) {
          const hex = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(value, i + 1 | 0, i + 3 | 0));
          const _bind$4 = f4ah6o$mhx$core$$parse_hex_byte(hex);
          if (_bind$4 === -1) {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, c);
            i = i + 1 | 0;
          } else {
            const _Some = _bind$4;
            const _b = _Some;
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, f4ah6o$mhx$core$$char_from_byte(_b));
            i = i + 3 | 0;
          }
        } else {
          moonbitlang$core$builtin$$Logger$write_char$0$(sb, c);
          i = i + 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function f4ah6o$mhx$core$$parse_form_encoded(body) {
  const pairs = [];
  if (body === "") {
    return pairs;
  }
  const _it = moonbitlang$core$string$$String$split(body, { str: f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$492, start: 0, end: f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$492.length });
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$5$(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _part = _Some;
      if (moonbitlang$core$string$$StringView$is_empty(_part)) {
        continue;
      }
      const _bind$4 = moonbitlang$core$string$$StringView$find(_part, { str: f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$481, start: 0, end: f4ah6o$mhx$core$$parse_form_encoded$46$42$bind$124$481.length });
      if (_bind$4 === undefined) {
        moonbitlang$core$array$$Array$push$27$(pairs, { _0: f4ah6o$mhx$core$$decode_url_component(moonbitlang$core$builtin$$Show$to_string$5$(_part)), _1: "" });
      } else {
        const _Some$2 = _bind$4;
        const _idx = _Some$2;
        const key = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$StringView$view$46$inner(_part, 0, _idx));
        const value = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$StringView$view$46$inner(_part, _idx + 1 | 0, undefined));
        moonbitlang$core$array$$Array$push$27$(pairs, { _0: f4ah6o$mhx$core$$decode_url_component(key), _1: f4ah6o$mhx$core$$decode_url_component(value) });
      }
      continue;
    }
  }
  return pairs;
}
function f4ah6o$mhx$core$$unescape_json_string(value) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  let i = 0;
  while (true) {
    if (i < value.length) {
      const _bind$3 = moonbitlang$core$string$$String$get_char(value, i);
      let c;
      if (_bind$3 === -1) {
        i = i + 1 | 0;
        continue;
      } else {
        c = _bind$3;
      }
      if (c === 92 && (i + 1 | 0) < value.length) {
        const _bind$4 = moonbitlang$core$string$$String$get_char(value, i + 1 | 0);
        let next;
        if (_bind$4 === -1) {
          i = i + 1 | 0;
          continue;
        } else {
          next = _bind$4;
        }
        switch (next) {
          case 34: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, 34);
            break;
          }
          case 92: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, 92);
            break;
          }
          case 110: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, 10);
            break;
          }
          case 114: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, 13);
            break;
          }
          case 116: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, 9);
            break;
          }
          default: {
            moonbitlang$core$builtin$$Logger$write_char$0$(sb, next);
          }
        }
        i = i + 2 | 0;
      } else {
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, c);
        i = i + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return sb.val;
}
function f4ah6o$mhx$core$$parse_json_string(raw) {
  const t = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(raw, undefined));
  let _tmp;
  if (t.length < 2) {
    _tmp = true;
  } else {
    let _tmp$2;
    $bound_check(t, 0);
    const _p = t.charCodeAt(0);
    const _p$2 = 34;
    if (_p !== _p$2) {
      _tmp$2 = true;
    } else {
      const _tmp$3 = t.length - 1 | 0;
      $bound_check(t, _tmp$3);
      const _p$3 = t.charCodeAt(_tmp$3);
      const _p$4 = 34;
      _tmp$2 = _p$3 !== _p$4;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return undefined;
  } else {
    const inner = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(t, 1, t.length - 1 | 0));
    return f4ah6o$mhx$core$$unescape_json_string(inner);
  }
}
function f4ah6o$mhx$core$$parse_json_value(raw) {
  const t = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(raw, undefined));
  if (moonbitlang$core$string$$String$has_prefix(t, { str: f4ah6o$mhx$core$$parse_json_value$46$42$bind$124$510, start: 0, end: f4ah6o$mhx$core$$parse_json_value$46$42$bind$124$510.length })) {
    return f4ah6o$mhx$core$$parse_json_string(t);
  } else {
    t === "true" || (t === "false" || t === "null");
    return t;
  }
}
function f4ah6o$mhx$core$$default_error_handler(error) {
  f4ah6o$mhx$ffi$$console_error(`mhx error: ${moonbitlang$core$builtin$$Show$to_string$21$(error)}`);
}
function f4ah6o$mhx$core$$report_error(error) {
  const _func = f4ah6o$mhx$core$$global_error_state.handler;
  _func(error);
}
function f4ah6o$mhx$core$$split_json_pairs(input) {
  const parts = [];
  let depth = 0;
  let in_string = false;
  let escape = false;
  let start = 0;
  const len = input.length;
  let i = 0;
  while (true) {
    if (i < len) {
      const _bind$3 = moonbitlang$core$string$$String$get_char(input, i);
      let c;
      if (_bind$3 === -1) {
        i = i + 1 | 0;
        continue;
      } else {
        c = _bind$3;
      }
      if (escape) {
        escape = false;
      } else {
        if (c === 92 && in_string) {
          escape = true;
        } else {
          if (c === 34) {
            in_string = !in_string;
          } else {
            if (!in_string) {
              if (c === 123 || c === 91) {
                depth = depth + 1 | 0;
              } else {
                if (c === 125 || c === 93) {
                  depth = depth - 1 | 0;
                } else {
                  if (c === 44 && depth === 0) {
                    moonbitlang$core$array$$Array$push$10$(parts, moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(input, start, i)));
                    start = i + 1 | 0;
                  }
                }
              }
            }
          }
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (start < len) {
    moonbitlang$core$array$$Array$push$10$(parts, moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(input, start, undefined)));
  }
  const _p = new Array(parts.length);
  const _p$2 = parts.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = parts[_p$3];
      _p[_p$3] = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(_p$4, undefined));
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _p;
}
function f4ah6o$mhx$core$$parse_mx_vals_pairs(mx_vals_json) {
  const pairs = [];
  const trimmed = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(mx_vals_json, undefined));
  if (trimmed === "") {
    return pairs;
  }
  if (!(moonbitlang$core$string$$String$has_prefix(trimmed, { str: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$518, start: 0, end: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$518.length }) && moonbitlang$core$string$$String$has_suffix(trimmed, { str: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$519, start: 0, end: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$519.length }))) {
    const _p = "mx-vals";
    const _p$2 = "expected JSON object";
    f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ConfigError(_p, _p$2));
    return pairs;
  }
  const inner = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(trimmed, 1, trimmed.length - 1 | 0));
  if (moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim(inner, undefined))) {
    return pairs;
  }
  const _arr = f4ah6o$mhx$core$$split_json_pairs(inner);
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const part = _arr[_i];
      const _bind$3 = moonbitlang$core$string$$String$find(part, { str: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$532, start: 0, end: f4ah6o$mhx$core$$parse_mx_vals_pairs$46$42$bind$124$532.length });
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _idx = _Some;
        const raw_key = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(part, 0, _idx)), undefined));
        const raw_val = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$view$46$inner(part, _idx + 1 | 0, undefined)), undefined));
        const _bind$4 = f4ah6o$mhx$core$$parse_json_string(raw_key);
        let key;
        if (_bind$4 === undefined) {
          const _p = "mx-vals";
          const _p$2 = "invalid key";
          f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ConfigError(_p, _p$2));
          key = "";
        } else {
          const _Some$2 = _bind$4;
          key = _Some$2;
        }
        const _p = "";
        if (!(key === _p)) {
          const _bind$5 = f4ah6o$mhx$core$$parse_json_value(raw_val);
          if (_bind$5 === undefined) {
          } else {
            const _Some$2 = _bind$5;
            const _value = _Some$2;
            moonbitlang$core$array$$Array$push$27$(pairs, { _0: key, _1: _value });
          }
        }
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return pairs;
}
function f4ah6o$mhx$core$$build_request_body(element, config) {
  const form_values = f4ah6o$mhx$ffi$$Element$tag_name(element) === "FORM" ? f4ah6o$mhx$core$$collect_form_data(element) : f4ah6o$mhx$ffi$$Element$closest_exists(element, "form") ? f4ah6o$mhx$core$$collect_form_data(f4ah6o$mhx$ffi$$Element$closest_ffi(element, "form")) : "";
  const _bind$3 = config.vals;
  let mx_vals_json;
  if (_bind$3 === undefined) {
    mx_vals_json = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-vals") ? f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-vals") : "";
  } else {
    const _Some = _bind$3;
    mx_vals_json = _Some;
  }
  if (moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim(mx_vals_json, undefined))) {
    return form_values;
  }
  const json_pairs = f4ah6o$mhx$core$$parse_mx_vals_pairs(mx_vals_json);
  const pairs = [];
  if (!(form_values === "")) {
    const _arr = f4ah6o$mhx$core$$parse_form_encoded(form_values);
    const _len = _arr.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const item = _arr[_i];
        moonbitlang$core$array$$Array$push$27$(pairs, item);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _len = json_pairs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const item = json_pairs[_i];
      moonbitlang$core$array$$Array$push$27$(pairs, item);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return pairs.length === 0 ? "" : f4ah6o$mhx$core$$encode_form_pairs(pairs);
}
function f4ah6o$mhx$core$$escape_json_string(value) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _it = moonbitlang$core$string$$String$iter(value);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(_it);
    if (_bind$3 === -1) {
      break;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      switch (_c) {
        case 34: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\\\"");
          break;
        }
        case 92: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\\\\");
          break;
        }
        case 10: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\\n");
          break;
        }
        case 13: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\\r");
          break;
        }
        case 9: {
          moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\\t");
          break;
        }
        default: {
          moonbitlang$core$builtin$$Logger$write_char$0$(sb, _c);
        }
      }
      continue;
    }
  }
  return sb.val;
}
function f4ah6o$mhx$core$$is_number_literal(value) {
  if (value === "") {
    return false;
  }
  let dot_seen = false;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < value.length) {
      _L: {
        const _bind$3 = moonbitlang$core$string$$String$get_char(value, i);
        let c;
        if (_bind$3 === -1) {
          break _L;
        } else {
          c = _bind$3;
        }
        if (c === 46) {
          if (dot_seen) {
            return false;
          }
          dot_seen = true;
        } else {
          if (!(c >= 48 && c <= 57)) {
            if (i === 0 && (c === 45 || c === 43)) {
              break _L;
            }
            return false;
          }
        }
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function f4ah6o$mhx$core$$json_object_string(values) {
  const sb = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Logger$write_char$0$(sb, 123);
  let first = true;
  const _it = moonbitlang$core$builtin$$Map$iter$38$(values);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$27$(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _pair = _Some;
      const _key = _pair._0;
      const _value = _pair._1;
      if (!first) {
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, 44);
      }
      first = false;
      moonbitlang$core$builtin$$Logger$write_char$0$(sb, 34);
      moonbitlang$core$builtin$$Logger$write_string$0$(sb, f4ah6o$mhx$core$$escape_json_string(_key));
      moonbitlang$core$builtin$$Logger$write_string$0$(sb, "\":");
      if (_value === "true" || (_value === "false" || (_value === "null" || f4ah6o$mhx$core$$is_number_literal(_value)))) {
        moonbitlang$core$builtin$$Logger$write_string$0$(sb, _value);
      } else {
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, 34);
        moonbitlang$core$builtin$$Logger$write_string$0$(sb, f4ah6o$mhx$core$$escape_json_string(_value));
        moonbitlang$core$builtin$$Logger$write_char$0$(sb, 34);
      }
      continue;
    }
  }
  moonbitlang$core$builtin$$Logger$write_char$0$(sb, 125);
  return sb.val;
}
function f4ah6o$mhx$core$$merge_vals_json(base_json, mx_vals_json) {
  const base_pairs = f4ah6o$mhx$core$$parse_mx_vals_pairs(base_json);
  const _bind$3 = [];
  const result = moonbitlang$core$builtin$$Map$from_array$38$({ buf: _bind$3, start: 0, end: 0 });
  const _len = base_pairs.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const pair = base_pairs[_i];
      const _k = pair._0;
      const _v = pair._1;
      moonbitlang$core$builtin$$Map$set$38$(result, _k, _v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _arr = f4ah6o$mhx$core$$parse_mx_vals_pairs(mx_vals_json);
  const _len$2 = _arr.length;
  let _tmp$2 = 0;
  while (true) {
    const _i = _tmp$2;
    if (_i < _len$2) {
      const pair = _arr[_i];
      const _k = pair._0;
      const _v = pair._1;
      moonbitlang$core$builtin$$Map$set$38$(result, _k, _v);
      _tmp$2 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result.size === 0 ? "{}" : f4ah6o$mhx$core$$json_object_string(result);
}
function f4ah6o$mhx$core$$Mhx$new() {
  const delegator = f4ah6o$mhx$event$$EventDelegator$new();
  f4ah6o$mhx$event$$EventDelegator$register_defaults(delegator);
  const _tmp = f4ah6o$mhx$network$$RequestManager$new();
  const _tmp$2 = f4ah6o$mhx$event$$ConfigCache$new();
  const _tmp$3 = f4ah6o$mhx$event$$TimingManager$new();
  const _bind$3 = [];
  const _tmp$4 = moonbitlang$core$builtin$$Map$from_array$31$({ buf: _bind$3, start: 0, end: 0 });
  return { delegator: delegator, request_manager: _tmp, cache: _tmp$2, timing: _tmp$3, changed_values: _tmp$4, initialized: false, observer: Option$None$15$, observer_callback_id: 0 };
}
function f4ah6o$mhx$core$$on_mutation_observed(callback_id) {
  const _bind$3 = moonbitlang$core$builtin$$Map$get$3$(f4ah6o$mhx$core$$mutation_registry.callbacks, callback_id);
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _cb = _Some;
    _cb();
    return;
  }
}
function f4ah6o$mhx$core$$hash_element(element) {
  const id = f4ah6o$mhx$ffi$$Element$id(element);
  const tag = f4ah6o$mhx$ffi$$Element$tag_name(element);
  const combined = `${tag}#${id}`;
  let hash = 0;
  const _it = moonbitlang$core$string$$String$iter(combined);
  while (true) {
    const _bind$3 = moonbitlang$core$builtin$$Iter$next$13$(_it);
    if (_bind$3 === -1) {
      break;
    } else {
      const _Some = _bind$3;
      const _c = _Some;
      hash = (Math.imul(hash, 31) | 0) + _c | 0;
      continue;
    }
  }
  return hash;
}
function f4ah6o$mhx$core$$build_request_options(element, config) {
  const _bind$3 = config.http_method;
  let http_method_str;
  switch (_bind$3) {
    case 0: {
      http_method_str = "GET";
      break;
    }
    case 1: {
      http_method_str = "POST";
      break;
    }
    case 2: {
      http_method_str = "PUT";
      break;
    }
    case 3: {
      http_method_str = "PATCH";
      break;
    }
    default: {
      http_method_str = "DELETE";
    }
  }
  let options = { http_method: http_method_str, headers: moonbitlang$core$builtin$$Map$from_array$38$({ buf: f4ah6o$mhx$core$$build_request_options$46$42$bind$47$2439, start: 0, end: 1 }), body: undefined, signal: Option$None$14$ };
  _L: {
    _L$2: {
      const _bind$4 = config.http_method;
      switch (_bind$4) {
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        default: {
          const _bind$5 = config.vals;
          let mx_vals_json;
          if (_bind$5 === undefined) {
            mx_vals_json = f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-vals") ? f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-vals") : "";
          } else {
            const _Some = _bind$5;
            mx_vals_json = _Some;
          }
          if (!moonbitlang$core$string$$StringView$is_empty(moonbitlang$core$string$$String$trim(mx_vals_json, undefined))) {
            const merged_json = f4ah6o$mhx$core$$merge_vals_json("{}", mx_vals_json);
            options = f4ah6o$mhx$network$$RequestOptions$with_header(options, "HX-Trigger-Values", merged_json);
          }
        }
      }
      break _L;
    }
    const body_data = f4ah6o$mhx$core$$build_request_body(element, config);
    if (!(body_data === "")) {
      const _bind$4 = options;
      options = { http_method: _bind$4.http_method, headers: _bind$4.headers, body: body_data, signal: _bind$4.signal };
      options = f4ah6o$mhx$network$$RequestOptions$with_header(options, "Content-Type", "application/x-www-form-urlencoded");
    }
  }
  if (f4ah6o$mhx$ffi$$Element$has_attribute(element, "id")) {
    options = f4ah6o$mhx$network$$RequestOptions$with_header(options, "HX-Trigger", f4ah6o$mhx$ffi$$Element$id(element));
  }
  return options;
}
function f4ah6o$mhx$core$$build_request_url(element, config) {
  const url = config.url;
  const _bind$3 = config.http_method;
  if (_bind$3 === 0) {
    const query = f4ah6o$mhx$core$$build_request_body(element, config);
    return query === "" ? url : moonbitlang$core$string$$String$contains(url, { str: f4ah6o$mhx$core$$build_request_url$46$42$bind$124$625, start: 0, end: f4ah6o$mhx$core$$build_request_url$46$42$bind$124$625.length }) ? `${url}&${query}` : `${url}?${query}`;
  } else {
    return url;
  }
}
function f4ah6o$mhx$core$$get_sync_strategy(element, config) {
  const _bind$3 = config.sync;
  if (_bind$3 === undefined) {
    return f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-sync") ? f4ah6o$mhx$45$spec$sync$$parse_sync_strategy(f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-sync")) : $64$f4ah6o$47$mhx$45$spec$47$sync$46$SyncStrategy$Drop;
  } else {
    const _Some = _bind$3;
    return _Some;
  }
}
function f4ah6o$mhx$core$$maybe_push_url(element, url) {
  if (!f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-push-url")) {
    return undefined;
  }
  const raw = moonbitlang$core$builtin$$Show$to_string$5$(moonbitlang$core$string$$String$trim(f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-push-url"), undefined));
  if (raw === "false") {
    return undefined;
  }
  const push_url = raw === "" || raw === "true" ? url : raw;
  const win = f4ah6o$mhx$ffi$$window();
  f4ah6o$mhx$ffi$$Window$history_push_state(win, push_url, "");
}
function f4ah6o$mhx$core$$get_swap_options(element, config) {
  return f4ah6o$mhx$ffi$$Element$has_attribute(element, "mx-swap") ? f4ah6o$mhx$45$spec$swap$$SwapOptions$parse(f4ah6o$mhx$ffi$$Element$get_attribute(element, "mx-swap")) : f4ah6o$mhx$45$spec$swap$$SwapOptions$with_strategy(config.swap);
}
function f4ah6o$mhx$core$$Mhx$process_element(self, element) {
  const element_hash = f4ah6o$mhx$core$$hash_element(element);
  const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(self.cache, element_hash);
  if (f4ah6o$mhx$event$$ConfigCache$has(self.cache, element_id)) {
    return undefined;
  }
  let config;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$3 = f4ah6o$mhx$event$$parse_element_config(element);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        config = _ok._0;
      } else {
        const _err = _bind$3;
        const _tmp = _err._0;
        _try_err = _tmp;
        break _L$2;
      }
      break _L;
    }
    f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ParseError(_try_err));
    return undefined;
  }
  f4ah6o$mhx$event$$ConfigCache$set(self.cache, element_id, config);
}
function f4ah6o$mhx$core$$Mhx$process_tree(self, root) {
  if (f4ah6o$mhx$event$$has_mhx_attributes(root)) {
    f4ah6o$mhx$core$$Mhx$process_element(self, root);
  }
  const child_count = f4ah6o$mhx$ffi$$Element$child_count(root);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < child_count) {
      const child = f4ah6o$mhx$ffi$$Element$child_at(root, i);
      if (!f4ah6o$mhx$ffi$$Element$is_null(child)) {
        f4ah6o$mhx$core$$Mhx$process_tree(self, child);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function f4ah6o$mhx$core$$Mhx$execute_request(self, element, task, config, trigger) {
  f4ah6o$mhx$network$$fetch_async(task.url, task.options, (response) => {
    f4ah6o$mhx$core$$Mhx$handle_response(self, element, task, config, trigger, response);
  }, (error_message) => {
    f4ah6o$mhx$ffi$$Element$remove_class(element, "mx-request");
    const _p = task.url;
    f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$NetworkError(_p, error_message));
    f4ah6o$mhx$core$$Mhx$finish_request(self, element, task, config, trigger);
  });
}
function f4ah6o$mhx$core$$Mhx$finish_request(self, element, task, config, trigger) {
  const element_hash = f4ah6o$mhx$core$$hash_element(element);
  const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(self.cache, element_hash);
  const next = f4ah6o$mhx$network$$RequestManager$complete(self.request_manager, element_id, task.id);
  if (next === undefined) {
    return;
  } else {
    const _Some = next;
    const _next_task = _Some;
    f4ah6o$mhx$core$$Mhx$execute_request(self, element, _next_task, config, trigger);
    return;
  }
}
function f4ah6o$mhx$core$$Mhx$handle_response(self, element, task, config, trigger, response) {
  f4ah6o$mhx$ffi$$Element$remove_class(element, "mx-request");
  if (f4ah6o$mhx$network$$Response$ok(response)) {
    const swap_target = f4ah6o$mhx$core$$resolve_swap_target_from_trigger(element, trigger, config);
    const swap_options = f4ah6o$mhx$core$$get_swap_options(element, config);
    f4ah6o$mhx$swap$$perform_swap(swap_target, response.body, swap_options);
    f4ah6o$mhx$core$$Mhx$process_tree(self, swap_target);
  } else {
    const message = `${moonbitlang$core$int$$Int$to_string$46$inner(f4ah6o$mhx$network$$Response$status(response), 10)} ${f4ah6o$mhx$network$$Response$status_text(response)}`;
    const _p = task.url;
    f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$NetworkError(_p, message));
  }
  f4ah6o$mhx$core$$Mhx$finish_request(self, element, task, config, trigger);
}
function f4ah6o$mhx$core$$Mhx$execute_action(self, element, config, trigger, event) {
  if (f4ah6o$mhx$45$spec$trigger$$TriggerDef$should_prevent(trigger)) {
    f4ah6o$mhx$ffi$$Event$prevent_default(event);
  }
  const url = f4ah6o$mhx$core$$build_request_url(element, config);
  if (url === "") {
    return undefined;
  }
  const options = f4ah6o$mhx$core$$build_request_options(element, config);
  const sync_strategy = f4ah6o$mhx$core$$get_sync_strategy(element, config);
  const element_hash = f4ah6o$mhx$core$$hash_element(element);
  const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(self.cache, element_hash);
  const result = f4ah6o$mhx$network$$RequestManager$schedule(self.request_manager, element_id, url, options, sync_strategy);
  switch (result.$tag) {
    case 0: {
      const _Execute = result;
      const _task = _Execute._0;
      f4ah6o$mhx$ffi$$Element$add_class(element, "mx-request");
      f4ah6o$mhx$core$$maybe_push_url(element, url);
      f4ah6o$mhx$core$$Mhx$execute_request(self, element, _task, config, trigger);
      return;
    }
    case 1: {
      return;
    }
    default: {
      return;
    }
  }
}
function f4ah6o$mhx$core$$Mhx$is_value_changed(self, element, trigger_index) {
  const element_hash = f4ah6o$mhx$core$$hash_element(element);
  const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(self.cache, element_hash);
  const key = (Math.imul(element_id, 100000) | 0) + trigger_index | 0;
  const current = f4ah6o$mhx$ffi$$Element$value(element);
  const _bind$3 = moonbitlang$core$builtin$$Map$get$31$(self.changed_values, key);
  if (_bind$3 === undefined) {
    moonbitlang$core$builtin$$Map$set$31$(self.changed_values, key, current);
    return true;
  } else {
    const _Some = _bind$3;
    const _prev = _Some;
    if (_prev === current) {
      return false;
    } else {
      moonbitlang$core$builtin$$Map$set$31$(self.changed_values, key, current);
      return true;
    }
  }
}
function f4ah6o$mhx$core$$Mhx$handle_event(self, event, target) {
  const _p = self.delegator;
  if (!_p.active) {
    return undefined;
  }
  const event_type = f4ah6o$mhx$ffi$$Event$type_(event);
  const current = { val: target };
  while (true) {
    if (!f4ah6o$mhx$ffi$$Element$is_null(current.val)) {
      if (f4ah6o$mhx$event$$has_mhx_attributes(current.val)) {
        const element_hash = f4ah6o$mhx$core$$hash_element(current.val);
        const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(self.cache, element_hash);
        const _bind$3 = f4ah6o$mhx$event$$ConfigCache$get(self.cache, element_id);
        let config;
        if (_bind$3 === undefined) {
          let parsed;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$4 = f4ah6o$mhx$event$$parse_element_config(current.val);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                parsed = _ok._0;
              } else {
                const _err = _bind$4;
                const _tmp = _err._0;
                _try_err = _tmp;
                break _L$2;
              }
              break _L;
            }
            f4ah6o$mhx$core$$report_error(new Error$f4ah6o$47$mhx$47$core$46$MhxError$46$ParseError(_try_err));
            parsed = undefined;
          }
          if (parsed === undefined) {
            config = undefined;
          } else {
            const _Some = parsed;
            const _c = _Some;
            f4ah6o$mhx$event$$ConfigCache$set(self.cache, element_id, _c);
            config = _c;
          }
        } else {
          const _Some = _bind$3;
          const _c = _Some;
          config = _c;
        }
        if (config === undefined) {
        } else {
          const _Some = config;
          const _cfg = _Some;
          const _arr = _cfg.triggers;
          const _len = _arr.length;
          let _tmp = 0;
          while (true) {
            const _i = _tmp;
            if (_i < _len) {
              _L: {
                const trigger = _arr[_i];
                if (trigger.event_name === event_type) {
                  if (f4ah6o$mhx$event$$check_filter_conditions(trigger, event)) {
                    if (f4ah6o$mhx$45$spec$trigger$$TriggerDef$is_changed(trigger) && !f4ah6o$mhx$core$$Mhx$is_value_changed(self, current.val, _i)) {
                      break _L;
                    }
                    const timing_state = f4ah6o$mhx$event$$TimingManager$get_state(self.timing, element_id, _i);
                    const execute_now = f4ah6o$mhx$event$$apply_timing_modifiers(timing_state, trigger, () => {
                      f4ah6o$mhx$core$$Mhx$execute_action(self, current.val, _cfg, trigger, event);
                    });
                    if (execute_now) {
                      f4ah6o$mhx$core$$Mhx$execute_action(self, current.val, _cfg, trigger, event);
                    }
                    if (f4ah6o$mhx$45$spec$trigger$$TriggerDef$is_once(trigger)) {
                      f4ah6o$mhx$event$$ConfigCache$remove(self.cache, element_id);
                    }
                    if (f4ah6o$mhx$45$spec$trigger$$TriggerDef$should_consume(trigger)) {
                      f4ah6o$mhx$ffi$$Event$stop_propagation(event);
                      break;
                    }
                  }
                }
                break _L;
              }
              _tmp = _i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
      }
      if (!f4ah6o$mhx$ffi$$Element$has_parent(current.val)) {
        break;
      }
      current.val = f4ah6o$mhx$ffi$$Element$parent_element_ffi(current.val);
      if (f4ah6o$mhx$ffi$$Event$cancel_bubble(event)) {
        break;
      }
      continue;
    } else {
      return;
    }
  }
}
function f4ah6o$mhx$core$$handle_event(event, target) {
  f4ah6o$mhx$core$$Mhx$handle_event(f4ah6o$mhx$core$$global_mhx, event, target);
}
function f4ah6o$mhx$core$$register_default_event_listeners() {
  const doc = f4ah6o$mhx$ffi$$document();
  const _len = f4ah6o$mhx$event$$default_events.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const event_type = f4ah6o$mhx$event$$default_events[_i];
      f4ah6o$mhx$ffi$$Document$add_event_listener(doc, event_type, (event) => {
        if (f4ah6o$mhx$ffi$$Event$has_target(event)) {
          const target = f4ah6o$mhx$ffi$$Event$target_ffi(event);
          if (!f4ah6o$mhx$ffi$$Element$is_null(target)) {
            f4ah6o$mhx$core$$handle_event(event, target);
            return;
          } else {
            return;
          }
        } else {
          return;
        }
      });
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function f4ah6o$mhx$core$$process_mutation_record(mhx, record) {
  const mutation_type = f4ah6o$mhx$ffi$$MutationRecord$type_(record);
  switch (mutation_type) {
    case "childList": {
      const added_count = f4ah6o$mhx$ffi$$MutationRecord$added_nodes_count(record);
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < added_count) {
          const node = f4ah6o$mhx$ffi$$MutationRecord$added_node_at(record, i);
          if (f4ah6o$mhx$ffi$$Node$is_element(node)) {
            const element = f4ah6o$mhx$ffi$$Node$as_element(node);
            f4ah6o$mhx$core$$Mhx$process_tree(mhx, element);
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case "attributes": {
      if (f4ah6o$mhx$ffi$$MutationRecord$has_attribute_name(record)) {
        const attr_name = f4ah6o$mhx$ffi$$MutationRecord$attribute_name(record);
        if (moonbitlang$core$string$$String$has_prefix(attr_name, { str: f4ah6o$mhx$core$$process_mutation_record$46$42$bind$124$676, start: 0, end: f4ah6o$mhx$core$$process_mutation_record$46$42$bind$124$676.length })) {
          const target_node = f4ah6o$mhx$ffi$$MutationRecord$target(record);
          if (f4ah6o$mhx$ffi$$Node$is_element(target_node)) {
            const element = f4ah6o$mhx$ffi$$Node$as_element(target_node);
            const element_hash = f4ah6o$mhx$core$$hash_element(element);
            const element_id = f4ah6o$mhx$event$$ConfigCache$get_element_id(mhx.cache, element_hash);
            f4ah6o$mhx$event$$ConfigCache$remove(mhx.cache, element_id);
            f4ah6o$mhx$core$$Mhx$process_element(mhx, element);
            return;
          } else {
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    }
    default: {
      return;
    }
  }
}
function f4ah6o$mhx$core$$process_pending_mutations(callback_id) {
  const _bind$3 = f4ah6o$mhx$core$$global_mhx.observer;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _observer = _Some._0;
    if (f4ah6o$mhx$core$$global_mhx.observer_callback_id !== callback_id) {
      return undefined;
    }
    const count = f4ah6o$mhx$ffi$$MutationObserver$records_count(_observer);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < count) {
        const record = f4ah6o$mhx$ffi$$MutationObserver$record_at(_observer, i);
        f4ah6o$mhx$core$$process_mutation_record(f4ah6o$mhx$core$$global_mhx, record);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    f4ah6o$mhx$ffi$$MutationObserver$clear_records(_observer);
    return;
  } else {
    return;
  }
}
function f4ah6o$mhx$core$$register_mutation_callback() {
  const id = f4ah6o$mhx$core$$mutation_registry.next_id;
  f4ah6o$mhx$core$$mutation_registry.next_id = f4ah6o$mhx$core$$mutation_registry.next_id + 1 | 0;
  moonbitlang$core$builtin$$Map$set$3$(f4ah6o$mhx$core$$mutation_registry.callbacks, id, () => {
    f4ah6o$mhx$core$$process_pending_mutations(id);
  });
  return id;
}
function f4ah6o$mhx$core$$Mhx$setup_mutation_observer(self, root) {
  const callback_id = f4ah6o$mhx$core$$register_mutation_callback();
  self.observer_callback_id = callback_id;
  if (callback_id < 0) {
    f4ah6o$mhx$core$$on_mutation_observed(callback_id);
  }
  const observer = f4ah6o$mhx$ffi$$MutationObserver$new_ffi(callback_id);
  f4ah6o$mhx$ffi$$MutationObserver$observe(observer, root, true, true, true);
  self.observer = new Option$Some$15$(observer);
}
function f4ah6o$mhx$core$$Mhx$init_mhx(self) {
  if (self.initialized) {
    return undefined;
  }
  self.initialized = true;
  const doc = f4ah6o$mhx$ffi$$document();
  const body = f4ah6o$mhx$ffi$$Document$body_ffi(doc);
  f4ah6o$mhx$core$$Mhx$process_tree(self, body);
  f4ah6o$mhx$event$$EventDelegator$set_active(self.delegator, true);
  f4ah6o$mhx$core$$Mhx$setup_mutation_observer(self, body);
  f4ah6o$mhx$core$$register_default_event_listeners();
}
function f4ah6o$mhx$core$$init_mhx() {
  f4ah6o$mhx$core$$Mhx$init_mhx(f4ah6o$mhx$core$$global_mhx);
}
(() => {
  moonbitlang$async$$run_async_main((_cont, _err_cont) => new Result$Ok$16$(f4ah6o$mhx$core$$init_mhx()));
})();
