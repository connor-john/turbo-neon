use neon::prelude::*;

fn health_check(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello from rust"))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("healthCheck", health_check)?;
    Ok(())
}