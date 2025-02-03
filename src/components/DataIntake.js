import { useEffect, useState } from 'react';
import './DataIntake.css';
import {
    addSphereData, dataObj, distanceCylinderData,
    distanceSphereData, medicineList, medicineObj
} from './CecConstants';
import MedicineIntake from './MedicineIntake';
import { useNavigate } from 'react-router-dom';
import plus from "./plus.png";
import edit from "./edit-text.png";
import save from "./save.png";
import leftArrow from "./icons/left-arrow.png";
import rightArrow from "./icons/right-arrow.png";
import {buildRxDataForNewVisit, buildVaDataForNewVisit} from "../util/Util";

const DataIntake = (props) => {

    const [formData, setFormData] = useState(props.patientData || dataObj);
    const [med, setMed] = useState(medicineObj);
    const [medList, setMedList] = useState(props.patientData.medList);
    const [sign, setSign] = useState(props.signData)
    const [hlpTxt,setHlpTxt] = useState("");
    const [enableHlpTxt, setEnableHlpTxt] = useState(false);
    const [hlpTxtLeftAligned, setHlpTxtLeftAligned] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:9091/getHelpText", {
            method: 'Get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data=>data.json())
        .then(data=>setHlpTxt(data.text))
        .catch(err=>setHlpTxt(""));
    },[formData])

    const handleFormDataChange = (e) => {
        const { name, value } = e.target
        setFormData(prvData => {
            return {
                ...prvData,
                [name]: value
            }
        })
    }

    const handleSignChange = (e) => {
        const { name, value } = e.target
        setSign(prvData => {
            return {
                ...prvData,
                [name]: value
            }
        })
    }
    const handleHlpTxtChange = (e) =>{
        setHlpTxt(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.medList = medList;
        //add validation for distanceReAxis and distanceLeAxis range 0-180
        if (formData.patientName === "" || formData.patientName === " ") {
            alert("Patient Name is blank!");
            return;
        }
        // if (formData.ageYear === "" || formData.ageYear === " ") {
        //     if (formData.ageMonth === "" || formData.ageMonth === " ") {
        //         alert("Patient age is blank!");
        //         return;
        //     }
        // }
        if (formData.gender === "" || formData.gender === " ") {
            alert("Patient Gender is blank!");
            return;
        }
        if (formData.distanceReSphere !== "" && formData.distanceReSphere !== "N/A" && formData.distanceReSphere !== "0.00") {
            formData.distanceReSphere = sign.signReSphr + formData.distanceReSphere;
        }
        if (formData.distanceLeSphere !== "" && formData.distanceLeSphere !== "N/A" && formData.distanceLeSphere !== "0.00")
            formData.distanceLeSphere = sign.signLeSphr + formData.distanceLeSphere;
        if (formData.distanceReCylinder !== "" && formData.distanceReCylinder !== "N/A" && formData.distanceReCylinder !== "0.00")
            formData.distanceReCylinder = sign.signReCyln + formData.distanceReCylinder;
        if (formData.distanceLeCylinder !== "" && formData.distanceLeCylinder !== "N/A" && formData.distanceLeCylinder !== "0.00")
            formData.distanceLeCylinder = sign.signLeCyln + formData.distanceLeCylinder;

        fetch("http://localhost:9091/save", {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(data => data.json())
            .then(json => navigate("/saved", { state: json }))
            .catch(err=>alert("Error in saving data."))

    }

    const saveHlpTxt = (e) => {
        setEnableHlpTxt(false);
        fetch("http://localhost:9091/saveHelpText", {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: hlpTxt
        })
    }

    const fetchVaDetails = (e) =>{
        e.preventDefault();
        const vaData = buildVaDataForNewVisit(props.lastVisitedData);
        setFormData(prvData=>{
            const obj = Object.assign(formData,vaData);
            return{
                ...prvData,obj
            }
        });
    }

    const fetchRxSpec = (e) =>{
        e.preventDefault();
        const rxSpec = buildRxDataForNewVisit(props.lastVisitedData);        
        setFormData(prvData=>{
            const obj = Object.assign(formData,rxSpec);
            return{
                ...prvData,obj
            }
        });
    }

    const createSelectTag = (name, range, value) => {
        return (
            <select id={name} name={name} className="form-select"
                onChange={handleFormDataChange} value={value}>
                {range.map(data => {
                    return (
                        <option key={data} value={data}>{data}</option>
                    )
                })}
            </select>
        )
    }

    const addMedicine = () => {
        setMedList(prvData => {
            if (med.medName === "")
                return [...prvData];
            return [
                ...prvData,
                med
            ]
        })
        setMed(medicineObj);
    }
    const handleMedChange = (e) => {
        const { name, value } = e.target;
        setMed(prvData => {
            return {
                ...prvData,
                [name]: value
            }
        });
    }
    const removeMedicine = (med) => {
        setMedList(prvData => {
            const temp = prvData;
            const temp1 = temp.filter(m => m !== med)
            return temp1;
        });

    }

    const print = () => {
        navigate("/printprsc", { state: props.patientData })
    }

    return (
        <>
            <div className="card" style={{ backgroundColor: "aliceblue" }}>
                <div className="card-body">
                    <h5 className="card-title">Patient Details Form</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="patientId" className="form-label">Patient Id</label>
                                <input type="text" id="patientId" name='patientId' className="form-control" value={formData.patientId}
                                    disabled />
                            </div>
                            <div className="col-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="patientName" value={formData.patientName} className="form-control"
                                    onChange={handleFormDataChange} />
                            </div>
                            <div className="col-1">
                                <label htmlFor="year" className="form-label">Age(Year)</label>
                                <input type="number" name="ageYear" className="form-control" placeholder="YY"
                                    max={100} min="0" onChange={handleFormDataChange} value={formData.ageYear} />
                            </div>
                            <div className="col-1">
                                <label htmlFor="month" className="form-label">Age(Month)</label>
                                <input type="number" name="ageMonth" className="form-control" placeholder="MM"
                                    min={0} max={11} onChange={handleFormDataChange} value={formData.ageMonth} />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select id="gender" name="gender" className="form-select"
                                    onChange={handleFormDataChange} value={formData.gender}>
                                    <option value="">Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Others</option>
                                </select>
                            </div>

                        </div>
                        <div className='row mt-2'>
                            <div className='col-6'>
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" name="address"
                                    onChange={handleFormDataChange} value={formData.address} />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name="mobile"
                                    onChange={handleFormDataChange} value={formData.mobile} />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="dateOfVisit" className="form-label">Date of Visit</label>
                                <input type="date" className="form-control" id="dateOfVisit" name="dateOfVisit"
                                    onChange={handleFormDataChange} value={formData.dateOfVisit} />
                            </div>

                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label htmlFor="adtnInfo" className="form-label">Additional Info</label>
                                <textarea rows="4" className="form-control" name="careOf" placeholder='Care of'
                                    onChange={handleFormDataChange} value={formData.careOf}></textarea>                                
                            </div>
                            <div className='col'>
                            {props.lastVisitedData!==undefined && <button onClick={fetchVaDetails} className="mt-3 btn btn-primary">Fetch From Last Visit</button>}
                                <h6>V<sub>A</sub> Data</h6>
                                <table className='table table-bordered border-dark'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{ width: "7rem" }}>V<sub>A</sub></th>
                                            <th>Dist</th>
                                            <th>pH</th>
                                            <th>Near</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>RE</th>
                                            <td rowSpan='2' className='vertical-center'>
                                                <select id="va" name="va" className="form-select"
                                                    onChange={handleFormDataChange} value={formData.va}>
                                                    <option value="">Select</option>
                                                    <option value="aided">aided</option>
                                                    <option value="unaided">unaided</option>
                                                </select>
                                            </td>
                                            <td><input type='text' id="vaReDist" name="vaReDist" className='form-control'
                                                onChange={handleFormDataChange} value={formData.vaReDist} /></td>
                                            <td><input type='text' id="vaRePh" name="vaRePh" className='form-control'
                                                onChange={handleFormDataChange} value={formData.vaRePh} /></td>
                                            <td><input type='text' id="vaReNear" name="vaReNear" className='form-control'
                                                onChange={handleFormDataChange} value={formData.vaReNear} /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>LE</th>
                                            <td><input type="text" id="vaLeDist" name="vaLeDist" className="form-control"
                                                value={formData.vaLeDist} onChange={handleFormDataChange} /></td>
                                            <td><input type="text" id="vaLePh" name="vaLePh" className="form-control"
                                                value={formData.vaLePh} onChange={handleFormDataChange} /></td>
                                            <td><input type="text" id="vaLeNear" name="vaLeNear" className="form-control"
                                                value={formData.vaLeNear} onChange={handleFormDataChange} /></td>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}>Remarks</th>
                                            <td colSpan={3}>
                                                <textarea id="vaRemarks" name="vaRemarks" className='form-control' value={formData.vaRemarks}
                                                    onChange={handleFormDataChange} rows={2} style={{ width: "90%" }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {props.lastVisitedData!==undefined && <button onClick={fetchRxSpec} className="mt-3 btn btn-primary">Fetch From Last Visit</button>}
                        <div className='row mt-4'>                        
                            <div className='col'>
                                <table className="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col" colSpan="2">R<span style={{ fontSize: "13px" }}>x</span> Spec</th>
                                            <th scope="col" style={{ width: "16%" }}>SPHERE</th>
                                            <th scope="col">CYLINDER</th>
                                            <th scope="col">AXIS</th>
                                            <th scope="col">PRISM</th>
                                            <th scope="col">V<sub>A</sub></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" rowSpan="2" className='vertical-center'>DISTANCE</th>
                                            <td>RE</td>
                                            <td>
                                                <select className='form-select' id="signReSphr" name="signReSphr" value={sign.signReSphr}
                                                    onChange={handleSignChange} >
                                                    <option value="+">+</option>
                                                    <option value="-">-</option>
                                                </select>
                                                {createSelectTag("distanceReSphere", distanceSphereData, formData.distanceReSphere)}</td>
                                            <td>
                                                <select className='form-select' id="signReCyln" name="signReCyln" value={sign.signReCyln}
                                                    onChange={handleSignChange} >
                                                    <option value="+">+</option>
                                                    <option value="-">-</option>
                                                </select>
                                                {createSelectTag("distanceReCylinder", distanceCylinderData, formData.distanceReCylinder)}</td>
                                            <td><input type='text' id='distanceReAxis' name='distanceReAxis' className='form-control'
                                                value={formData.distanceReAxis} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceRePrism' name='distanceRePrism' className='form-control'
                                                value={formData.distanceRePrism} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceReVa' name='distanceReVa' className='form-control'
                                                value={formData.distanceReVa} onChange={handleFormDataChange} /></td>
                                        </tr>
                                        <tr>
                                            <td>LE</td>
                                            <td>
                                                <select className='form-select' id="signLeSphr" name="signLeSphr" value={sign.signLeSphr}
                                                    onChange={handleSignChange} >
                                                    <option value="+">+</option>
                                                    <option value="-">-</option>
                                                </select>
                                                {createSelectTag("distanceLeSphere", distanceSphereData, formData.distanceLeSphere)}</td>
                                            <td>
                                                <select className='form-select' id="signLeCyln" name="signLeCyln" value={sign.signLeCyln}
                                                    onChange={handleSignChange} >
                                                    <option value="+">+</option>
                                                    <option value="-">-</option>
                                                </select>
                                                {createSelectTag("distanceLeCylinder", distanceCylinderData, formData.distanceLeCylinder)}</td>
                                            <td><input type='text' id='distanceLeAxis' name='distanceLeAxis' className='form-control'
                                                value={formData.distanceLeAxis} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceLePrism' name='distanceLePrism' className='form-control'
                                                value={formData.distanceLePrism} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceLeVa' name='distanceLeVa' className='form-control'
                                                value={formData.distanceLeVa} onChange={handleFormDataChange} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" rowSpan="2" className='vertical-center'>ADD</th>
                                            <td>RE</td>
                                            <td>{createSelectTag("addReSphere", addSphereData, formData.addReSphere)}</td>
                                            <td colSpan="4" rowSpan="4">
                                                <label htmlFor="addInfo" className="form-label">Additional Info</label>
                                                <textarea id='addInfo' name='addInfo' cols="50" rows="4" className='form-control'
                                                    value={formData.addInfo} onChange={handleFormDataChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>LE</td>
                                            <td>{createSelectTag("addLeSphere", addSphereData, formData.addLeSphere)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col'>
                                <table className="table table-bordered border-dark slit-tables">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Right eye</th>
                                            <th scope="col">Left eye</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row' style={{ width: "10%" }}>Eyelids</th>
                                            <td><input type="text" id="eyelidsRe" name="eyelidsRe" value={formData.eyelidsRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="eyelidsLe" name="eyelidsLe" value={formData.eyelidsLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Conjunctiva</th>
                                            <td><input type="text" id="conjunctivaRe" name="conjunctivaRe" value={formData.conjunctivaRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="conjunctivaLe" name="conjunctivaLe" value={formData.conjunctivaLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Sclera</th>
                                            <td><input type="text" id="scleraRe" name="scleraRe" value={formData.scleraRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="scleraLe" name="scleraLe" value={formData.scleraLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Cornea</th>
                                            <td><input type="text" id="corneaRe" name="corneaRe" value={formData.corneaRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="corneaLe" name="corneaLe" value={formData.corneaLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>A/C</th>
                                            <td><input type="text" id="acRe" name="acRe" value={formData.acRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="acLe" name="acLe" value={formData.acLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Irish</th>
                                            <td><input type="text" id="irishRe" name="irishRe" value={formData.irishRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="irishLe" name="irishLe" value={formData.irishLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Pupil</th>
                                            <td><input type="text" id="pupilRe" name="pupilRe" value={formData.pupilRe} onChange={handleFormDataChange} className="form-control" /></td>
                                            <td><input type="text" id="pupilLe" name="pupilLe" value={formData.pupilLe} onChange={handleFormDataChange} className="form-control" /></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col'>
                                        <h5>IOP : </h5>
                                        <span style={{ display: "inline-flex" }}>RE : <input type='text' id="iopRe" name="iopRe" value={formData.iopRe} onChange={handleFormDataChange}
                                            className='form-control' style={{ width: "20%" }} />&nbsp; mmHg</span>
                                        <span className='mt-3' style={{ display: "inline-flex" }}>LE : <input type='text' id="iopLe" name="iopLe" value={formData.iopLe} onChange={handleFormDataChange}
                                            className='form-control' style={{ width: "20%" }} />&nbsp;mmHg</span>
                                    </div>
                                    <div className='col'>
                                        <textarea id="iopReDesc" name="iopReDesc" value={formData.iopReDesc}
                                            onChange={handleFormDataChange} className='form-control iopDesc' />
                                        <textarea id="iopLeDesc" name="iopLeDesc" value={formData.iopLeDesc}
                                            onChange={handleFormDataChange} className='form-control iopDesc' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <h5>Diagnosis : </h5>
                                    <textarea id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleFormDataChange} className='form-control' />
                                </div>
                                <div className='row'>
                                    <h5>Plan/Adv : </h5>
                                    <textarea id="planAdv" name="planAdv" value={formData.planAdv} onChange={handleFormDataChange} className='form-control' rows="4" />
                                </div>
                            </div>
                            <div className='col'>
                                <b>Add Medicine</b><br />
                                <div style={{ display: "inline-flex",  marginTop: "13px" }}>
                                    <select name="eye" value={med.eye} className="form-select"
                                        style={{ width: "25%", height: "37px", marginTop:"35px" }}
                                        onChange={handleMedChange}>
                                        <option value="BE">BE</option>
                                        <option value="LE">RE</option>
                                        <option value="LE">LE</option>
                                    </select>
                                    <input type="text" name="medName" value={med.medName} style={{height: "37px", marginTop:"35px"}}
                                    className="lm-5 form-control" onChange={handleMedChange}
                                        placeholder='Medicine' list="medList" />
                                    <datalist id="medList">
                                        {medicineList.map(m => {
                                            return (
                                                <option key={m} value={m}>{m}</option>
                                            )
                                        })}
                                    </datalist>
                                    <textarea name="medUsage" rows="4" value={med.medUsage} type="text" className="lm-5 form-control" style={{width:"100%"}}
                                        onChange={handleMedChange} ></textarea>
                                    <img src={plus} alt="add" style={{height: "30px", marginTop:"35px"}} className="lm-5 plus-icon" onClick={addMedicine} />
                                </div>
                                <div>
                                    <b>Added Medicines</b>
                                </div>
                                {medList !== null && medList.map((med, inx) => {
                                    return (
                                        <MedicineIntake
                                            key={inx}
                                            med={med}
                                            removeMed={removeMedicine} />
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ float: "right" }}>
                            <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {

                        formData.patientId !== "" &&
                        <div style={{ marginLeft: "89%" }}>
                            <button type="submit" className="mt-3 btn btn-success"
                                onClick={print}>Print</button>
                        </div>}
                        <div className="container mb-5" style={{position:"fixed", bottom:"0", borderStyle:"solid",
                            borderColor: "green", width:"30%", backgroundColor:"#c3da9e",
                            right:!hlpTxtLeftAligned? "0":"" }}>
                            <form>
                                <div style={{float:"right"}}>
                                    {hlpTxtLeftAligned && 
                                    <img src={rightArrow} alt="rightArrow" style={{height: "30px", marginTop:"35px", cursor:"pointer"}} className="me-4 pb-2" onClick={()=>setHlpTxtLeftAligned(false)}/>}
                                    {!hlpTxtLeftAligned && 
                                    <img src={leftArrow} alt="leftArrow" style={{height: "30px", marginTop:"35px", cursor:"pointer"}} className="me-4 pb-2" onClick={()=>setHlpTxtLeftAligned(true)}/>}
                                    <img src={edit} alt="edit" style={{height: "30px", marginTop:"35px", cursor:"pointer"}} className="me-4 pb-2" onClick={()=>setEnableHlpTxt(true)}/>
                                    <img src={save} alt="save" style={{height: "30px", marginTop:"35px", cursor:"pointer"}} className="me-3 pb-2" onClick={saveHlpTxt}/>
                                </div>
                                <textarea disabled={!enableHlpTxt} rows={5} id="hlpTxt" name="hlpTxt" value={hlpTxt} onChange={handleHlpTxtChange} 
                                className='form-control mb-4'/>
                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default DataIntake;