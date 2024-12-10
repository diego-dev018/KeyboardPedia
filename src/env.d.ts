/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_KEY: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}