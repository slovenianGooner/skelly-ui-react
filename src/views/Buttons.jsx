import {XButton, XButtonDropdown, XCard, XCardHeader, XPageTitle} from "../lib";
import {ChevronDownIcon, PencilIcon} from "@heroicons/react/24/solid/index.js";
import {Menu} from "@headlessui/react";

export default function Buttons() {
    const buttonClicked = () => {
        alert("Button clicked")
    }

    const dropdownMenuItems = (
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

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>Buttons</XPageTitle>

                <XCard className="mt-8"
                       header={<XCardHeader>Primary</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="primary" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="primary" size="sm">Button With
                            Click</XButton>
                        <XButton as="a" href="/" style="primary" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="primary" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="primary" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Secondary</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="secondary" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="secondary" size="sm">Button With
                            Click</XButton>
                        <XButton as="a" href="/" style="secondary" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="secondary" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="secondary" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Soft</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="soft" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="soft" size="sm">Button With Click</XButton>
                        <XButton as="a" href="/" style="soft" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="soft" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="soft" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Danger</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="danger" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="danger" size="sm">Button With
                            Click</XButton>
                        <XButton as="a" href="/" style="danger" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="danger" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="danger" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Warning</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="warning" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="warning" size="sm">Button With
                            Click</XButton>
                        <XButton as="a" href="/" style="warning" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="warning" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="warning" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Success</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButton as="a" href="/" style="success" size="xs">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="success" size="sm">Button With
                            Click</XButton>
                        <XButton as="a" href="/" style="success" size="md">Link</XButton>
                        <XButton as="button" onClick={buttonClicked} style="success" size="lg" className="gap-2">
                            <PencilIcon className="w-4 h-4"/>
                            Button With Click
                        </XButton>
                        <XButton as="a" href="/" style="success" size="xl">Link</XButton>
                    </div>
                </XCard>
                <XCard className="mt-8 mb-32" overflows={true}
                       header={<XCardHeader>With Dropdown</XCardHeader>}>
                    <div className="flex items-center space-x-6">
                        <XButtonDropdown button={
                            <XButton divided={true}>
                                <span>Bottom Left</span>
                                <ChevronDownIcon className="w-5 h-5" />
                            </XButton>
                        } start="bottomLeft">
                            {dropdownMenuItems}
                        </XButtonDropdown>
                        <XButtonDropdown button={
                            <XButton divided={true} style="success">
                                <span>Bottom Right</span>
                                <ChevronDownIcon className="w-5 h-5" />
                            </XButton>
                        } start="bottomRight">
                            {dropdownMenuItems}
                        </XButtonDropdown>
                        <XButtonDropdown button={
                            <XButton className="gap-2" style="soft">
                                <span>Top Left</span>
                                <ChevronDownIcon className="w-5 h-5" />
                            </XButton>
                        } start="topLeft">
                            {dropdownMenuItems}
                        </XButtonDropdown>
                        <XButtonDropdown button={
                            <XButton style="secondary">Top Right</XButton>
                        } start="topRight">
                            {dropdownMenuItems}
                        </XButtonDropdown>
                    </div>
                </XCard>
            </div>
        </>
    )
}
