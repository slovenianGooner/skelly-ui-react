type SelectInputProps = {
    label: string,
    labelAsPlaceholder?: boolean,
    value: string,
    options: any[],
    onChange: (value: string) => void,
    valueResolver?: string | ((option: any) => string),
    labelResolver?: string | ((option: any) => string),
    errors?: string | string[],
    hasEmptyState?: boolean,
    emptyStateLabel?: string,
    emptyStateValue?: string
}

export default function SelectInput({
                                        label,
                                        labelAsPlaceholder = false,
                                        value,
                                        options,
                                        onChange,
                                        valueResolver = 'value',
                                        labelResolver = 'label',
                                        errors = [],
                                        hasEmptyState = true,
                                        emptyStateLabel = '&mdash;',
                                        emptyStateValue = '',
                                        ...props
                                    }: SelectInputProps) {

    const resolveValue = (option) => {
        if (typeof valueResolver === 'function') {
            return valueResolver(option);
        }

        if (typeof valueResolver === 'string') {
            return option[valueResolver];
        }

        return option;
    }

    const resolveLabel = (option) => {
        if (typeof labelResolver === 'function') {
            return labelResolver(option);
        }

        if (typeof labelResolver === 'string') {
            return option[labelResolver];
        }

        return option;
    }

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
            return 'ring-red-300 focus:ring-red-600 text-red-600';
        }

        return 'ring-gray-300 focus:ring-indigo-600 text-gray-900';
    }

    return (
        <div>
            {!labelAsPlaceholder && (
                <label className={'block text-sm font-medium leading-6 ' + labelClass()}>
                    {label}
                </label>
            )}
            <select
                {...props}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={'mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6 ' + inputClass()}
            >
                {labelAsPlaceholder && (
                    <option value="" disabled>{label}</option>
                )}
                {hasEmptyState && (
                    <option value={emptyStateValue} dangerouslySetInnerHTML={{__html: emptyStateLabel}}></option>
                )}
                {options.map((option, index) => (
                    <option key={index} value={resolveValue(option)}>{resolveLabel(option)}</option>
                ))}
            </select>

            {isError && (
                <p className="mt-2 text-sm text-red-600">
                    {parsedErrors()[0]}
                </p>
            )}
        </div>
    )
}
