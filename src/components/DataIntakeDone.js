import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

const DataIntakeDone = () => {
    document.textContent = "Patient Saved"
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(state===undefined || state===null)
            navigate("/")
    },[navigate,state])

    const gotToHome = () => {
        navigate("/")
    }

    return (
        <>
            <Header />
            <div className="patient-sum">
                <div className="card" style={{ marginTop: "8%", width: "50%", marginLeft: "25%", paddingBottom:"2%" }}>
                    <div className="card-body text-center m-auto">
                        <div>
                            {state?.msg}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <button type="submit" onClick={gotToHome}
                            style={{ width: "10%", margin: "auto" }} className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataIntakeDone;