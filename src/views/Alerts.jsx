import {XAlertBanner, XAlertFormError, XButton, XCard, XPageTitle, XToast} from "../lib/index.jsx";
import {CheckCircleIcon, InformationCircleIcon, XMarkIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";

export default function Alerts() {
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
                <XPageTitle>Alerts</XPageTitle>
                <XCard className="mt-8"
                       header={<h3 className="text-base font-semibold leading-6 text-gray-900">Form Errors</h3>}>
                    <XAlertFormError errors={errors} title="There were 2 errors with your form submission."/>
                </XCard>
                <XCard className="mt-8"
                       header={<h3 className="text-base font-semibold leading-6 text-gray-900">Banners</h3>}>
                    <div className="space-y-4">
                        <XAlertBanner className="bg-blue-50"
                                      action={
                                          <a href="#"
                                             className="text-sm whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                                              Details
                                              <span aria-hidden="true"> &rarr;</span>
                                          </a>
                                      }
                                      icon={<InformationCircleIcon className="h-5 w-5 text-blue-400"
                                                                   aria-hidden="true"/>}>
                            <p className="text-sm text-blue-700">A new software update is available. See what’s new in
                                version 2.0.4.</p>
                        </XAlertBanner>
                        {dismissibleBannerVisible && (
                            <XAlertBanner className="bg-green-50"
                                          dismiss={
                                              <div className="-mx-1.5 -my-1.5">
                                                  <button
                                                      onClick={() => setDismissibleBannerVisible(false)}
                                                      type="button"
                                                      className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                                                  >
                                                      <span className="sr-only">Dismiss</span>
                                                      <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                                                  </button>
                                              </div>
                                          }
                                          icon={<CheckCircleIcon className="h-5 w-5 text-green-400"
                                                                 aria-hidden="true"/>}>
                                <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
                            </XAlertBanner>
                        )}
                    </div>
                </XCard>
                <XCard className="mt-8"
                       header={<h3 className="text-base font-semibold leading-6 text-gray-900">Toasts</h3>}>
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
