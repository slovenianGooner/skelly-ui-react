import {XButton, XTextInput} from "../index.jsx";

export default function Search({ defaultValue, name = 'search', placeholder = 'Search...', buttonLabel = 'Search' }) {
    return (
        <div className="flex rounded-md shadow-sm">
            <XTextInput defaultValue={defaultValue}
                        labelAsPlaceholder={true}
                        label={placeholder}
                        name={name}
                        className="rounded-none rounded-l-md !mt-0" />
            <XButton style="secondary"
                     type="submit"
                     className="!ring-0 rounded-l-none rounded-r-md border border-l-0 border-gray-300 dark:border-white/5 px-3 sm:text-sm">
                {buttonLabel}
            </XButton>
        </div>
    )
}
