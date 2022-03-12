export const countdown = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));
