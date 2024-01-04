import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [recipesShown, setRecipesShown] = useState([]);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=1730b59191e6411ca00be6b4be42a3c9&cuisine=%22italian%22")
            .then(response => response.json())
            .then(json => {setRecipesShown(json.results)});
    }, []);

    return(
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchTextChange}
            />
            <div>
                {recipesShown.map((item) => (
                    <Link to={`/detail/${item.id}`}>{item.title}</Link>
                ))}
            </div>
            <div>
                Details
            </div>
        </>
        
    );
}

export default Home;
