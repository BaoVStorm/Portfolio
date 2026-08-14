export {};

declare global {
  interface Window {
    GET?: (key: string, selector: string, increment: number) => void;
  }
}
