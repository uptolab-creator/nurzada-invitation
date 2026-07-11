declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_SHEETS_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
