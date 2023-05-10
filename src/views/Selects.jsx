import {XCard, XCardHeader, XPageTitle} from "../lib/index.jsx";

export default function Selects() {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>Selects</XPageTitle>

                <XCard className="mt-8" header={<XCardHeader>Simple Select</XCardHeader>}>
                    <div className="space-y-4">
                        Demo
                    </div>
                </XCard>
            </div>
        </>
    )
}
