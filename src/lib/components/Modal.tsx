import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {Fragment, useEffect, useState} from "react";

type ModalProps = {
    show: boolean,
    onHide: () => void,
    footer?: JSX.Element,
    dismissable?: boolean,
    closeButton?: boolean,
    children: JSX.Element
}

export default function Modal({show, onHide, footer, dismissable = false, closeButton = false, children}: ModalProps) {
    const [open, setOpen] = useState(show)
    useEffect(() => setOpen(show), [show])
    useEffect(() => {
        if (!open) {
            onHide()
        }
    }, [open])

    return <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[70]" onClose={() => dismissable ? setOpen(false) : null}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel
                            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:p-6">
                                {closeButton && (
                                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md bg-white dark:bg-gray-900 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                )}
                                {children}
                            </div>
                            {footer && (
                                <div
                                    className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 space-x-2">
                                    {footer}
                                </div>
                            )}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
}
