import './Prescription.css';
import logo from './ceclogo.PNG';
import cliniclogo from './clinic-logo.PNG';
import arrow_icon from './arrow_icon.PNG';
import Medicine from './Medicine';
import { useEffect } from 'react';

const Prescription = () => {


    useEffect(()=>{
        document.title="CEC-20240911001";
    },[]);

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
    if (medicines.length > 6) {
        medicineList = medicines.slice(0, 6);
        remainingMedicine = medicines.slice(6);
    } else {
        medicineList = medicines;
    }
    //length 81
    let name = "Partha Sarathi Pal";
    //length 14
    let age = " 25yr 11m     ";
    //len 12
    let gender = " Others     ";
    //len 13
    let date = " 09-09-2024  ";
    //length 172
    let address = " abc                                                                               " +
        "                                           ";
    let mobile = " 0987654321" + "      ";


    return (
        <>
            <div className='' id="prsc">
                <div className="row">
                    <div className="col-9">
                        <div className="doc-title">
                            <div>
                                <img src={cliniclogo} className='clinic-logo' alt='Clinic' />
                            </div>
                            <div className="doc-name">
                                <span style={{ fontSize: "20px" }}><strong>Aritra Chinya</strong></span>
                                <span style={{ fontSize: "14px" }}> (Consultant Optometrist)</span>
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
                        MRID : <span className='underlined-text' style={{}}>CEC-20240911001</span>
                    </div>
                    <div className='col-5'>
                        Name : <span className='underlined-text' style={{ width: "83%" }}></span>
                    </div>
                    <div className='col'>
                        Age: <span className='underlined-text' style={{ width: "62%" }}>{age}</span>
                    </div>
                    <div className='col'>
                        Gender: <span className='underlined-text' style={{ width: "50%" }}>{gender}</span>
                    </div>

                </div>
                <div className='row mb-2'>
                    <div className='col-7'>
                        Address: <span className='underlined-text' style={{ width: "80%" }}>{address}</span>
                    </div>
                    <div className='col'>
                        Mobile: <span className='underlined-text' style={{ width: "62%" }}>{mobile}</span>
                    </div>
                    <div className='col'>
                        Date: <span className='underlined-text' style={{ width: "62%" }}>{date}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='careof' style={{ height: "3rem" }}>
                        sp/o <br />
                        sldkjf data <br />
                        another data <br />
                    </div>
                </div>
                <div className="row mt-3" style={{ height: "15rem" }}>
                    <div className='col-5'>
                        <div style={{ marginTop: "13%" }}>
                            <span style={{ fontSize: "30px", fontWeight: "500" }}>V</span>
                            <sub>A(unaided)</sub>
                            <span style={{ display: "-webkit-inline-box" }}>
                                <img src={arrow_icon} />
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
                        <table className="table table-bordered border-primary">
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
                <div className='row mt-3' style={{ height: "23rem" }}>
                    <div className='col-4'>
                        <h5 style={{ textAlign: "center" }}>Slit Lamp Examination</h5>
                        <table className="table table-bordered border-primary slit-tables">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Right eye</th>
                                    <th scope="col">Left eye</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>Eyelids</th>
                                    <td>test</td>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Conjunctiva</th>
                                    <td>test</td>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Sclera</th>
                                    <td>test</td>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Cornea</th>
                                    <td>test</td>
                                    <td>test</td>
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
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-9'>
                                <div style={{ height: "30%" }}>
                                    <h5>Diagnosis : </h5>
                                    <div>
                                        ndustry. Lorem Ipsum has been the industry's standard dummy
                                        <br />
                                        text ever since the 1500s, when an unknown printer took a galley of type
                                        <br /> and scrambled it to make a type specimen book. It has survived not
                                        <br />only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with t

                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <h5>IOP : </h5>
                                <div>RE : value mmHg</div>
                                <div>LE : value mmHg</div>
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
                <div className='row mt-4' style={{ height: "18rem" }}>
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