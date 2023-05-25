import { InputHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    labelAsPlaceholder?: boolean,
    errors?: string | string[]
}

export default forwardRef(function Textarea({
    label = '',
    labelAsPlaceholder = false,
    className = '',
    errors = [],
    ...props
}: TextareaProps, ref) {

    const parsedErrors = () => errors instanceof Array ? errors : [errors]
    const isError = parsedErrors().length > 0

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
        return 'ring-gray-300 dark:ring-white/10 focus:ring-indigo-600 dark:focus:ring-indigo-500';
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
            <textarea {...props}
                placeholder={labelAsPlaceholder ? label : ''}
                className={
                    'rounded-md shadow-sm border-0 bg-white dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ' +
                    inputClass() + ' ' +
                    className
                } />
            {isError && (
                <p className="mt-2 text-sm text-red-500">
                    {parsedErrors()[0]}
                </p>
            )}
        </div>
    )
})
