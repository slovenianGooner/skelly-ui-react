export default function AlertBanner({children, icon, action, dismiss, className}) {
    return (
        <div className={'rounded-md p-4 ' + className}>
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
