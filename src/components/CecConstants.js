
var today = new Date().toJSON().slice(0, 10);

export const dataObj = {
    patientId: "",
    patientName: "",
    ageYear: "",
    ageMonth: "",
    // dob: "",
    gender: "",
    dateOfVisit: today,
    address: "",
    mobile: "",
    careof: "",
    visitId: "",
    va: "",
    vaReDist: "",
    vaRePh: "",
    vaReNear: "",
    vaLeDist: "",
    vaLePh: "",
    vaLeNear: "",
    vaRemarks: "",
    distanceReSphere: "",
    distanceReCylinder: "",
    distanceReAxis: "",
    distanceRePrism: "N/A",
    distanceReVa: "",
    distanceLeSphere: "",
    distanceLeCylinder: "",
    distanceLeAxis: "",
    distanceLePrism: "N/A",
    distanceLeVa: "",
    addReSphere: "",
    addLeSphere: "",
    addInfo: "",
    eyelidsRe: "Flat",
    conjunctivaRe: "Normal",
    scleraRe: "Normal",
    corneaRe: "Clear",
    acRe: "Appears Deep, Well formed",
    irishRe: "Normal Color and Pattern",
    pupilRe: "Round, Regular, Reacting",
    eyelidsLe: "Flat",
    conjunctivaLe: "Normal",
    scleraLe: "Normal",
    corneaLe: "Clear",
    acLe: "Appears Deep, Well formed",
    irishLe: "Normal Color and Pattern",
    pupilLe: "Round, Regular, Reacting, No RAPD",
    iopRe: "",
    iopLe: "",
    iopDesc: "",
    diagnosis: "",
    planAdv: "",
    medList: []

};

export const medicineObj = {
    eye: "",
    medName: "Select",
    medType: ""
}

export const signData = {
    signReSphr: "+",
    signLeSphr: "+",
    signReCyln: "+",
    signLeCyln: "+"
}

export const distanceSphereData = ['', 'N/A', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25',
    '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.50', '5.00', '5.50', '6.00', '7.00',
    '8.00', '9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '16.00', '18.00', '20.00']

export const distanceCylinderData = ["", "N/A", "0.00", "0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", 
    "2.75", "3.00", "3.25", "3.50", "4.00", "4.50", "5.00", "5.50", "6.00"];
export const addSphereData = ["", "N/A", "0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00",
    "2.25", "2.50", "2.75", "3.00", "3.25", "3.50"];

export const medicineList = [
    "para","para1","med1","med2"
]

