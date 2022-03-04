export function wait<T>(numSeconds: number, v: T): Promise<T> {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), numSeconds * 1000);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(e: any): string {
  return e.message || (e.toString ? e.toString() : JSON.stringify(e));
}
