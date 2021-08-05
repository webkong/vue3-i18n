import { App } from "vue";
export interface Messages {
    [key: string]: any;
}
export interface I18nConfig {
    locale?: string;
    messages: Messages;
}
export interface I18nInstance {
    messages: Messages;
    t: (key: string) => string;
    setLocale: (locale: string) => void;
    getLocale: () => string;
    install(app: App): void;
}
