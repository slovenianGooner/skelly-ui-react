import {Listbox, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {CheckCircleIcon, ChevronDownIcon} from "@heroicons/react/24/solid/index.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CustomSelectInput({
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
                                        multiple = false,
                                        ...props
                                    }) {
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        onChange(selected);
    }, [selected])

    const resolveSelectedLabel = () => {
        // If this is multiple select, we need to return an array of labels
        if (multiple) {
            // If nothing is selected, return empty state label
            if (selected.length === 0) {
                return emptyStateLabel;
            }

            return selected.map((value) => {
                const option = options.find(option => resolveValue(option) === value);

                if (option) {
                    return resolveLabel(option);
                }

                return '';
            }).join(', ');
        }

        if (selected === emptyStateValue) {
            return emptyStateLabel;
        }

        const option = options.find(option => resolveValue(option) === selected);

        if (option) {
            return resolveLabel(option);
        }

        return '';
    }

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
            <Listbox value={selected} onChange={setSelected} multiple={multiple}>
                {({open}) => (
                    <>
                        {!labelAsPlaceholder && (
                            <Listbox.Label className={'block text-sm font-medium leading-6 ' + labelClass()}>
                                {label}
                            </Listbox.Label>
                        )}
                        <div className="relative mt-1">
                            <Listbox.Button
                                className={'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 ' + inputClass()}>
                            <span className="block truncate"
                                  dangerouslySetInnerHTML={{__html: resolveSelectedLabel()}}></span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                              </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((option, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({active}) =>
                                                classNames(
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={resolveValue(option)}
                                        >
                                            {({selected, active}) => (
                                                <>
                                                <span
                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                  {resolveLabel(option)}
                                                </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                    <CheckCircleIcon className="h-5 w-5" aria-hidden="true"/>
                                                  </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
            {isError && (
                <p className="mt-2 text-sm text-red-600">
                    {parsedErrors()[0]}
                </p>
            )}
        </div>
    )
}