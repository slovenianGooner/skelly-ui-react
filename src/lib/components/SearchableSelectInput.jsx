import {Combobox, Listbox, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {CheckCircleIcon, ChevronDownIcon} from "@heroicons/react/24/solid/index.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchableSelectInput({
                                                  label,
                                                  labelAsPlaceholder = false,
                                                  value,
                                                  options,
                                                  onChange,
                                                  valueResolver = 'value',
                                                  labelResolver = 'label',
                                                  errors = [],
                                                  hasEmptyState = true,
                                                  emptyStateLabel = 'Select an option',
                                                  emptyStateValue = '',
                                                  multiple = false,
                                                  ...props
                                              }) {
    const [selected, setSelected] = useState(value)
    const [query, setQuery] = useState('')

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

    const filteredOptions = query === '' ? options
        : options.filter(option => resolveLabel(option).toLowerCase().includes(query.toLowerCase()));

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
            <Combobox value={selected} onChange={setSelected} multiple={multiple}>
                <div className="relative">
                    <div
                        className={'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 ' + inputClass()}>
                        <Combobox.Button className="w-full relative flex justify-between items-center">
                            <Combobox.Input onChange={(e) => setQuery(e.target.value)}
                                            onFocus={(e) => selected.length === 0 ? e.target.value = '' : null}
                                            className="w-full border-none px-0 py-0.5 text-sm leading-5 text-gray-900 focus:ring-0"
                                            displayValue={() => resolveSelectedLabel()}/>
                        </Combobox.Button>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                        </div>
                    </div>
                    <Transition as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}>
                        <Combobox.Options
                            className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredOptions.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredOptions.map((option, index) => (
                                    <Combobox.Option
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
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
            {isError && (
                <p className="mt-2 text-sm text-red-600">
                    {parsedErrors()[0]}
                </p>
            )}
        </div>
    )
}
