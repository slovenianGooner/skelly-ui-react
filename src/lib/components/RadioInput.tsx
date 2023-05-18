type RadioInputProps = {
    label: string
    checked: boolean
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RadioInput({label, checked, value, onChange}: RadioInputProps) {
    return (
        <label className="flex items-center">
            <input type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   checked={checked}
                   value={value}
                   onChange={onChange}
            />
            <span className="ml-2 text-sm text-gray-600">{label}</span>
        </label>
    )
}
