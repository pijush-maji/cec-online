import { useEffect, useState } from "react";
import DataIntake from "./DataIntake";
import { useParams } from "react-router-dom";
import { getSignData } from "../util/Util";
import { signData } from "./CecConstants";
import Header from "./Header";

const ModifyPatient = () => {
    document.title = "Modify Patient Data"
    const [patientDetails, setPatientDetails] = useState("");

    const {visitId,patientId} = useParams()

    useEffect(()=>{
        const getPatientVisitData = async () => {
            const res = await fetch(`http://localhost:9091/getVisit/${patientId}/${visitId}`, {
                method: 'Get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setPatientDetails(data);
            const signData = getSignData(data);
            console.log(signData);
            setPatientDetails(prvData =>{
                return{
                    ...prvData,
                    distanceReSphere : signData.distanceReSphere,
                    distanceLeSphere : signData.distanceLeSphere,
                    distanceReCylinder : signData.distanceReCylinder,
                    distanceLeCylinder : signData.distanceLeCylinder
                }
            })
        }
        getPatientVisitData();

    },[])

    

    return (
        <>
            <Header />
            {patientDetails !== "" &&
                <DataIntake patientData={patientDetails} signData={signData} />}
        </>
    )
}

export default ModifyPatient;