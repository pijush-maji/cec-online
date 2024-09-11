import './DataIntake.css';

const DataIntake = () => {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Patient Details Form</h5>
                    <form >
                        <div class="row">
                            <div class="col-2">
                                <label for="patientId" class="form-label">Patient Id</label>
                                <input type="text" id="patientId" class="form-control" />
                            </div>
                            <div class="col-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" id="name" class="form-control" />
                            </div>
                            <div class="col-1">
                                <label for="year" class="form-label">Age(Year)</label>
                                <input type="number" name="year" class="form-control" placeholder="YY"
                                    max={100} min="0" />
                            </div>
                            <div class="col-1">
                                <label for="month" class="form-label">Age(Month)</label>
                                <input type="number" name="month" class="form-control" placeholder="MM"
                                    min={0} max={11} />
                            </div>
                            <div className='col-2'>
                                <label for="gender" class="form-label">Gender</label>
                                <select id="gender" name="gender" class="form-control">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Others</option>
                                </select>
                            </div>
                        </div>
                        <div style={{ float: "right" }}>
                            <button style={{ marginRight: "15px" }} class="mt-3 btn btn-secondary">Cancel</button>
                            <button type="submit" class="mt-3 btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DataIntake;