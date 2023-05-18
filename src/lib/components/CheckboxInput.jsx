export default function CheckboxInput({label, checked, value, onChange}) {
    return (
        <label className="flex items-center">
            {/* Some special checked: classes due to a dark mode tailwindcss bug for checkboxes */}
            <input type="checkbox" className="rounded bg-white dark:bg-white/5 border-gray-300 dark:border-white/10 text-indigo-600 dark:checked:bg-indigo-500 shadow-sm focus:ring-indigo-600 dark:checked:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                   checked={checked}
                   value={value}
                   onChange={onChange}
            />
            <span className="ml-2 text-sm text-gray-900 dark:text-white">{label}</span>
        </label>
    )
}
