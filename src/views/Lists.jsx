import {
    useFilters, XBreadcrumbs,
    XButton,
    XCard,
    XListPagination,
    XPageTitle, XSearch, XSelectInput,
    XTextInput
} from "../lib/index.jsx";
import {Form, useNavigate, useSearchParams, useSubmit} from "react-router-dom";
import {FunnelIcon} from "@heroicons/react/24/outline/index.js";
import {useRef} from "react";
import contacts from "../contacts.js";

export default function Lists() {
    const form = useRef();
    const submit = useSubmit();
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const filters = useFilters(['role'], {role: query.get('role')})

    // Filter contacts based on role from the query string and search input
    const filteredContacts = contacts.filter((contact) => {
        const role = query.get('role');
        const search = query.get('search');

        if (role && !contact.roles.includes(role)) {
            return false;
        }

        if (search && !contact.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
        }

        return true;
    })

    const contactsPerPage = 10;

    const paginationLinks = () => {
        const page = query.get('page') ?? 1;
        const links = [];

        // Number of links should be the amount of contacts divided by the amount of contacts per page
        const totalPageCount = Math.ceil(filteredContacts.length / contactsPerPage);

        // If page count is 1, don't show any links
        if (totalPageCount === 1) {
            return [];
        }

        // Get all current query parameters except for page
        const params = Object.fromEntries(query.entries());
        delete params['page'];

        for (let i = 1; i <= totalPageCount; i++) {
            links.push({
                label: i,
                url: `?${new URLSearchParams({...params, page: i})}`,
                active: i == page
            })
        }
        return links;
    }

    const prevPageUrl = () => {
        const page = query.get('page') ?? 1;
        return page > 1 ? `?page=${page - 1}` : null;
    }

    const nextPageUrl = () => {
        const page = query.get('page') ?? 1;
        return page < paginationLinks.length ? `?page=${page + 1}` : null;
    }

    const onPaginationNavigate = (url) => {
        navigate(url);
    }

    // Filter contacts to only show based on current page
    const page = query.get('page') ?? 1;
    const start = (page - 1) * contactsPerPage;
    // End should be the start + the amount of contacts per page or the length of the contacts array if the end is greater than the length
    const end = Math.min(start + contactsPerPage, filteredContacts.length);
    const contactsOnPage = filteredContacts.slice(start, end);

    const listHeader = (
        <Form ref={form} onSubmit={(e) => submit} method="get" action="">
            <div className="flex justify-between">
                <XSearch defaultValue={query.get('search') ?? ''}/>
                <XButton onClick={(e) => filters.toggle()} style="secondary" type="button" className="gap-2">
                    <FunnelIcon className="w-4 h-4"/>
                    <span>Filter</span>
                </XButton>
            </div>
            {filters.isOpen() && (
                <div className="mt-4 max-w-sm">
                    <XSelectInput label="Roles" name="role" options={[
                        {value: 'Administrator', label: 'Administrator'},
                        {value: 'Developer', label: 'Developer'},
                        {value: 'Tester', label: 'Tester'},
                        {value: 'Manager', label: 'Manager'},
                        {value: 'Designer', label: 'Designer'},
                    ]} value={query.get('role') ?? ''} onChange={(e) => submit(form.current)}/>
                </div>
            )}
        </Form>
    )

    const listFooter = (
        <>
            <XListPagination prev_page_url={prevPageUrl()} next_page_url={nextPageUrl()} from={start + 1} to={end} total={filteredContacts.length}
                             links={paginationLinks()} onNavigate={onPaginationNavigate}/>
        </>
    )

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="space-y-4">
                    <XBreadcrumbs breadcrumbs={[
                        {label: "Home", href: "/"},
                        {label: "Lists", href: "/lists"},
                    ]} onClick={(url) => navigate(url)} />
                    <XPageTitle className="mt-4">Lists</XPageTitle>
                    <XCard contentClassName="p-0" header={listHeader} footer={listFooter}>
                        <ul className="divide-y divide-gray-200 dark:divide-white/10">
                            {contactsOnPage.map((contact) => (
                                <li key={contact.id} className="flex justify-between gap-x-6 py-5 px-6">
                                    <div className="flex gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{contact.name}</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">{contact.email}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                                        <div className="flex gap-1">
                                            {contact.roles.map((role) => (
                                                <span
                                                    key={role}
                                                    className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/30">
                                                {role}
                                            </span>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </XCard>
                </div>
            </div>
        </>
    )
}
