import {XAlertBanner, XBreadcrumbs, XListInput, XPageTitle, XTextInput} from "../lib/index.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ListInputs() {
    const navigate = useNavigate();

    // Input consists of an array of people with a name, surname, and an array of phone numbers
    const [people, setPeople] = useState([
        {
            name: "John",
            surname: "Doe",
            phones: [{ value: '123456789' }, { value: '987654321' }]
        },
        {
            name: "Jane",
            surname: "Doe",
        },
        {
            name: "John",
            surname: "Smith",
            phones: [{ value: '123456789' }, { value: '987654321' }]
        },
        {
            name: "Jane",
            surname: "Smith",
        }
    ]);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-10">
            <XBreadcrumbs breadcrumbs={[
                {label: "Home", href: "/"},
                {label: "List Inputs", href: "/list-inputs"},
            ]} onClick={(url) => navigate(url)} />
            <XPageTitle className="mt-4">List Inputs</XPageTitle>

            <XListInput className="mt-8" collapsed={true} value={people} onChange={(e) => setPeople(e)}
                        emptyValue={{name: '', surname: '', phones: []}}>
                {({ item, setItem }) => (
                    <div className="space-y-2">
                        <XTextInput label="Name" defaultValue={item.name} onChange={(e) => setItem('name', e.target.value)}/>
                        <XTextInput label="Surname" defaultValue={item.surname} onChange={(e) => setItem('surname', e.target.value)}/>
                        <div>
                            <label htmlFor="phones" className="text-sm">Phones:</label>
                            <XListInput className="mt-2" value={item.phones} onChange={(e) => setItem('phones', e)} emptyValue={{ value: '' }}>
                                {({ item, setItem }) => (
                                    <XTextInput defaultValue={item.value} onChange={(e) => setItem('value', e.target.value)}/>
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
