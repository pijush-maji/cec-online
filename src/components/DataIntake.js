import { useState } from 'react';
import './DataIntake.css';
import { addSphereData, dataObj, distanceCylinderData, distanceSphereData, medicineObj } from './CecConstants';
import MedicineIntake from './MedicineIntake';

const DataIntake = () => {

    const [formData, setFormData] = useState(dataObj);
    const [med, setMed] = useState(medicineObj);
    const [medList, setMedList] = useState([]);

    const handleFormDataChange = (e) => {
        const { name, value } = e.target
        setFormData(prvData => {
            return {
                ...prvData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        //add validation for distanceReAxis and distanceLeAxis range 0-180
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

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patient Details Form</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="patientId" className="form-label">Patient Id</label>
                                <input type="text" id="patientId" className="form-control" value={1234} disabled />
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
                            <div className='col-2'>
                                <label htmlFor="lastVisited" className="form-label">Last Visited</label>
                                <input type="date" className="form-control" name="lastVisited"
                                    onChange={handleFormDataChange} value={formData.lastVisited} />
                            </div>
                        </div>
                        <div className='row'>
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

                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label htmlFor="adtnInfo" className="form-label">Additional Info</label>
                                <textarea rows="4" className="form-control" name="careof"
                                    onChange={handleFormDataChange} value={formData.careof}></textarea>
                            </div>
                            <div className='col'>
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
                                                <textarea id="vaRemarks" name="vaRemarks" value={formData.vaRemarks}
                                                onChange={handleFormDataChange} rows={2} style={{width:"90%"}}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
                                            <td>{createSelectTag("distanceReSphere", distanceSphereData, formData.distanceReSphere)}</td>
                                            <td>{createSelectTag("distanceReCylinder", distanceCylinderData, formData.distanceReCylinder)}</td>
                                            <td><input type='text' id='distanceReAxis' name='distanceReAxis' className='form-control'
                                                value={formData.distanceReAxis} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceRePrism' name='distanceRePrism' className='form-control'
                                                value={formData.distanceRePrism} onChange={handleFormDataChange} /></td>
                                            <td><input type='text' id='distanceReVa' name='distanceReVa' className='form-control'
                                                value={formData.distanceReVa} onChange={handleFormDataChange} /></td>
                                        </tr>
                                        <tr>
                                            <td>LE</td>
                                            <td>{createSelectTag("distanceLeSphere", distanceSphereData, formData.distanceLeSphere)}</td>
                                            <td>{createSelectTag("distanceLeCylinder", distanceCylinderData, formData.distanceLeCylinder)}</td>
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
                                    <h5>IOP : </h5>
                                    <span style={{ display: "inline-flex" }}>RE : <input type='text' id="iopRe" name="iopRe" value={formData.iopRe} onChange={handleFormDataChange}
                                        className='form-control' style={{ width: "20%" }} />&nbsp; mmHg</span>
                                    <span className='mt-3' style={{ display: "inline-flex" }}>LE : <input type='text' id="iopLe" name="iopLe" value={formData.iopLe} onChange={handleFormDataChange}
                                        className='form-control' style={{ width: "20%" }} />&nbsp;mmHg</span>
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
                                <b>Add Medicine</b><br/>
                                <div style={{ display: "inline-flex", height: "37px", marginTop: "13px" }}>
                                    <select name="eye" value={med.eye} className="form-select" 
                                    style={{width:"18%"}}
                                    onChange={handleMedChange}>
                                        <option value="BE">BE</option>
                                        <option value="LE">RE</option>
                                        <option value="LE">LE</option>
                                    </select>
                                    <select name="medName" value={med.medName} className="lm-5 form-select" onChange={handleMedChange}>
                                        <option value="1">Med1 lkjdlf slkdj sdlfjklsdfj lsdkfjlsf 121 </option>
                                        <option value="2">Med2</option>
                                        <option value="3">Med3</option>
                                    </select>
                                    <input name="medType" value={med.medType} type="text" className="lm-5 form-control" 
                                    style={{width:"25%"}}
                                    onChange={handleMedChange} />
                                    <button type="button" className="lm-5 btn btn-primary" onClick={() => addMedicine()}>ADD</button>
                                </div>
                                <div>
                                    <b>Added Medicines</b>
                                </div>
                                {medList.map((med, inx) => {
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
                            <button style={{ marginRight: "15px" }} className="mt-3 btn btn-secondary">Cancel</button>
                            <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DataIntake;