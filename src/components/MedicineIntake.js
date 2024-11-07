

const MedicineIntake = (props) =>{

    const handleMedChange = (e) =>{
       
    } 
    return(
        <div style={{ display: "inline-flex", height: "37px", marginTop: "13px" }}>
            <select disabled name="eye" value={props.med.eye} className="form-select" onChange={handleMedChange}>
                <option value="BE">BE</option>
                <option value="LE">RE</option>
                <option value="LE">LE</option>
            </select>
            <input disabled name="medName" value={props.med.medName} type="text" className="form-control" onChange={handleMedChange}/>
            <select disabled name="medType" value={props.med.medType} className="form-select" onChange={handleMedChange}>
                <option value="e/d">e/d</option>
                <option value="oint">Oint</option>
                <option value="Tab">Tab</option>
            </select>
            <input disabled name="medFreq" value={props.med.medFreq} type="text" className="form-control" onChange={handleMedChange} />
            <input disabled name="medDuration" value={props.med.medDuration} type="text" className="form-control" onChange={handleMedChange} />
            <img src="./minus.png" alt="delete"  style={{cursor:"pointer"}} onClick={()=>props.removeMed(props.med)}/>
        </div>
    )
}

export default MedicineIntake;