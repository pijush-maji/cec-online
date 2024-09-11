import DataIntake from "./DataIntake";
import Header from "./Header";

const Home = () => {
    document.title="Home";
    return (
        <>
            <Header />
            <DataIntake />
        </>
    );
}

export default Home;