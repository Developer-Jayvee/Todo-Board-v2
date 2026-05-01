import type { ReactNode } from "react";

export interface AuthTemplatesActions {
    onBack ?: () => void;
    showReturnButton ?: boolean;
}
export interface AuthTemplateProps extends AuthTemplatesActions{
    children : ReactNode;
    headerText : string;
    submitText ?: string;
    
}