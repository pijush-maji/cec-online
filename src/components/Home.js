import Header from "./Header";

const Home = () => {
    return (
        <>
            <Header />
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Patient Details Form</h5>
                    <form >
                        <div class="row">
                            <div class="col">
                                <label for="patientId" class="form-label">Patient Id</label>
                                <input type="text" id="patientId" class="form-control" formControlName="patientId" />
                            </div>
                            <div class="col">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" id="firstName" class="form-control" formControlName="firstName" />
                            </div>
                            <div class="col">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" id="lastName" class="form-control" formControlName="lastName" />
                            </div>
                        </div>
                        <div style={{float: "right"}}>
                            <button style={{marginRight: "15px"}} class="mt-3 btn btn-secondary">Cancel</button>
                            <button type="submit" class="mt-3 btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;