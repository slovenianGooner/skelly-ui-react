import { Tab } from "@headlessui/react"
import { Fragment } from "react"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "../context/theme";
import { CardProps } from "../lib/components/Card";

type Tab = {
    name: string,
    icon: JSX.Element,
}

const tabs: Tab[] = [
    {
        name: 'Preview',
        icon: <EyeIcon className="h-3 w-3" />
    },
    {
        name: 'Code',
        icon: <CodeBracketIcon className="h-3 w-3" />,
    }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface PreviewCardProps extends CardProps {
    codeString: string
}

export default function PreviewCard({ children, header, footer, overflows = false, contentClassName = 'px-4 py-5 sm:p-6', codeString, ...props }: PreviewCardProps) {
    const overflowStyle = overflows ? '' : 'overflow-hidden'
    const { theme } = useTheme()
    return (
        <Tab.Group>
            <div {...props}
                className={`${overflowStyle} divide-y divide-gray-200 dark:divide-white/10 rounded-lg bg-white dark:bg-gray-900 shadow ${props.className}`}>
                {header && (
                    <div className="flex justify-between items-center px-4 py-5 sm:px-6">
                        {header}
                        <Tab.List className="bg-gray-100 dark:bg-white/10 p-1 rounded-lg">
                            {tabs.map((tab, index) => (
                                <Tab key={index} as={Fragment}>
                                    {({ selected }) => (
                                        <button className={
                                            classNames(
                                                'inline-flex items-center gap-x-2 focus:outline-none px-3 py-1 font-medium text-xs rounded-md',
                                                selected ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200'
                                            )
                                        }>
                                            {tab.icon}
                                            <span>{tab.name}</span>
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                )}
                <Tab.Panels>
                    <Tab.Panel>
                        <div className={contentClassName}>{children}</div>
                    </Tab.Panel>
                    <Tab.Panel className="px-2">
                        <SyntaxHighlighter codeTagProps={{ className: "p-4 text-sm" }} language="jsx" style={theme === 'dark' ? oneDark : oneLight}>
                            {codeString}
                        </SyntaxHighlighter>
                    </Tab.Panel>
                </Tab.Panels>
                {footer && (
                    <div className="px-4 py-5 sm:px-6">{footer}</div>
                )}
            </div>
        </Tab.Group>
    )
}
