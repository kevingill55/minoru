import { AppContainer } from "../AppContainer";
import { RecipeCard, Recipe } from "../../components/RecipeCard";
import recipes from "../recipes.json";

export default function RecipesPage() {
  return (
    <AppContainer>
      <div className="mb-10 col-start-2 md:col-end-9 col-end-7 row-start-3">
        <div className="max-w-6xl mx-auto">
          <header className="mb-6">
            <h1 className="text-[2em] font-serif md:text-[3em] font-normal leading-none md:mb-4 text-center my-12">
              Recipes
            </h1>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-4 md:gap-y-8">
            {recipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
