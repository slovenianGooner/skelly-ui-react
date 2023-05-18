import {XCard, XCardHeader, XFileInput, XOutput, XPageTitle} from "../lib/index.jsx";
import {useState} from "react";

export default function File() {
    const [file, setFile] = useState(null)

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XPageTitle>File</XPageTitle>
                <XCard className="mt-8"
                       header={<XCardHeader>Simple</XCardHeader>}>
                    <div className="space-y-4">
                        <XFileInput label="File" onChange={(e) => setFile(e)}/>
                        <XOutput value={file?.name} />

                        <XFileInput label="File With Error" onChange={(e) => setFile(e)}
                                    errors={['The file is required.']}/>
                        <XOutput value={file?.name} />
                    </div>
                </XCard>
            </div>
        </>
    )
}
