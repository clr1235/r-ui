import type {App, Plugin} from 'vue'

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = function(app) {
        app.component((component as any).name, component as SFCWithInstall<T>)
    }
    return component as SFCWithInstall<T>
}