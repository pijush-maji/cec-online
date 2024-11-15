import minus from "./minus.png";

const MedicineIntake = (props) => {
    return (
        <div style={{ display: "inline-flex", height: "37px", marginTop: "13px" }}>
            <input style={{ width: "25%" }} disabled name='eye' value={props.med.eye} className="form-control"
                placeholder='Eye' />
            <input disabled name='medName' value={props.med.medName} className="lm-5 form-control"
                placeholder='Medicine' />
            <input disabled name="medType" value={props.med.medType} type="text" className="lm-5 form-control"
                style={{ width: "25%" }} />
            <img src={minus} alt="delete" className="lm-5" style={{ cursor: "pointer" }} onClick={() => props.removeMed(props.med)} />
        </div>
    )
}

export default MedicineIntake;