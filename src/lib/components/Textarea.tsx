import {forwardRef} from "react";

type TextareaProps = {
    id?: string,
    label?: string,
    labelAsPlaceholder?: boolean,
    className?: string,
    errors?: string | string[]
}

export default forwardRef(function Textarea({
                                                 id = '',
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
            return 'border-red-300 focus:border-red-500 dark:focus:border-red-600 focus:ring-red-500 text-red-500';
        }

        return 'border-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500';
    }

    return (
        <div className="flex flex-col">
            {!labelAsPlaceholder && (
                <label htmlFor={id} className={
                    'block text-sm font-medium leading-6 ' + labelClass()
                }>
                    {label}
                </label>
            )}
            <textarea {...props}
                   id={id}
                   placeholder={labelAsPlaceholder ? label : ''}
                   className={
                       'rounded-md shadow-sm ' +
                       inputClass() + ' ' +
                       className
                   }/>
            {isError && (
                <p className="mt-2 text-sm text-red-600">
                    {parsedErrors()[0]}
                </p>
            )}
        </div>
    )
})
