type AlertBannerProps = {
    children: React.ReactNode,
    style?: 'info' | 'success' | 'warning',
    icon?: React.ReactNode,
    action?: React.ReactNode,
    dismiss?: React.ReactNode,
    className?: string,
}

export default function AlertBanner({children, style = 'info', icon, action, dismiss, className}: AlertBannerProps) {

    const styles = {
        info: 'bg-blue-50 dark:bg-gray-800',
        success: 'bg-green-50 dark:bg-gray-800',
        warning: 'bg-yellow-50 dark:bg-gray-800',
    }

    return (
        <div className={'rounded-md p-4 ' + styles[style] + ' ' + className}>
            <div className="flex">
                {icon && (
                    <div className="flex-shrink-0 mr-3">
                        {icon}
                    </div>
                )}
                <div className="w-full space-y-2 flex flex-col md:space-y-0 md:flex md:flex-row md:justify-between">
                    {children}
                    {action}
                </div>
                {dismiss && (
                    <div className="ml-auto pl-3">
                        {dismiss}
                    </div>
                )}
            </div>
        </div>
    )
}
