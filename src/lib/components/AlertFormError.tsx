import {XCircleIcon} from "@heroicons/react/24/solid/index.js";

type AlertFormErrorProps = {
    title?: string,
    errors: any
}

export default function AlertFormError({title, errors}: AlertFormErrorProps) {
    return errors && Object.keys(errors).length > 0 && (
        <div className="rounded-md bg-red-50 dark:bg-gray-800 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" aria-hidden="true"/>
                </div>
                <div className="ml-3 space-y-2">
                    {title &&
                        <h3 className="text-sm font-semibold text-red-600 dark:text-red-500">{title}</h3>}
                    <div className="text-sm text-red-600 dark:text-red-500">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            {Object.keys(errors).map((key, index) => (
                                <li key={index}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
