export interface FormFieldSelectOption {
    label: string;
    value: any;
}
export interface FormField {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    tooltip?: string;
    options?: FormFieldSelectOption[];
    width?: number;
    min?: any;
    max?: any;
    error?: string;
}