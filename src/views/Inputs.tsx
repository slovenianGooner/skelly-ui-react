import {
    XBreadcrumbs,
    XCard,
    XCardHeader,
    XCheckboxInput,
    XOutput,
    XPageTitle, XRadioInput,
    XTextarea,
    XTextInput, XToggleInput
} from "../lib";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Inputs() {
    const navigate = useNavigate();

    const [textInputValue, setTextInputValue] = useState("")
    const [textareaValue, setTextareaValue] = useState("")
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [checkboxValues, setCheckboxValues] = useState([])
    const [radioValue, setRadioValue] = useState("one")

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XBreadcrumbs breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "Inputs", href: "/basic-inputs"},
                ]} onClick={(url) => navigate(url)} />
                <XPageTitle className="mt-4">Inputs</XPageTitle>

                <XCard className="mt-8"
                       header={<XCardHeader>Text Input</XCardHeader>}>
                    <div className="space-y-4">
                        <div>
                            <XTextInput label="Simple Text Input" value={textInputValue}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTextInputValue(e.target.value)}/>
                        </div>
                        <div>
                            <XTextInput label="Simple Text Input" value={textInputValue}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTextInputValue(e.target.value)}
                                        errors={["This field is required."]}/>
                        </div>
                        <div>
                            <XTextInput labelAsPlaceholder={true} label="Simple Text Input" value={textInputValue}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTextInputValue(e.target.value)}/>
                        </div>
                        {/* <XOutput value={textInputValue} /> */}
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
                        {/* <XOutput value={textAreaValue} /> */}
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Checkboxes</XCardHeader>}>
                    <div className="space-y-4">
                        <XCheckboxInput id="simple_checkbox" label="Simple Checkbox"
                                        checked={checkboxValue}
                                        onChange={(e) => setCheckboxValue(e.target.checked)}/>
                        <XOutput value={checkboxValue ? 'true' : 'false'} />
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
                        <XOutput value={JSON.stringify(checkboxValues)} />
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
                        <XOutput value={radioValue} />
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<XCardHeader>Toggles</XCardHeader>}>
                    <div className="space-y-4">
                        <XToggleInput label="Simple Checkbox"
                                      checked={checkboxValue}
                                      onChange={(e) => setCheckboxValue(e)}/>
                        <XOutput value={checkboxValue ? 'true' : 'false'} />
                        <div className="flex flex-col space-y-2">
                            {['one', 'two', 'three'].map((value) => (
                                <XToggleInput key={value}
                                              label={value}
                                              checked={checkboxValues.includes(value)}
                                              onChange={(e) => setCheckboxValues(e ? [...checkboxValues, value] : checkboxValues.filter((v) => v !== value))}
                                              />
                            ))}
                        </div>
                        <XOutput value={JSON.stringify(checkboxValues)} />
                    </div>
                </XCard>
            </div>
        </>
    )
}
