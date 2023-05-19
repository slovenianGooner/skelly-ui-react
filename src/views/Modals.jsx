import {XBreadcrumbs, XButton, XCard, XCardHeader, XModal, XPageTitle} from "../lib/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Modals() {
    const navigate = useNavigate();

    const [modalWithFooterVisible, setModalWithFooterVisible] = useState(false)
    const [modalWithCloseButtonVisible, setModalWithCloseButtonVisible] = useState(false)
    const [modalDismissableVisible, setModalDismissableVisible] = useState(false)

    const modalContent = (
        <>
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Deactivate account</h3>
            <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Are you sure you want to deactivate your account? All of your data will be permanently removed
                    from our servers forever. This action cannot be undone.
                </p>
            </div>
        </>
    )

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10">
                <XBreadcrumbs breadcrumbs={[
                    {label: "Home", href: "/"},
                    {label: "Modals", href: "/modals"},
                ]} onClick={(url) => navigate(url)} />
                <XPageTitle className="mt-4">Modals</XPageTitle>
                <XCard className="mt-8"
                       header={<XCardHeader>Simple</XCardHeader>}>
                    <div className="space-x-2">
                        <XButton onClick={() => setModalWithFooterVisible(true)}>Modal with footer</XButton>
                        <XModal show={modalWithFooterVisible}
                                footer={
                                    <div className="space-x-2">
                                        <XButton style="secondary"
                                                 onClick={() => setModalWithFooterVisible(false)}>Cancel</XButton>
                                        <XButton style="danger" onClick={() => setModalWithFooterVisible(false)}>Do it!</XButton>
                                    </div>
                                }
                                onHide={() => setModalWithFooterVisible(false)}>
                            {modalContent}
                        </XModal>

                        <XButton onClick={() => setModalWithCloseButtonVisible(true)}>Modal with close button</XButton>
                        <XModal closeButton={true} show={modalWithCloseButtonVisible}
                                onHide={() => setModalWithCloseButtonVisible(false)}>
                            {modalContent}
                        </XModal>

                        <XButton onClick={() => setModalDismissableVisible(true)}>Modal dismissible from outside</XButton>
                        <XModal show={modalDismissableVisible} onHide={() => setModalDismissableVisible(false)} dismissable={true}>
                            {modalContent}
                        </XModal>
                    </div>
                </XCard>
            </div>
        </>
    )
}
