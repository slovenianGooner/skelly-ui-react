import {Switch} from "@headlessui/react";

type ToggleInputProps = {
    checked: boolean,
    onChange: (checked: boolean) => void,
    label: string
}

export default function ToggleInput({checked, onChange, label}: ToggleInputProps) {
    let enabled = checked;

    const classNames = function (...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex items-center">
            <Switch
                checked={enabled}
                onChange={onChange}
                className={classNames(
                    enabled ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-200 dark:bg-white/10',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={classNames(
                        enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                />
            </Switch>
            <span className="ml-2 text-sm text-gray-900 dark:text-white">{label}</span>
        </div>
    )
}
