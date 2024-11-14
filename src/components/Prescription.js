import './Prescription.css';
import logo from './ceclogo.PNG';
import arrow_icon from './arrow_icon.PNG';
import Medicine from './Medicine';
import { useLocation } from 'react-router-dom';

const Prescription = () => {


    document.title = "Prescription";

    const { state } = useLocation();

    const medicines = [
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox32", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" },
        { eye: "BE", name: "Ciplox", "type": "e/d", amount: "3t/d", duration: "7days" }
    ]
    let medicineList = [];
    let remainingMedicine = [];
    if (medicines.length > 5) {
        medicineList = medicines.slice(0, 5);
        remainingMedicine = medicines.slice(5);
    } else {
        medicineList = medicines;
    }
    //length 81
    //let name = "Partha Sarathi Pal";
    //length 14
    let age = state?.ageYear + "yr " + state?.ageMonth + "m";
    //len 12
    let gender = "";
    let g = state?.gender;
    if (g === "M") gender = "Male";
    if (g === "F") gender = "Female";
    else gender = "Others"


    return (
        <>
            <div className='' id="prsc">
                <div className="row">
                    <div className="col-9">
                        <div className="doc-title">
                            <div>
                                <div className='title'>
                                    Chinya Eye Care
                                </div>
                                <div>
                                    Get the Best Vision
                                </div>
                            </div>
                            <div className="doc-name" style={{ fontSize: "20px" }}>
                                <span style={{ fontWeight: "500" }}>Aritra Chinya</span>
                                <i> (Consultant Optometrist)</i>
                            </div>
                            <div className="doc-deg">
                                Ph.D. Scholar (Public Health Optometry), Ex- Consultant <br />
                                Optometrist (Ayushman Bharat), Ex-Optometrist (LVPEI, <br />
                                Hyd), Ex-Intern (LVPEI, Hyd), MPH (Kol), B.Optom(Kol) <br />
                                Reg No.- 12 2023 6299
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="logo-section">
                            <div className="mobile">Mob: 7063167149</div>
                            <div className="logo">
                                <img src={logo} className='logo-img' alt='logo' />
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className='row mb-2'>
                    <div className='col-3'>
                        MRID : <span style={{}}><i>{state?.patientId}</i></span>
                    </div>
                    <div className='col-5'>
                        Name : <span style={{}}><i>{state?.patientName}</i></span>
                    </div>
                    <div className='col'>
                        Age: <span style={{ width: "62%" }}>{age}</span>
                    </div>
                    <div className='col'>
                        Gender: <span style={{ width: "50%" }}>{gender}</span>
                    </div>

                </div>
                <div className='row mb-2'>
                    <div className='col-7'>
                        Address: <span style={{ width: "80%" }}>{state?.address}</span>
                    </div>
                    <div className='col'>
                        Mobile: <span style={{ width: "62%" }}>{state?.mobile}</span>
                    </div>
                    <div className='col'>
                        Date: <span style={{ width: "62%" }}>{state?.dateOfVisit}</span>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='careof' style={{ height: "3rem" }}>
                        C/o- RE: Blured in near abnd distance  since 5 months <br />
                        LE: watering snd forignbody sensation since 1 week, No h/o injury. <br />
                        H/o- BE: Cataract sx with PCIOL 5 years ago (Re: 5 years, LE: 4 Years) <br />
                        Mo/h- DM since 10 years (under Control by Medication)
                    </div>
                </div>
                <div className="row mt-3" style={{}}>
                    <div className='col-5'>
                        <div style={{ marginTop: "13%" }}>
                            <span style={{ fontSize: "30px", fontWeight: "500" }}>V</span>
                            <sub>A(unaided)</sub>
                            <span style={{ display: "-webkit-inline-box" }}>
                                <img src={arrow_icon} alt='arrow' />
                                <div className='row' style={{ marginLeft: "0%", marginTop: "-3%" }}>
                                    6/9 <span className='line' style={{ marginTop: "-41%", marginLeft: "15%" }}></span>
                                    <span style={{ marginLeft: "92%", marginTop: "-81%" }}>N6</span>
                                </div>
                                <div className='row' style={{ marginLeft: "-36%", marginTop: "32%" }}>
                                    6/12 <span className='line' style={{ marginLeft: "23%", marginTop: "-12%" }}></span>
                                    <span style={{ marginLeft: "101%", marginTop: "-23%" }}>N6</span>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='col-7'>
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
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <td>LE</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="2" className='vertical-center'>ADD</th>
                                    <td>RE</td>
                                    <td>test</td>
                                    <td colSpan="4" rowSpan="4">
                                        <strong>ADDITIONAL INFORMATION:</strong>
                                        This is for the addition INFORMATION data that will come from the
                                        backend
                                    </td>
                                </tr>
                                <tr>
                                    <td>LE</td>
                                    <td>test</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row' style={{ height: "27rem", marginTop: "-2%" }}>
                    <div className='col-8'>
                        <h5 style={{ textAlign: "center" }}>Slit Lamp Examination</h5>
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
                                    <td>Flat</td>
                                    <td>Flat</td>
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
                                    <td>test</td>
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
                    <div className='col-4'>
                        <div className='row'>
                            <h5>IOP : </h5>
                            <div>RE : value mmHg</div>
                            <div>LE : value mmHg</div>
                        </div>
                        <div className='row'>
                            <h5>Diagnosis : </h5>
                            <div>
                                This is first line
                                <br />
                                This is second line
                            </div>
                        </div>
                        <div className='row'>
                            <h5>Plan/Adv : </h5>
                            <div>
                                ndustry. Lorem Ipsum has been the industry's standard dummy
                                <br />
                                text ever since the 1500s, when an unknown printer took a galley of type
                                <br /> and scrambled it to make a type specimen book. It has survived not
                                <br />only five centuries, but also the leap into electronic typesetting,
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4' style={{ height: "15rem" }}>
                    <h5>R<span style={{ fontSize: "14px" }}>x</span>,</h5>
                    <div className='col'>
                        <Medicine medicineList={medicineList} />
                    </div>
                    <div className='col'>
                        <Medicine medicineList={remainingMedicine} />
                    </div>
                    <div className='col' style={{ alignSelf: "end" }}>
                        <div style={{ float: "right" }}>
                            <div>___________________</div>
                            <div style={{ textAlign: "center" }}>Sign</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer'>
                    <i>
                        Please bring the prescription on next visit, <u>In case of Emergency Please visit to the nearest Doctor</u> <br />
                        Tarakeswar Mahavidyalaya Math, Ward No - 9, Tarakeswar, Hooghly, Pin- 712410, Mob- 7063167149
                    </i>
                </div>
            </div>
        </>
    )
}

export default Prescription;