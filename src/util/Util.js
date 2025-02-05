import { dataObj, signData } from "../components/CecConstants";

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
        patientDetails.careOf = patient.careOf;
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

export const buildRxDataForNewVisit = (patient) => {
    let rxSpec = {}
    if(patient!==undefined){
        rxSpec = getSignData(patient);
        rxSpec.distanceReAxis = patient.distanceReAxis;
        rxSpec.distanceRePrism = patient.distanceRePrism;
        rxSpec.distanceReVa = patient.distanceReVa;
        rxSpec.distanceLeAxis = patient.distanceLeAxis;
        rxSpec.distanceLePrism = patient.distanceLePrism;
        rxSpec.distanceLeVa = patient.distanceLeVa;
        rxSpec.addReSphere = patient.addReSphere;
        rxSpec.addLeSphere = patient.addLeSphere;
        rxSpec.addInfo = patient.addInfo
    }
    return rxSpec;
}

export const buildVaDataForNewVisit = (patient) =>{
    let vaData = {}
    if(patient!==undefined){
        vaData.va = patient.va;
        vaData.vaReDist = patient.vaReDist;
        vaData.vaRePh = patient.vaRePh;
        vaData.vaReNear = patient.vaReNear;
        vaData.vaLeDist = patient.vaLeDist;
        vaData.vaLePh = patient.vaLePh;
        vaData.vaLeNear = patient.vaLeNear;
        vaData.vaRemarks = patient.vaRemarks;
    }
    return vaData;
}
