type CardHeaderProps = {
    children: React.ReactNode,
    className?: string,
}

export default function CardHeader({ children, className = 'text-base font-semibold leading-6 text-gray-900' }: CardHeaderProps)
{
    return (
        <h3 className={className}>
            {children}
        </h3>
    )
}
