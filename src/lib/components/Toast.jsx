import {Fragment, useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
import {CheckCircleIcon, XMarkIcon} from "@heroicons/react/24/solid/index.js";

export default function Toast({hideAfter, onHide, children, style = 'default', className}) {
    if (hideAfter) {
        setTimeout(() => onHide(), hideAfter)
    }

    const styles = {
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
        default: "bg-white",
    }

    return (
        <div
            className={`${styles[style]} text-sm pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${className}`}>
            <div className="p-4 flex w-full justify-between items-center">
                <div>
                    {children}
                </div>
                <button
                    type="button"
                    className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => onHide()}
                >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                </button>
            </div>
        </div>
    )
}
