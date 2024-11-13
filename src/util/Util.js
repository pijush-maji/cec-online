import { dataObj, signData } from "../components/CecConstants";

// export const buildPatientData = (patient,visitId) => {
//     let pData = dataObj;
//     if (patient !== null && patient!==undefined) {
//         console.log(patient);
//         const patientDetails = patient.patientDetails!==undefined? 
//             patient.patientDetails.filter(pd=>pd.visitId===visitId)[0]:{};
//         pData.patientId = patient.patientId;
//         pData.patientName = patient.patientName;
//         pData.dob = patient.dob;
//         pData.gender = patient.gender;
//         pData.address = patient.address;
//         pData.careof = patient.careof;
//         pData.mobile = patient.mobile;
//         pData.acLe = patientDetails.acLe;
//         pData.acRe = patientDetails.acRe;
//         pData.addInfo = patientDetails.addInfo;
//         pData.addLeSphere = patientDetails.addLeSphere;
//         pData.addReSphere = patientDetails.addReSphere;
//         pData.conjunctivaLe = patientDetails.conjunctivaLe;
//         pData.conjunctivaRe = patientDetails.conjunctivaRe;
//         pData.corneaLe = patientDetails.corneaLe;
//         pData.corneaRe = patientDetails.corneaRe;
//         pData.dateOfVisit = patientDetails.dateOfVisit;
//         pData.diagnosis = patientDetails.diagnosis;
//         pData.distanceLeAxis = patientDetails.distanceLeAxis;
//         pData.distanceLeCylinder = generateSignData(1,patientDetails.distanceLeCylinder);
//         pData.distanceLePrism = patientDetails.distanceLePrism;
//         pData.distanceLeSphere = generateSignData(2,patientDetails.distanceLeSphere);
//         pData.distanceLeVa = patientDetails.distanceLeVa;
//         pData.distanceReAxis = patientDetails.distanceReAxis;
//         pData.distanceReCylinder = generateSignData(3,patientDetails.distanceReCylinder);
//         pData.distanceRePrism = patientDetails.distanceRePrism;
//         pData.distanceReSphere = generateSignData(4,patientDetails.distanceReSphere);
//         pData.distanceReVa = patientDetails.distanceReVa;
//         pData.eyelidsLe = patientDetails.eyelidsLe;
//         pData.eyelidsRe = patientDetails.eyelidsRe;
//         pData.iopDesc = patientDetails.iopDesc;
//         pData.iopLe = patientDetails.iopLe;
//         pData.iopRe = patientDetails.iopRe;
//         pData.irishLe = patientDetails.irishLe;
//         pData.irishRe = patientDetails.irishRe;
//         pData.medList = patientDetails.medList;
//         pData.planAdv = patientDetails.planAdv;
//         pData.pupilLe = patientDetails.pupilLe;
//         pData.pupilRe = patientDetails.pupilRe;
//         pData.scleraLe = patientDetails.scleraLe;
//         pData.scleraRe = patientDetails.scleraRe;
//         pData.va = patientDetails.va;
//         pData.vaLeDist = patientDetails.vaLeDist;
//         pData.vaLeNear = patientDetails.vaLeNear;
//         pData.vaLePh = patientDetails.vaLePh;
//         pData.vaReDist = patientDetails.vaReDist;
//         pData.vaReNear = patientDetails.vaReNear;
//         pData.vaRePh = patientDetails.vaRePh;
//         pData.vaRemarks = patientDetails.vaRemarks;
//     }
//     return pData;
// }
// let signD = signData;
// const generateSignData = (signNum,field) =>{
//     if(field!=="" && field!==undefined){
//         if(signNum===1)
//             signD.signLeCyln = field.slice(0,1);
//         else if(signNum===2)
//             signD.signLeSphr = field.slice(0,1);
//         else if(signNum===3)
//             signD.signReCyln = field.slice(0,1);
//         else if(signNum===4)
//             signD.signReSphr = field.slice(0,1);
//         return field.slice(1);
//     }
//     return "";
// }

export const getSignData = (patientDetails) =>{
    let data = {
        signData: signData
    };
    if(patientDetails!==undefined && patientDetails!==null){
        data.signData.signReSphr = patientDetails.distanceReSphere.slice(0,1)
        data.distanceReSphere =patientDetails.distanceReSphere.slice(1);

        data.signData.signLeSphr = patientDetails.distanceLeSphere.slice(0,1)
        data.distanceLeSphere =patientDetails.distanceLeSphere.slice(1);

        data.signData.signReCyln = patientDetails.distanceReCylinder.slice(0,1)
        data.distanceReCylinder =patientDetails.distanceReCylinder.slice(1);

        data.signData.signLeCyln = patientDetails.distanceLeCylinder.slice(0,1)
        data.distanceLeCylinder =patientDetails.distanceLeCylinder.slice(1);

    }
    return data;
}

export const buildNewVisitModel = (patient) =>{
    let patientDetails = dataObj;
    if(patient!==undefined){
        const age = getAge(patient.dob)
        patientDetails.address = patient.address;
        patientDetails.careof = patient.careof;
        patientDetails.ageYear = age.ageY;
        patientDetails.ageMonth = age.ageM;
        patientDetails.gender = patient.gender;
        patientDetails.mobile = patient.mobile;
        patientDetails.patientId = patient.patientId;
        patientDetails.patientName = patient.patientName;
    }
    return patientDetails;
}

export const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let ageY = today.getFullYear() - birthDate.getFullYear();
    let ageM = today.getMonth() - birthDate.getMonth();
    if (ageM < 0 ) {
       ageM+=12;
       ageY--;
    }
    return {ageY:ageY,ageM:ageM};
}
