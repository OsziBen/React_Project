import { recipes } from "./data.js";

export default function RecipeList() {
    return(
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe =>
                    <li key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <ul>
                            {recipe.ingredients.map(ingredient =>
                               <li key={recipe.id + "_" + ingredient}>{ingredient}</li> 
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}