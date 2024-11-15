import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const PatientSummary = () => {
    document.title = "Patient Summary"
    const [patient, setPatient] = useState({});
    const { patientId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const getPatient = async () => {
            const res = await fetch(`http://localhost:9091/getPatient/${patientId}`, {
                method: 'Get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setPatient(data.patients[0]);
        }
        getPatient();
    }, [patientId])

    

    const openUpdateForm = (visitId) => {
        navigate(`${visitId}`)
    }

    const addNewVisit = () =>{
        navigate("newVisit",{state:patient})
    }

    return (
        <>
            <Header />
            <div className="patient-sum">
                <div className="card m-4">
                    <div className="card-body mt-4">
                        <div className="row">
                            <div className="col">
                                <div className="ps-headers">Patient Id</div>
                                <div>{patient.patientId}</div>
                            </div>
                            <div className="col">
                                <div className="ps-headers">Patient Name</div>
                                <div>{patient.patientName}</div>
                            </div>
                            <div className="col">
                                <div className="ps-headers">Patient Mobile</div>
                                <div>{patient.mobile}</div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="ps-headers">Patient DOB</div>
                                <div>{patient.dob}</div>
                            </div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row mt-4">                    
                            <button type="submit" onClick={addNewVisit}
                            style={{width:"10%",margin:"auto"}} className="btn btn-primary">New Visit</button>
                        </div>
                    </div>
                </div>
                <div className="card m-4">
                    <div className="card-body mt-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Visit Id</th>
                                    <th scope="col">Date of Visit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patient.patientDetails !== undefined && patient.patientDetails
                                    .sort((p1,p2)=>p2.visitId - p1.visitId)
                                    .map(visit => {
                                    return (
                                        <tr key={visit.visitId}>
                                            <th scope="row"
                                                style={{ textDecoration: "underline", cursor: "pointer" }}
                                                onClick={() => openUpdateForm(visit.visitId)}
                                            >{visit.visitId}</th>
                                            <td>{visit.dateOfVisit}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PatientSummary;