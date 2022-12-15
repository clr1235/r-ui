import type { Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
