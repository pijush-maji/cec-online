import minus from "./minus.png";

const MedicineIntake = (props) =>{

    const handleMedChange = (e) =>{
       
    } 
    return(
        <div style={{ display: "inline-flex", height: "37px", marginTop: "13px" }}>
            <select disabled name="eye" value={props.med.eye} className="form-select" 
            style={{width:"25%"}} onChange={handleMedChange}>
                <option value="BE">BE</option>
                <option value="LE">RE</option>
                <option value="LE">LE</option>
            </select><select disabled name="medName" value={props.med.medName} className="lm-5 form-select" onChange={handleMedChange}>
                <option value="1">Med1</option>
                <option value="2">Med2</option>
                <option value="3">Med3</option>
            </select>
            <input disabled name="medType" value={props.med.medType} type="text" className="lm-5 form-control" 
            style={{width:"25%"}} onChange={handleMedChange} />
            <img src={minus} alt="delete" className="lm-5"  style={{cursor:"pointer"}} onClick={()=>props.removeMed(props.med)}/>
        </div>
    )
}

export default MedicineIntake;