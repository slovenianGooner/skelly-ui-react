import { XLayout } from "./lib";
import { Menu } from "@headlessui/react";
import { NavLink, Outlet } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Buttons', href: '/buttons' },
    { name: 'Alerts', href: '/alerts' },
    { name: 'Modals', href: '/modals' },
    { name: 'Lists', href: '/lists' },
    { name: 'Basic Inputs', href: '/basic-inputs' },
    { name: 'Selects', href: '/selects' },
    { name: 'File', href: '/file' },
  ]

  const navigation = (
    <ul role="list" className="-mx-2 space-y-1">
      {navigationItems.map((item, index) => (
        <li key={index}>
          <NavLink to={item.href} className={({ isActive }) => classNames(
            isActive
              ? 'bg-indigo-700 text-white'
              : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
            'group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold'
          )}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  const userMenuItems = (
    <>
      <Menu.Item>
        {({ active }) => (
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
      <XLayout navigation={navigation} userMenuItems={userMenuItems}>
        <Outlet />
      </XLayout>
    </>
  )
}

export default App
