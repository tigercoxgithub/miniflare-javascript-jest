export class Counter {
  constructor(state) {
    this.storage = state.storage;
  }

  async fetch() {
    const count = (await this.storage.get("count")) ?? 0;
    this.storage.put("count", count + 1);

    const body = `
      <!DOCTYPE html>
      <html>
      <body>
      <h1>${String(count)}</h1>
        <p>Try update me hello!</p>
      </body>
      </html>
    `;

    return new Response(body, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}
