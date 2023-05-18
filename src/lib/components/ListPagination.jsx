export default function ListPagination({prev_page_url, next_page_url, from, to, total, links, onNavigate}) {

    const linkClass = (link, index) => {
        const className = link.active ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            : 'relative inline-flex items-center bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0';

        if (index === 0) {
            return `${className} rounded-l-md`;
        }

        if (index === links.length - 1) {
            return `${className} rounded-r-md`;
        }

        return className;
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-1 justify-between sm:hidden">
                <div>
                    {prev_page_url && (
                        <button
                            onClick={(e) => onNavigate(prev_page_url)}
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                            Previous
                        </button>
                    )}
                </div>
                <div>
                    {next_page_url && (
                        <button
                            onClick={(e) => onNavigate(next_page_url)}
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span> to <span
                        className="font-medium">{to}</span> of{' '}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div>
                    {links.length > 1 && (
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            {links.map((link, index) => (
                                    <button key={link.label}
                                            onClick={(e) => onNavigate(link.url)}
                                            className={linkClass(link, index)}
                                            dangerouslySetInnerHTML={{__html: link.label}}>
                                    </button>
                                )
                            )}
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}
