type OutputProps = {
    value: string;
}

export default function Output({ value }: OutputProps) {
    return (
        <div className="text-gray-900 dark:text-white">
            <label htmlFor="output" className="text-sm">Output</label>
            <pre className="mt-1 rounded-md shadow-sm p-4 ring-1 ring-inset ring-gray-300 dark:ring-white/10 text-xs">{value}</pre>
        </div>
    );
}
