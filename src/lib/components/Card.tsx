type CardProps = {
    children: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    overflows?: boolean
    contentClassName?: string
    className?: string
}

export default function Card({children, header, footer, overflows = false, contentClassName = 'px-4 py-5 sm:p-6', ...props}: CardProps) {
    const overflowStyle = overflows ? '' : 'overflow-hidden'

    return (
        <>
            <div {...props}
                className={`${overflowStyle} divide-y divide-gray-200 rounded-lg bg-white shadow ${props.className}`}>
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
