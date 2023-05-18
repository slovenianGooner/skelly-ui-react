import {nanoid} from "nanoid";
import {XButton, XListInputItem} from "../index.jsx";
import {useEffect, useState} from "react";

export default function ListInput({value, onChange, emptyValue, children, className = '', collapsed = false, addNewButton}) {

    const [internalValue, setInternalValue] = useState(value.map((item) => {
            if (!item.uid) {
                item.uid = nanoid();
            }

            // Assign any missing properties from the emptyValue
            Object.keys(emptyValue).forEach((key) => {
                if (!item[key]) {
                    item[key] = emptyValue[key];
                }
            });

            return item;
    }));

    useEffect(() => {
        onChange(internalValue);
    }, [internalValue]);

    if (addNewButton === undefined) {
        addNewButton = (<XButton style="secondary" onClick={(e) => setInternalValue([...internalValue, emptyValue])}>Add New</XButton> )
    }

    const setData = (index, newItem) => {
        setInternalValue([...internalValue.slice(0, index), newItem, ...internalValue.slice(index + 1)]);
    }

    const moveUp = (index) => {
        if (index === 0) {
            return;
        }

        setInternalValue([...internalValue.slice(0, index - 1), internalValue[index], internalValue[index - 1], ...internalValue.slice(index + 1)]);
    }

    const moveDown = (index) => {
        if (index === value.length - 1) {
            return;
        }

        setInternalValue([...internalValue.slice(0, index), internalValue[index + 1], internalValue[index], ...internalValue.slice(index + 2)]);
    }

    return (
        <div className={'space-y-4 ' + className}>
            {internalValue.length > 0 && (
                <div className="space-y-2">
                     {internalValue.map((item, index) => (
                        <XListInputItem key={item.uid ?? nanoid()} item={item} title={'#' + (index + 1)}
                                        onChange={(newItem) => setData(index, newItem)}
                                        onRemove={() => setInternalValue([...internalValue.slice(0, index), ...internalValue.slice(index + 1)])}
                                        canMoveUp={index > 0}
                                        onMoveUp={() => moveUp(index)}
                                        canMoveDown={index < internalValue.length - 1}
                                        onMoveDown={() => moveDown(index)}
                                        collapsed={collapsed}>
                            {({ item, setItem }) => children({ item, setItem })}
                        </XListInputItem>
                     ))}
                </div>
            )}

            {addNewButton}
        </div>
    )
}
