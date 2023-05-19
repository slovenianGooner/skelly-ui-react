import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function ButtonDropdown({button, start = 'bottomLeft', children}) {

    const startPositions = {
        bottomLeft: 'origin-top-left left-0 mt-2.5',
        bottomRight: 'origin-top-right right-0 mt-2.5',
        topLeft: '-top-2 transform -translate-y-full left-0',
        topRight: '-top-2 transform -translate-y-full right-0',
    }

    return (
        <>
            <Menu as="div" className="relative">
                <Menu.Button as="div" className="-m-1.5 flex items-center p-1.5">
                    {button}
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={`${startPositions[start]} absolute z-10 w-56 rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-gray-200 dark:ring-white/10 focus:outline-none`}>
                        {children}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
