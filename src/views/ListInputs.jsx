import {XAlertBanner, XListInput, XPageTitle, XTextInput} from "../lib/index.jsx";
import {useState} from "react";

export default function ListInputs() {
    // Input consists of an array of people with a name, surname, and an array of phone numbers
    const [people, setPeople] = useState([
        {
            name: "John",
            surname: "Doe",
            phones: ['123456789', '987654321']
        },
        {
            name: "Jane",
            surname: "Doe",
        },
        {
            name: "John",
            surname: "Smith",
            phones: ['123456789']
        },
        {
            name: "Jane",
            surname: "Smith",
        }
    ]);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <XPageTitle>List Inputs</XPageTitle>

            <XAlertBanner className="bg-red-50 text-red-500 mt-8">
                <div className="text-sm">
                    Known issues:
                    <ul className="list-disc list-inside">
                        <li>When moving a nested input list item does not update the view, just the data.</li>
                    </ul>
                </div>
            </XAlertBanner>

            <XListInput className="mt-8" collapsed={false} value={people} onChange={(e) => setPeople(e)}
                        emptyValue={{name: '', surname: '', phones: []}}>
                {({ item, setItem }) => (
                    <div className="space-y-2">
                        <XTextInput label="Name" defaultValue={item.name} onChange={(e) => setItem('name', e.target.value)}/>
                        <XTextInput label="Surname" defaultValue={item.surname} onChange={(e) => setItem('surname', e.target.value)}/>
                        <div>
                            <label htmlFor="phones" className="block text-sm font-medium leading-6">Phones</label>
                            <XListInput label="Phones" value={item.phones} onChange={(e) => setItem('phones', e)} singleValue={true}>
                                {({ item, setItem }) => (
                                    <XTextInput defaultValue={item} onChange={(e) => setItem(e.target.value)}/>
                                )}
                            </XListInput>
                        </div>
                    </div>
                )}
            </XListInput>

            <div className="mt-8">
                <label htmlFor="output" className="text-sm">Output:</label>
                <pre className="rounded-md bg-indigo-50 p-4 text-xs">{JSON.stringify(people, undefined, 2)}</pre>
            </div>
        </div>
    )
}
