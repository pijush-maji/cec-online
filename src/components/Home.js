import DataIntake from "./DataIntake";
import Header from "./Header";

const Home = () => {
    document.title="Home";
    return (
        <div >
            <Header />
            <DataIntake />
        </div>
    );
}

export default Home;