import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";

const SearchRes = () => {
    document.title = "Search"
    const [result, setResult] = useState({})
    const navigate = useNavigate();
    const { query } = useParams();
    useEffect(() => {
        const searchPatient = async () => {
            const res = await fetch("http://localhost:9091/search", {
                method: 'Post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    searchText: query
                })
            });
            const data = await res.json();
            setResult(data);
    
        }
        searchPatient();
    }, [query])

    
    const openPatientView = (patient) =>{
        navigate(`/patients/${patient.patientId}`);
    }

    let ele = (
        <div className="card text-center">
            <div className="card-body">
                {result.errorMsg}
            </div>
        </div>);
    if (!result.errorFlag) {
        let patients = result.patients;
        ele = (
            <div className="card text-center">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Prtient Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Dob</th>
                                <th scope="col">Last Visited</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients !== undefined && patients.map(patient => {
                                return (
                                    <tr key={patient.patientId}>
                                        <th scope="row"
                                        style={{textDecoration:"underline",cursor:"pointer"}}
                                        onClick={()=>openPatientView(patient)}>{patient.patientId}</th>
                                        <td>{patient.patientName}</td>
                                        <td>{patient.dob}</td>
                                        <td>{patient.patientDetails[patient.patientDetails.length-1].dateOfVisit}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>);
    }
    return (
        <>
            <Header />
            <div style={{ margin: "10px", marginTop: "70px" }}>
                {ele}
            </div>
        </>
    )
}

export default SearchRes;