import {nanoid} from "nanoid";
import {XButton, XListInputItem} from "../index.jsx";

export default function ListInput({value, onChange, emptyValue, children, className = '', collapsed = false, addNewButton, singleValue = false}) {

    if (addNewButton === undefined) {
        addNewButton = (<XButton style="secondary" onClick={(e) => onChange([...value, emptyValue])}>Add New</XButton> )
    }

    // Generate a UID for each item in the list
    value = value.map((item) => {
        if (singleValue) {
            return item;
        }

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
    })

    const setData = (index, newItem) => {
        value[index] = newItem;
        onChange(value);
    }

    const moveUp = (index) => {
        if (index === 0) {
            return;
        }

        const item = value[index];
        value.splice(index, 1);
        value.splice(index - 1, 0, item);
        onChange(value);
    }

    const moveDown = (index) => {
        if (index === value.length - 1) {
            return;
        }

        const item = value[index];
        value.splice(index, 1);
        value.splice(index + 1, 0, item);
        onChange(value);
    }

    return (
        <div className={'space-y-4 ' + className}>
            {value.length > 0 && (
                <div className="space-y-2">
                    {value.map((item, index) => (
                        <XListInputItem key={singleValue ? index : (item.uid ?? index)} item={item} title={'#' + (index + 1)}
                                        onChange={(newItem) => setData(index, newItem)}
                                        onRemove={() => onChange(value.filter((_, i) => i !== index))}
                                        canMoveUp={index > 0}
                                        onMoveUp={() => moveUp(index)}
                                        canMoveDown={index < value.length - 1}
                                        onMoveDown={() => moveDown(index)}
                                        singleValue={singleValue}
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
