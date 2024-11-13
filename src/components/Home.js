import { dataObj, signData } from "./CecConstants";
import DataIntake from "./DataIntake";
import Header from "./Header";

const Home = () => {
    document.title="Home";
    return (
        <div >
            <Header />
            <DataIntake patientData={dataObj} signData={signData}/>
        </div>
    );
}

export default Home;