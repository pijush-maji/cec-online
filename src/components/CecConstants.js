
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
        distanceReSphere: "0",
        distanceReCylinder: "2",
        distanceReAxis: "",
        distanceRePrism: "",
        distanceReVa: "",
        distanceLeSphere: "5",
        distanceLeCylinder: "4.50",
        distanceLeAxis: "",
        distanceLePrism: "",
        distanceLeVa: "",
        addReSphere: "10",
        addLeSphere: "16",
        addInfo: "",
        eyelidsRe: "",
        conjunctivaRe: "",
        scleraRe: "",
        corneaRe: "",
        acRe: "",
        irishRe: "",
        pupilRe: "",
        eyelidsLe: "",
        conjunctivaLe: "",
        scleraLe: "",
        corneaLe: "",
        acLe: "",
        irishLe: "",
        pupilLe: "",
        iopRe: "",
        iopLe: "",
        diagnosis: "",
        planAdv: "",

    };

export const medicineObj = {
    eye: "",
    medName: "",
    medType: "",
    medFreq: "",
    medDuration: ""
}

export const distanceReSphereData = [-0.25,0,0.25,0.50,0.75,1,1.25,1.50,1.75,2,2.25,2.50,2.75,3,3.25,3.50,3.75,4];
export const distanceLeSphereData = [4,4.5,5,5.5,6];
export const addReSphereData = [6,7,8,9,10,11,12,13,14];
export const addLeSphereData = [14,16,18,20];

export const distanceReCylinderData = [0.25,0.50,0.75,1,1.25,1.50,1.75,2,2.25,2.50,2.75,3,3.25,3.50];
export const distanceLeCylinderData = [3.50,4,4.50,5,5.50,6];
