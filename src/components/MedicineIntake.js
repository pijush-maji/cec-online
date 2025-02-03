import minus from "./minus.png";

const MedicineIntake = (props) => {
    return (
        <div style={{ display: "inline-flex",marginTop: "13px" }}>
            <input style={{ width: "25%", height: "37px", marginTop:"35px" }} disabled name='eye' value={props.med.eye} className="form-control"
                placeholder='Eye' />
            <input disabled name='medName' value={props.med.medName} className="lm-5 form-control"
                placeholder='Medicine' style={{height: "37px", marginTop:"35px"}} />
            <textarea rows={4} disabled name="medUsage" value={props.med.medUsage} type="text" className="lm-5 form-control"
                style={{ width: "100%" }} />
            <img src={minus} alt="delete" className="lm-5" style={{ cursor: "pointer", height: "37px", marginTop:"35px" }} onClick={() => props.removeMed(props.med)} />
        </div>
    )
}

export default MedicineIntake;