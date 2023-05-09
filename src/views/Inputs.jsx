import {XCard, XPageTitle, XTextarea, XTextInput} from "../lib/index.jsx";
import {useState} from "react";

export default function Inputs() {
    const [value, setValue] = useState("")
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>Inputs</XPageTitle>

                <XCard className="mt-8"
                       header={<h3 className="text-base font-semibold leading-6 text-gray-900">Text</h3>}>
                    <div className="space-y-4">
                        <div>
                            <XTextInput label="Simple Text Input" value={value}
                                        onChange={(e) => setValue(e.target.value)}/>
                        </div>
                        <div>
                            <XTextInput label="Simple Text Input" value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        errors={["This field is required."]}/>
                        </div>
                        <div>
                            <XTextInput labelAsPlaceholder={true} label="Simple Text Input" value={value}
                                        onChange={(e) => setValue(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{value}</pre>
                        </div>
                    </div>
                </XCard>

                <XCard className="mt-8"
                       header={<h3 className="text-base font-semibold leading-6 text-gray-900">Textarea</h3>}>
                    <div className="space-y-4">
                        <div>
                            <XTextarea label="Simple Textarea" value={value}
                                        onChange={(e) => setValue(e.target.value)}/>
                        </div>
                        <div>
                            <XTextarea label="Simple Textarea" value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        errors={["This field is required."]}/>
                        </div>
                        <div>
                            <XTextarea labelAsPlaceholder={true} label="Simple Textarea" value={value}
                                        onChange={(e) => setValue(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{value}</pre>
                        </div>
                    </div>
                </XCard>
            </div>
        </>
    )
}
