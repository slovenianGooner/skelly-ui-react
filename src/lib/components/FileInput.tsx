type FileInputProps = {
    label: string,
    errors?: string | string[],
    onChange: (file: File) => void
}

export default function FileInput({label, errors = [], onChange, ...props}: FileInputProps) {
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
            return 'file:bg-red-50 file:text-red-600 hover:file:bg-red-100 hover:file:text-red-600 text-red-600';
        }

        return 'file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 hover:file:text-indigo-700';
    }

    return (
        <>
            <div>
                <label className={
                    'block text-sm font-medium leading-6 ' + labelClass()
                }>
                    {label}
                </label>
                <input type="file"
                       className={'file:mr-2 file:py-2 file:px-6 file:border-0 file:text-sm file:font-medium hover:file:cursor-pointer text-sm border w-full rounded-md ' + inputClass()}
                       onChange={(e) => onChange(e.target.files[0])}/>
                {isError && (
                    <p className="mt-2 text-sm text-red-600">
                        {parsedErrors()[0]}
                    </p>
                )}
            </div>
        </>
    )
}
