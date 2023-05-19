import {XBreadcrumbs, XCard, XCardHeader, XFileInput, XOutput, XPageTitle} from "../lib/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function File() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null)

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XBreadcrumbs breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "File", href: "/file"},
                ]} onClick={(url) => navigate(url)} />
                <XPageTitle className="mt-4">File</XPageTitle>
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
