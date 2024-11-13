import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DataIntakeDone = () => {
    document.textContent = "Patient Saved"
    const { state } = useLocation();
    const navigate = useNavigate();

    const btn = useRef(null);

    useEffect(() => {
        btn.current?.click();
        
    }, [])

    const gotToHome = () => {
        navigate("/")
    }

    return (
        <>
            <button style={{ display: "none" }} ref={btn} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Modal Button
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            {state?.msg}
                            <button type="button" className="btn btn-primary mt-4" data-bs-dismiss="modal"
                                onClick={gotToHome} style={{ marginLeft: "44%" }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataIntakeDone;