import { useState } from 'react';
import './DataIntake.css';

const DataIntake = () => {

    var today = new Date().toJSON().slice(0, 10);



    const [name, setName] = useState('');
    const [ageYear, setAgeYear] = useState(0);
    const [ageMonth, setAgeMonth] = useState('0');
    const [gender, setGender] = useState('Select');
    const [lastVisited, setLastVisited] = useState(today);
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [careof, setCareof] = useState('');



    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleAgeYearChange = (e) => {
        setAgeYear(e.target.value);
    }
    const handleAgeMonthChange = (e) => {
        setAgeMonth(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleLastVisitedChange = (e) => {
        setLastVisited(e.target.value);
    }
    const handleAddressChange = (e) =>{
        setAddress(e.target.value);
    }
    const handleMobileChange = (e) =>{
        setMobile(e.target.value);
    }
    const handleCareofChange = (e) =>{
        setCareof(e.target.value);
    }


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patient Details Form</h5>
                    <form >
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="patientId" className="form-label">Patient Id</label>
                                <input type="text" id="patientId" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={name} className="form-control" onChange={handleNameChange} />
                            </div>
                            <div className="col-1">
                                <label htmlFor="year" className="form-label">Age(Year)</label>
                                <input type="number" value={ageYear} className="form-control" placeholder="YY"
                                    max={100} min="0" onChange={handleAgeYearChange} />
                            </div>
                            <div className="col-1">
                                <label htmlFor="month" className="form-label">Age(Month)</label>
                                <input type="number" value={ageMonth} className="form-control" placeholder="MM"
                                    min={0} max={11} onChange={handleAgeMonthChange} />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select id="gender" value={gender} className="form-select" onChange={handleGenderChange}>
                                    <option value="Select">Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Others</option>
                                </select>
                            </div>
                            <div className='col-2'>
                                <label htmlFor="lastVisited" className="form-label">Last Visited</label>
                                <input type="date" value={lastVisited} className="form-control" onChange={handleLastVisitedChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" value={address} className="form-control" onChange={handleAddressChange} />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="text" value={mobile} className="form-control" onChange={handleMobileChange} />
                            </div>

                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label htmlFor="adtnInfo" className="form-label">Additional Info</label>
                                <textarea value={careof} rows="4" className="form-control" onChange={handleCareofChange}></textarea>
                            </div>
                            <div className='col'>
                                <h6>V<sub>A</sub> Data</h6>
                                <table className='table table-bordered border-dark'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>V<sub>A</sub></th>
                                            <th>Dist</th>
                                            <th>pH</th>
                                            <th>New?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>RE</th>
                                            <td rowSpan='2' className='vertical-center'>
                                                <select id="gender" name="gender" className="form-select" value="Select">
                                                    <option value="Select">Select</option>
                                                    <option value="aided">aided</option>
                                                    <option value="unaided">unaided</option>
                                                </select>
                                            </td>
                                            <td></td>
                                            <td>i/p</td>
                                            <td>i/p</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>LE</th>
                                            <td>i/p</td>
                                            <td>i/p</td>
                                            <td>i/p</td>
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
                                            <th scope="col">SPHERE</th>
                                            <th scope="col">CYLINDER</th>
                                            <th scope="col">AXIS</th>
                                            <th scope="col">PRISM</th>
                                            <th scope="col">V/A</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" rowSpan="2" className='vertical-center'>DISTANCE</th>
                                            <td>RE</td>
                                            <td><input type='text' name='reSphere' className='form-control' /></td>
                                            <td><input type='text' name='reCylinder' className='form-control' /></td>
                                            <td><input type='text' name='reAxis' className='form-control' /></td>
                                            <td><input type='text' name='rePrism' className='form-control' /></td>
                                            <td><input type='text' name='reVA' className='form-control' /></td>
                                        </tr>
                                        <tr>
                                            <td>LE</td>
                                            <td><input type='text' name='leSphere' className='form-control' /></td>
                                            <td><input type='text' name='leCylinder' className='form-control' /></td>
                                            <td><input type='text' name='leAxis' className='form-control' /></td>
                                            <td><input type='text' name='lePrism' className='form-control' /></td>
                                            <td><input type='text' name='leVA' className='form-control' /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" rowSpan="2" className='vertical-center'>ADD</th>
                                            <td>RE</td>
                                            <td><input type='text' name='areSphere' className='form-control' /></td>
                                            <td colSpan="4" rowSpan="4">
                                                <label htmlFor="adtnRx" className="form-label">Additional Info</label>
                                                <textarea name='adtnRx' cols="50" rows="4" className='form-control' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>LE</td>
                                            <td><input type='text' name='aleSphere' className='form-control' /></td>
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
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Conjunctiva</th>
                                            <td>long text with proper description and long text with another description
                                                sldkfjs flsdjflsjdf lskjf lakjsdf kdjsflka dflasd f
                                            </td>
                                            <td>adsfjaslkdjflasjdf lkjasldkfjasl lksadjfl sadlkf j</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Sclera</th>
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Cornea</th>
                                            <td>test</td>
                                            <td>hg lg kjh kkjh </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>A/C</th>
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Irish</th>
                                            <td>hjg jhg jhgh j jhgjhg j jhg jh jhgj j jh </td>
                                            <td>test</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Pupil</th>
                                            <td>test</td>
                                            <td>test</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <h5>IOP : </h5>
                                    <span style={{ display: "inline-flex" }}>RE : <input type='text' className='form-control' style={{ width: "20%" }} />&nbsp; mmHg</span>
                                    <span className='mt-3' style={{ display: "inline-flex" }}>LE : <input type='text' className='form-control' style={{ width: "20%" }} />&nbsp;mmHg</span>
                                </div>
                                <div className='row'>
                                    <h5>Diagnosis : </h5>
                                    <textarea className='form-control' />
                                </div>
                                <div className='row'>
                                    <h5>Plan/Adv : </h5>
                                    <textarea className='form-control' rows="4" />
                                </div>
                            </div>
                            <div className='col'>
                                medicineList
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