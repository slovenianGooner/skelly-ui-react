import {XButton, XTextInput} from "../index.js";

type SearchProps = {
    defaultValue?: string,
    name?: string,
    placeholder?: string,
    buttonLabel?: string
}

export default function Search({ defaultValue, name = 'search', placeholder = 'Search...', buttonLabel = 'Search' }: SearchProps) {
    return (
        <div className="flex rounded-md shadow-sm">
            <XTextInput defaultValue={defaultValue}
                        labelAsPlaceholder={true}
                        label={placeholder}
                        name={name}
                        className="rounded-none rounded-l-md border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
            <XButton style="secondary"
                     type="submit"
                     className="!ring-0 inline-flex items-center rounded-l-none rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                {buttonLabel}
            </XButton>
        </div>
    )
}
