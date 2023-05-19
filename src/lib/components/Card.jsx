export default function Card({children, header, footer, overflows = false, contentClassName = 'px-4 py-5 sm:p-6', ...props}) {
    const overflowStyle = overflows ? '' : 'overflow-hidden'

    return (
        <>
            <div {...props}
                className={`${overflowStyle} divide-y divide-gray-200 dark:divide-white/10 rounded-lg bg-white dark:bg-gray-900 shadow ${props.className}`}>
                {header && (
                    <div className="px-4 py-5 sm:px-6">{header}</div>
                )}
                <div className={contentClassName}>{children}</div>
                {footer && (
                    <div className="px-4 py-5 sm:px-6">{footer}</div>
                )}
            </div>
        </>
    )
}
