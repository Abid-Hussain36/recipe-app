import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [recipeDetails, setRecipeDetails] = useState("");
    const {recipeId} = useParams();

    return(
        <div>
            {recipeId}
        </div>
    );
}

export default Detail;