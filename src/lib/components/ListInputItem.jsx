import {MinusIcon, PlusIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";
import {ArrowDownIcon, ArrowUpIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";

export default function ListInputItem({item, onChange, onRemove, canMoveUp, onMoveUp, canMoveDown, onMoveDown, singleValue, title, collapsed = false, children}) {
    const [open, setOpen] = useState(!collapsed)

    const setItem = (key, newValue) => {
        if (singleValue) {
            onChange(key);
            return;
        }

        item[key] = newValue;
        onChange(item);
    }

    return (
        <div className="border list-border rounded-lg divide-y list-divide bg-white">
            <div className="flex divide-x divide-gray-200">
                <button onClick={(e) => setOpen(!open)} className="flex justify-center items-center p-2">
                    {open ? (
                        <MinusIcon className="w-4 h-4"/>) : (<PlusIcon className="w-4 h-4"/>)}
                </button>
                <div className="px-6 py-2 flex-1 font-mono text-sm">{ title }</div>
            </div>
            {open && (
                <div className="flex divide-x divide-gray-200">
                    <div className="p-2 flex flex-col gap-4">
                        {canMoveUp && (
                            <button onClick={onMoveUp}>
                                <ArrowUpIcon className="w-4 h-4"/>
                            </button>
                        )}
                        {canMoveDown && (
                            <button onClick={onMoveDown}>
                                <ArrowDownIcon className="w-4 h-4"/>
                            </button>
                        )}
                        <button onClick={onRemove}>
                            <TrashIcon className="w-4 h-4"/>
                        </button>
                    </div>
                    <div className="px-6 py-4 flex-1">
                        {children({ item, setItem })}
                    </div>
                </div>
            )}
        </div>
    )
}
