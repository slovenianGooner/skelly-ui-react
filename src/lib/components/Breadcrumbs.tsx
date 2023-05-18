import {ChevronRightIcon} from "@heroicons/react/24/solid/index.js";

type BreadcrumbsProps = {
    breadcrumbs: Array<{
        label: string
        href?: string
    }>,
    onClick: (href: string) => void
}

export default function Breadcrumbs({ breadcrumbs = [], onClick }: BreadcrumbsProps) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <div>
                            <button onClick={() => onClick(breadcrumb.href)} className="flex items-center text-gray-400 hover:text-gray-500">
                                {index > 0 && (
                                    <ChevronRightIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true"/>
                                )}
                                <span className={(index > 0) ? 'ml-4' : ''}>{breadcrumb.label}</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
