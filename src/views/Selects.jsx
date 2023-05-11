import {
    XCard,
    XCardHeader,
    XCustomSelectInput,
    XPageTitle,
    XSearchableSelectInput,
    XSelectInput
} from "../lib/index.jsx";
import {useState} from "react";

export default function Selects() {

    const [place, setPlace] = useState("");
    const [placeTwo, setPlaceTwo] = useState("");
    const [placeThree, setPlaceThree] = useState("");
    const [placeFour, setPlaceFour] = useState("");
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const places = [
        {value: '1', label: 'New York'},
        {value: '2', label: 'London'},
        {value: '3', label: 'Dubai'},
        {value: '4', label: 'Mumbai'},
        {value: '5', label: 'Tokyo'},
    ];
    const simplePlaces = [
        'New York',
        'London',
        'Dubai',
        'Mumbai',
        'Tokyo',
    ]

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>Selects</XPageTitle>

                <XCard className="mt-8" header={<XCardHeader>Simple Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XSelectInput label="Default" value={place} onChange={(e) => setPlace(e)} options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                        <XSelectInput label="Custom value resolver" value={placeTwo} onChange={(e) => setPlaceTwo(e)}
                                      options={places}
                                      valueResolver="label"/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{placeTwo}</pre>
                        </div>
                        <XSelectInput label="Custom label and value resolvers" value={placeThree}
                                      onChange={(e) => setPlaceThree(e)}
                                      options={places}
                                      labelResolver={(option) => 'Place: ' + option.label}
                                      valueResolver={(option) => 'Value: ' + option.value}
                        />
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{placeThree}</pre>
                        </div>
                        <XSelectInput label="Simple options" value={placeFour} onChange={(e) => setPlaceFour(e)}
                                      options={simplePlaces}
                                      valueResolver={null} labelResolver={null}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{placeFour}</pre>
                        </div>
                        <XSelectInput label="Label as a placeholder" labelAsPlaceholder={true} value={place}
                                      onChange={(e) => setPlace(e)} options={places} hasEmptyState={false}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                        <XSelectInput label="With Errors" errors={["This field is required."]} value={place}
                                      onChange={(e) => setPlace(e)} options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                    </div>
                </XCard>

                <XCard overflows={true} className="mt-8" header={<XCardHeader>Custom Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XCustomSelectInput label="Default" value={place} onChange={(e) => setPlace(e)}
                                            options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                        <XCustomSelectInput label="Default With Errors" value={place} onChange={(e) => setPlace(e)}
                                            errors={["This field is required."]}
                                            options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                        <XCustomSelectInput label="Simple options" value={placeFour} onChange={(e) => setPlaceFour(e)}
                                            options={simplePlaces} valueResolver={null} labelResolver={null} />
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{placeFour}</pre>
                        </div>
                        <XCustomSelectInput label="Multiple values" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">
                                {JSON.stringify(selectedPlaces)}
                            </pre>
                        </div>
                        <XCustomSelectInput label="Multiple values with custom value" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            valueResolver="label"
                                            options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">
                                {JSON.stringify(selectedPlaces)}
                            </pre>
                        </div>
                        <XCustomSelectInput label="Multiple values with simple options" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            valueResolver={null}
                                            labelResolver={null}
                                            options={simplePlaces}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">
                                {JSON.stringify(selectedPlaces)}
                            </pre>
                        </div>
                    </div>
                </XCard>

                <XCard overflows={true} className="mt-8" header={<XCardHeader>Searchable Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XSearchableSelectInput label="Default" value={place} onChange={(e) => setPlace(e)}
                                                options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">{place}</pre>
                        </div>
                        <XSearchableSelectInput label="Default" value={selectedPlaces} onChange={(e) => setSelectedPlaces(e)}
                                                multiple={true}
                                                options={places}/>
                        <div>
                            <label htmlFor="output" className="text-sm">Output:</label>
                            <pre className="rounded-md bg-indigo-50 p-4 text-xs">
                                {JSON.stringify(selectedPlaces)}
                            </pre>
                        </div>
                    </div>
                </XCard>
            </div>
        </>
    )
}
