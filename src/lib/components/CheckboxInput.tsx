type CheckboxInputProps = {
    label: string
    checked: boolean
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckboxInput({label, checked, value, onChange}: CheckboxInputProps) {
    return (
        <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                   checked={checked}
                   value={value}
                   onChange={onChange}
            />
            <span className="ml-2 text-sm text-gray-600">{label}</span>
        </label>
    )
}
