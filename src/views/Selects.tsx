import {
    XBreadcrumbs,
    XCard,
    XCardHeader,
    XCustomSelectInput,
    XOutput,
    XPageTitle,
    XSearchableSelectInput,
    XSelectInput
} from "../lib";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Selects() {
    const navigate = useNavigate();

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
                <XBreadcrumbs breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "Selects", href: "/selects"},
                ]} onClick={(url) => navigate(url)} />
                <XPageTitle className="mt-4">Selects</XPageTitle>

                <XCard className="mt-8" header={<XCardHeader>Simple Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XSelectInput label="Default" value={place} onChange={(e) => setPlace(e)} options={places}/>
                        <XOutput value={place} />

                        <XSelectInput label="Custom value resolver" value={placeTwo} onChange={(e) => setPlaceTwo(e)}
                                      options={places}
                                      valueResolver="label"/>
                        <XOutput value={placeTwo} />

                        <XSelectInput label="Custom label and value resolvers" value={placeThree}
                                      onChange={(e) => setPlaceThree(e)}
                                      options={places}
                                      labelResolver={(option) => 'Place: ' + option.label}
                                      valueResolver={(option) => 'Value: ' + option.value}
                        />
                        <XOutput value={placeThree} />

                        <XSelectInput label="Simple options" value={placeFour} onChange={(e) => setPlaceFour(e)}
                                      options={simplePlaces}
                                      valueResolver={null} labelResolver={null}/>
                        <XOutput value={placeFour} />

                        <XSelectInput label="Label as a placeholder" labelAsPlaceholder={true} value={place}
                                      onChange={(e) => setPlace(e)} options={places} hasEmptyState={false}/>
                        <XOutput value={place} />

                        <XSelectInput label="With Errors" errors={["This field is required."]} value={place}
                                      onChange={(e) => setPlace(e)} options={places}/>
                        <XOutput value={place} />
                    </div>
                </XCard>

                <XCard overflows={true} className="mt-8" header={<XCardHeader>Custom Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XCustomSelectInput label="Default" value={place} onChange={(e) => setPlace(e)}
                                            options={places}/>
                        <XOutput value={place} />

                        <XCustomSelectInput label="Default With Errors" value={place} onChange={(e) => setPlace(e)}
                                            errors={["This field is required."]}
                                            options={places}/>
                        <XOutput value={place} />

                        <XCustomSelectInput label="Simple options" value={placeFour} onChange={(e) => setPlaceFour(e)}
                                            options={simplePlaces} valueResolver={null} labelResolver={null} />
                        <XOutput value={placeFour} />

                        <XCustomSelectInput label="Multiple values" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            options={places}/>
                        <XOutput value={JSON.stringify(selectedPlaces)} />

                        <XCustomSelectInput label="Multiple values with custom value" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            valueResolver="label"
                                            options={places}/>
                        <XOutput value={JSON.stringify(selectedPlaces)} />

                        <XCustomSelectInput label="Multiple values with simple options" value={selectedPlaces}
                                            onChange={(e) => setSelectedPlaces(e)}
                                            multiple={true}
                                            valueResolver={null}
                                            labelResolver={null}
                                            options={simplePlaces}/>
                        <XOutput value={JSON.stringify(selectedPlaces)} />
                    </div>
                </XCard>

                <XCard overflows={true} className="mt-8" header={<XCardHeader>Searchable Select</XCardHeader>}>
                    <div className="space-y-4">
                        <XSearchableSelectInput label="Default" value={place} onChange={(e) => setPlace(e)}
                                                options={places}/>
                        <XOutput value={place} />

                        <XSearchableSelectInput label="Default" value={selectedPlaces} onChange={(e) => setSelectedPlaces(e)}
                                                multiple={true}
                                                options={places}/>
                        <XOutput value={JSON.stringify(selectedPlaces)} />
                    </div>
                </XCard>
            </div>
        </>
    )
}
