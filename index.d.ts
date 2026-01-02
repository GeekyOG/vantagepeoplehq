/* eslint-disable no-unused-vars */
declare module "numeral";
declare module "html2pdf.js";

declare module "react-hook-form" {
    export type UseFormReturn<T = any, C = any, TV = any> = any;
    export type UseFormHandleSubmit<T = any, TV = any> = any;
    export type Control<T = any> = any;
    export type FieldValues = any;
    export type FieldError = any;
    export type FieldErrors<T = any> = any;
    export type Path<T = any> = any;
    export type FieldPath<T = any> = any;
    export type ControllerProps<TFieldValues = any, TName = any> = any;
    export type ControllerRenderProps<TFieldValues = any, TName = any> = any;
    export type RegisterOptions = any;
    export function useForm<T = any, C = any, TV = any>(
        options?: any
    ): UseFormReturn<T, C, TV>;
    export type UseFormRegister<T = any> = any;
    export type UseFormSetValue<T = any> = any;
    export const useFormContext: any;
    export const useController: any;
    export const useWatch: any;
    export const useFieldArray: any;

    export const Controller: any;
    export const FormProvider: any;
}

declare module "@hookform/resolvers/zod" {
    import type { ZodTypeAny } from "zod";

    export function zodResolver<T = any>(
        schema: ZodTypeAny,
        options?: any
    ): any;
}
