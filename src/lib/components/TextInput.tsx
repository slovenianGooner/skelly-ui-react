import { InputHTMLAttributes, forwardRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    labelAsPlaceholder?: boolean,
    errors?: string | string[],
    [x: string]: any;
}

export default forwardRef(function TextInput({
    label,
    labelAsPlaceholder,
    className,
    errors,
    type = 'text',
    ...props
}: TextInputProps, ref) {

    const isError = errors?.length > 0

    const labelClass = () => {
        if (isError) {
            return 'text-red-500';
        }

        return 'text-gray-900';
    }

    const inputClass = () => {
        if (isError) {
            return 'ring-red-500 focus:ring-red-500 text-red-500';
        }
        return 'ring-gray-300 dark:ring-white/10 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-gray-900 dark:text-white';
    }

    return (
        <div className="flex flex-col">
            {!labelAsPlaceholder && (
                <label htmlFor={props.id} className={
                    'block text-sm font-medium leading-6 text-gray-900 dark:text-white ' + labelClass()
                }>
                    {label}
                </label>
            )}
            <input
                {...props}
                type={type}
                placeholder={labelAsPlaceholder ? label : ''}
                className={
                    'mt-1 bg-white dark:bg-white/5 border-0 rounded-md shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' +
                    inputClass() + ' ' +
                    className
                }
            />
            {isError && (
                <p className="mt-2 text-sm text-red-500">
                    {errors[0]}
                </p>
            )}
        </div>
    )
})
