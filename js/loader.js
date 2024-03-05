class WasmLoader {
  constructor() { }

  async wasm(path) {
    if (!WebAssembly.instantiateStreaming) {
      return this.wasmFallback(path);
    }

    console.log(`fetching ${path}`);
    const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

    return instance?.exports;
  }

  async wasmFallback(path) {
    console.log('oldass browser but I no worry we fallback');
    const response = await fetch(path);
    const bytes = await response?.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);

    return instance?.exports;
  }
}
