
var today = new Date().toJSON().slice(0, 10);

export const dataObj = {
        patientName: "",
        ageYear: "",
        ageMonth: "",
        gender: "",
        lastVisited: today,
        address: "",
        mobile: "",
        careof: "",
        va: "",
        vaReDist: "",
        vaRePh: "",
        vaReNear: "",
        vaLeDist: "",
        vaLePh: "",
        vaLeNear: "",
        vaRemarks: "",
        distanceReSphere: "",
        distanceReCylinder: "2",
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

    };

export const medicineObj = {
    eye: "",
    medName: "",
    medType: "",
}

export const distanceSphereData = ['', 'N/A', '-20.00', '-18.00', '-16.00','-14.00', '-13.00', '-12.00', '-11.00', 
    '-10.00', '-9.00', '-8.00', '-7.00','-6.00', '-5.50', '-5.00', '-4.50','-4.00', '-3.75', '-3.50', 
    '-3.25', '-3.00', '-2.75', '-2.50', '-2.25', '-2.00', '-1.75', '-1.50', '-1.25', '-1.00', '-0.75', 
    '-0.50', '-0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25', 
    '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.50', '5.00', '5.50', '6.00','7.00', 
    '8.00', '9.00', '10.00', '11.00', '12.00', '13.00', '14.00', '16.00', '18.00', '20.00']

export const distanceCylinderData = ["", "N/A", "-6.00", "-5.50", "-5.00", "-4.50", "-4.00", "-3.50", "-3.25", "-3.00", 
    "-2.75", "-2.50", "-2.25", "-2.00", "-1.75", "-1.50", "-1.25", "-1.00", "-0.75", "-0.50", "-0.25", "0.00", 
    "0.25", "0.50","0.75", "1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "3.25", "3.50",
    "4.00", "4.50", "5.00", "5.50", "6.00"];
export const addSphereData = ["", "N/A", "0.25", "0.50","0.75", "1.00", "1.25", "1.50", "1.75", "2.00", 
    "2.25", "2.50", "2.75", "3.00", "3.25", "3.50"];


