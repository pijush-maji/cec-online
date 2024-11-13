import { useLocation } from "react-router-dom";
import { buildNewVisitModel } from "../util/Util";
import Header from "./Header";
import DataIntake from "./DataIntake";
import { signData } from "./CecConstants";

const NewVisit = () =>{
    document.title = "New Visit"
    const {state} = useLocation();
    console.log(state);
    const patientDetails = buildNewVisitModel(state);
    return(
        <>
            <Header />
            { patientDetails!==undefined &&
                <DataIntake patientData={patientDetails} signData={signData} />}
        </>
    )
}

export default NewVisit;