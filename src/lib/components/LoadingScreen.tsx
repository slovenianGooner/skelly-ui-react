import {Transition} from "@headlessui/react";
import {XSpinnerIcon} from "../index.js";

type LoadingScreenProps = {
    loading: boolean,
    children?: React.ReactNode
}

export default function LoadingScreen({loading, children}: LoadingScreenProps) {
    return (
        <Transition enter-active-class="transition-opacity ease-linear duration-200"
                    enter-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-linear duration-200"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
                    show={loading}
        >
            <div className="w-full h-screen fixed inset-0 flex items-center justify-center bg-indigo-300 bg-opacity-70 z-[60] text-accent">
                {children || <XSpinnerIcon className="w-24 h-24 animate-spin text-indigo-500" />}
            </div>
        </Transition>
    )
}
