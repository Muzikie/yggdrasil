import React, { useEffect, useState } from 'react';

import { Row, Col } from '../../components/Grid';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import RecipeCard from './RecipeCard';
import PriceInfo from './PriceInfo';
import { parseRawPrice } from './price';
import { useFetchHelloFreshBox } from '../../hooks/useFetchHelloFreshBox';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { data, loading } = useFetchHelloFreshBox();

  const handleAddRecipe = (recipeId) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        const selected = recipe.selected + 1;
        return { ...recipe, selected };
      }
      return recipe;
    });

    setRecipes(updatedRecipes);
  };

  const handleRemoveRecipe = (recipeId) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId && recipe.selected > 0) {
        const selected = recipe.selected - 1;
        return { ...recipe, selected };
      }
      return recipe;
    });

    setRecipes(updatedRecipes);
  };

  const calculateRecipePrice = (recipe) =>
    (data.baseRecipePrice + (recipe.extraCharge || 0));

  const minRecipesSelected = recipes.reduce((total, recipe) => total + recipe.selected, 0) >= data.min;
  const maxRecipesSelected = recipes.reduce((total, recipe) => total + recipe.selected, 0) >= data.max;
  const summary = recipes
    .filter(recipe => recipe.selected > 0)
    .map((recipe) => ({
      id: recipe.id,
      selected: recipe.selected,
      unitPrice: calculateRecipePrice(recipe),
      name: recipe.name,
      extraCharge: recipe.extraCharge,
    }));
  const totalRecipePrice = summary.reduce(
    (total, recipe) => total + recipe.unitPrice * recipe.selected,
    0
  );
  summary.push({
    id: 'shipping',
    name: 'shipping',
    unitPrice: data.shippingPrice,
    selected: 1,
    extraCharge: 0,
  });
  const totalPrice = parseRawPrice(totalRecipePrice + data.shippingPrice);

  useEffect(() => {
    const { recipes: fetchedRecipes } = data;

    if (fetchedRecipes && recipes.length === 0) {
      setRecipes(fetchedRecipes);
    }
  }, [setRecipes, data, recipes]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{data.headline}</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3>{totalPrice}</h3>
            </Box>
            <PriceInfo summary={summary} totalPrice={totalPrice} />
          </Flex>
        </Col>
      </Row>

      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={minRecipesSelected}
                maxRecipesSelected={maxRecipesSelected}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
