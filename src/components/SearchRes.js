import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchRes = () => {
    const { query } = useParams();
    const [result, setResult] = useState({})
    const navigate =useNavigate();
    useEffect(() => {
        fetch("http://localhost:9091/search", {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                searchText: query
            })
        })
            .then(data => data.json())
            .then(json => setResult(json));
    }, [query])//added in the dependency array just to resolve warning which will cause netlify build fail

    const handlerBack=()=>{
        navigate("/")
    } 

    let ele = (
    <div className="card text-center">
        <div className="card-body">
            {result.errorMsg}
        </div>
    </div>);
    if (!result.errorFlag) {
        
    }
    return (
        <>
            <div style={{ backgroundColor: "#e7efef", height: "45px" }}>
                <button className="btn btn-outline-success" type="submit"
                    style={{ float: "right", marginTop: "3px" }} onClick={handlerBack}>Go Back</button>
            </div>
            <div style={{margin:"10px",marginTop:"70px"}}>
                {ele}
            </div>
        </>
    )
}

export default SearchRes;