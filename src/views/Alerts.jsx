import {
    XAlertBanner,
    XAlertFormError,
    XBreadcrumbs,
    XButton,
    XCard,
    XCardHeader,
    XPageTitle,
    XToast
} from "../lib/index.jsx";
import {CheckCircleIcon, InformationCircleIcon, XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Alerts() {
    const navigate = useNavigate();

    const errors = {
        username: ["The username field is required."],
        password: ["Password is not valid."],
    }

    const [dismissibleBannerVisible, setDismissibleBannerVisible] = useState(true)
    const [successToastVisible, setSuccessToastVisible] = useState(false)
    const [errorToastVisible, setErrorToastVisible] = useState(false)

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XBreadcrumbs breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "Alerts", href: "/alerts"},
                ]} onClick={(url) => navigate(url)} />
                <XPageTitle className="mt-4">Alerts</XPageTitle>
                <XCard className="mt-8"
                       header={<XCardHeader>Form Errors</XCardHeader>}>
                    <XAlertFormError errors={errors} title="There were 2 errors with your form submission."/>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Banners</XCardHeader>}>
                    <div className="space-y-4">
                        <XAlertBanner className="bg-blue-50 dark:bg-gray-800"
                            action={
                                <div className="-mx-1.5 -my-1.5">
                                    <a href="#"
                                        className="text-sm rounded-md p-1.5 whitespace-nowrap font-medium text-blue-500 hover:text-blue-400 focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-50 dark:focus:ring-offset-gray-800 focus:outline-none">
                                        Details
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            }
                            icon={<InformationCircleIcon className="h-5 w-5 text-blue-400 dark:text-blue-500"
                                aria-hidden="true" />}>
                            <p className="text-sm text-blue-500">A new software update is available. See what’s new in
                                version 2.0.4.</p>
                        </XAlertBanner>
                        {dismissibleBannerVisible && (
                            <XAlertBanner className="bg-green-50 dark:bg-gray-800"
                                dismiss={
                                    <div className="-mx-1.5 -my-1.5">
                                        <button
                                            onClick={() => setDismissibleBannerVisible(false)}
                                            type="button"
                                            className="inline-flex rounded-md p-1.5 text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">Dismiss</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                                        </button>
                                    </div>
                                }
                                icon={<CheckCircleIcon className="h-5 w-5 text-green-600"
                                    aria-hidden="true"/>}>
                                <p className="text-sm text-green-600">Successfully uploaded</p>
                            </XAlertBanner>
                        )}
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<XCardHeader>Toasts</XCardHeader>}>
                    <div className="space-x-4">
                        <XButton onClick={() => setSuccessToastVisible(true)}>Show success toast</XButton>
                        <XButton onClick={() => setErrorToastVisible(true)}>Show error toast</XButton>
                    </div>
                </XCard>
            </div>

            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {successToastVisible &&
                        <XToast shown={successToastVisible} hideAfter={3000}
                                onHide={() => setSuccessToastVisible(false)} style="success">
                            Successfully saved! Hiding after 3s.
                        </XToast>
                    }

                    {errorToastVisible &&
                        <XToast hideAfter={5000} onHide={() => setErrorToastVisible(false)} style="error">
                            Error saving! Hiding after 5s.
                        </XToast>
                    }
                </div>
            </div>
        </>
    )
}
