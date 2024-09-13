import DataIntake from "./DataIntake";
import Header from "./Header";

const Home = () => {
    document.title="Home";
    return (
        <div className="container">
            <Header />
            <DataIntake />
        </div>
    );
}

export default Home;