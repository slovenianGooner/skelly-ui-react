import {
    XCard,
    XCardHeader,
    XCheckboxInput,
    XPageTitle, XRadioInput,
    XTextarea,
    XTextInput, XToggleInput
} from "../lib/index.jsx";
import {useState} from "react";

export default function Inputs() {
    const [textInputValue, setTextInputValue] = useState("")
    const [textareaValue, setTextareaValue] = useState("")
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [checkboxValues, setCheckboxValues] = useState([])
    const [radioValue, setRadioValue] = useState("one")

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>Inputs</XPageTitle>

                <XCard className="mt-8"
                       header={<XCardHeader>Text Input</XCardHeader>}>
                    <div className="space-y-4">
                        <div>
                            <XTextInput label="Simple Text Input" value={textInputValue}
                                        onChange={(e) => setTextInputValue(e.target.value)}/>
                        </div>
                        <div>
                            <XTextInput label="Simple Text Input" value={textInputValue}
                                        onChange={(e) => setTextInputValue(e.target.value)}
                                        errors={["This field is required."]}/>
                        </div>
                        <div>
                            <XTextInput labelAsPlaceholder={true} label="Simple Text Input" value={textInputValue}
                                        onChange={(e) => setTextInputValue(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{textInputValue}</pre>
                        </div>
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Textarea</XCardHeader>}>
                    <div className="space-y-4">
                        <div>
                            <XTextarea label="Simple Textarea" value={textareaValue}
                                       onChange={(e) => setTextareaValue(e.target.value)}/>
                        </div>
                        <div>
                            <XTextarea label="Simple Textarea" value={textareaValue}
                                       onChange={(e) => setTextareaValue(e.target.value)}
                                       errors={["This field is required."]}/>
                        </div>
                        <div>
                            <XTextarea labelAsPlaceholder={true} label="Simple Textarea" value={textareaValue}
                                       onChange={(e) => setTextareaValue(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{textareaValue}</pre>
                        </div>
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Checkboxes</XCardHeader>}>
                    <div className="space-y-4">
                        <XCheckboxInput id="simple_checkbox" label="Simple Checkbox"
                                        value={checkboxValue}
                                        checked={checkboxValue}
                                        onChange={(e) => setCheckboxValue(e.target.checked)}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre
                                className="rounded-md bg-indigo-50 p-4 text-xs">{checkboxValue ? 'true' : 'false'}</pre>
                        </div>
                        {['one', 'two', 'three'].map((value) => (
                            <XCheckboxInput key={value}
                                            id={`multiple_checkboxes_${value}`}
                                            label={value}
                                            checked={checkboxValues.includes(value)}
                                            onChange={(e) => setCheckboxValues(
                                                e.target.checked ?
                                                    [...checkboxValues, value] :
                                                    checkboxValues.filter((v) => v !== value)
                                            )}
                                            value={value}/>
                        ))}
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre
                                className="rounded-md bg-indigo-50 p-4 text-xs">
                                {checkboxValues.map((value) => (
                                    <span key={value}>{value}, </span>
                                ))}
                            </pre>
                        </div>
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Radios</XCardHeader>}>
                    <div className="space-y-4">
                        {['one', 'two', 'three'].map((value) => (
                            <XRadioInput key={value}
                                         id={`simple_radio_${value}`}
                                         label={value}
                                         checked={radioValue === value}
                                         onChange={(e) => setRadioValue(e.target.value)}
                                         value={value}/>
                        ))}
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre
                                className="rounded-md bg-indigo-50 p-4 text-xs">
                                {radioValue}
                            </pre>
                        </div>
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Toggles</XCardHeader>}>
                    <div className="space-y-4">
                        <XToggleInput id="simple_checkbox" label="Simple Checkbox"
                                      checked={checkboxValue}
                                      onChange={(e) => setCheckboxValue(e)}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre
                                className="rounded-md bg-indigo-50 p-4 text-xs">{checkboxValue ? 'true' : 'false'}</pre>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {['one', 'two', 'three'].map((value) => (
                                <XToggleInput key={value}
                                              id={`multiple_checkboxes_${value}`}
                                              label={value}
                                              checked={checkboxValues.includes(value)}
                                              onChange={(e) => setCheckboxValues(e ? [...checkboxValues, value] : checkboxValues.filter((v) => v !== value))}
                                              value={value}/>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre
                                className="rounded-md bg-indigo-50 p-4 text-xs">
                                {checkboxValues.map((value) => (
                                    <span key={value}>{value}, </span>
                                ))}
                            </pre>
                        </div>
                    </div>
                </XCard>
            </div>
        </>
    )
}