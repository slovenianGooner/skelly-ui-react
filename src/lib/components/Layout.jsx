import {Fragment, useState} from "react";
import {Dialog, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {XButtonDropdown} from "../index.jsx";

export default function Layout({logo, navigation, headerButtons, userMenuButton, userMenuItems, username, children, loadingScreen}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    if (!logo) {
        logo = <a href="/" className="text-2xl font-light text-white">Skelly<span className="font-bold">UI</span></a>
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    if (!userMenuButton) {
        userMenuButton = (
            <button className="flex items-center gap-x-2">
                    <span className="text-gray-700 text-sm font-medium truncate">
                        {username || 'John Doe'}
                    </span>
                <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true"/>
            </button>
        )
    }

    if (!userMenuItems) {
        userMenuItems = (
            <>
                <Menu.Item>
                    {({active}) => (
                        <a
                            href="#"
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({active}) => (
                        <a
                            href="#"
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                            Support
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({active}) => (
                        <a
                            href="#"
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                            License
                        </a>
                    )}
                </Menu.Item>
                <div className="border-t border-gray-100"/>
                <Menu.Item>
                    {({active}) => (
                        <a
                            href="#"
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                            Sign out
                        </a>
                    )}
                </Menu.Item>
            </>
        )
    }

    return (
        <>
            <div className="h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full">
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5"
                                                    onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            {logo}
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            {typeof navigation === 'function' ? navigation({closeSidebar}) : navigation}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            {logo}
                        </div>
                        <nav className="flex flex-1 flex-col">
                            {typeof navigation === 'function' ? navigation({closeSidebar}) : navigation}
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 h-full flex flex-col">
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                                onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"/>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <div className="w-full flex justify-end items-center gap-x-4 lg:gap-x-6">
                                {headerButtons && <div className="space-x-4">
                                    {headerButtons}
                                </div>}
                                {/* Profile dropdown */}
                                <XButtonDropdown button={userMenuButton} start="bottomRight">
                                    {userMenuItems}
                                </XButtonDropdown>
                            </div>
                        </div>
                    </div>

                    <main className="bg-gray-50 flex-1">
                        {children}
                    </main>
                </div>
            </div>

            {loadingScreen}
        </>
    )
}
