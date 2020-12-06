import {CSSProperties, ChangeEvent, ReactNode} from "react";

export interface InputProps {
    placeholder?: string;
    label?: string;
    required?: boolean;
    style?: CSSProperties;
    name: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement & EventTarget>) => void;
    errorMessage?: string;
    fileCounter?: number;
    onBlur: (event: string) => void;
}

export type Route = {
    name: string;
    path: string;
}

export interface Tab {
    path: string;
    tabsChildren: ReactNode [];
    routes: Route[];
}

export interface TabsCircleProps {
    children: ReactNode;
    isActive: boolean;
}

export interface TemplateProps {
    headline: string;
}
