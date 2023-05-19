export default function FileInput({label, errors = [], onChange, ...props}) {
    const parsedErrors = () => errors instanceof Array ? errors : [errors]
    const isError = parsedErrors().length > 0

    const labelClass = () => {
        if (isError) {
            return 'text-red-500';
        }

        return 'text-gray-900 dark:text-white';
    }

    const inputClass = () => {
        if (isError) {
            return 'file:bg-red-50 file:text-red-500 hover:file:bg-red-100 text-red-500 border-red-700/10 dark:border-red-400/30 ';
        }

        return 'file:bg-indigo-50 dark:file:bg-indigo-400/10 file:text-indigo-700 dark:file:text-indigo-400 dark:hover:file:bg-indigo-400/20 hover:file:bg-indigo-100 text-gray-900 dark:text-white border-indigo-700/10 dark:border-indigo-400/30 ';
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
                       className={'file:mr-2 file:py-2 file:px-6 file:border-0 focus:outline-none file:text-sm file:font-medium hover:file:cursor-pointer text-sm border w-full rounded-md ' + inputClass()}
                       onChange={(e) => onChange(e.target.files[0])}/>
                {isError && (
                    <p className="mt-2 text-sm text-red-500">
                        {parsedErrors()[0]}
                    </p>
                )}
            </div>
        </>
    )
}
