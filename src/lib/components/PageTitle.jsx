export default function PageTitle({children, className = ''}) {
    return (
        <h2 className={'text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ' + className}>
            {children}
        </h2>
    )
}
