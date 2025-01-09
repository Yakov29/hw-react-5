import React from "react";
import GlobalStyle from "./globalStyles";
import Difficulty from "./components/Difficulty";
import styled from "styled-components";

const recipes = [
  {
    id: 1,
    name: "Burger",
    image:
      "https://thebreakfastclubofocoee.com/wp-content/uploads/2017/03/BREAKFAST-CLUB-burger-1.jpg",
    difficulty: 0,
  },
  {
    id: 2,
    name: "Borch",
    image:
      "https://howtofeedapickyeater.com/wp-content/uploads/2016/12/Borscht-plate-1.jpg",
    difficulty: 1,
  },
  {
    id: 3,
    name: "Potato Frie",
    image:
      "https://th.bing.com/th/id/R.6e094453ed99ed8a810520b56fc92cca?rik=dM1zmyr5a1mttQ&riu=http%3a%2f%2fimg.taste.com.au%2fMudZOM3z%2ftaste%2f2016%2f11%2ffrench-fries-87711-1.jpeg&ehk=t1TZByWsonGmHwgvlRbxjsRsO%2fwV4HWSYbFXzwOdVpk%3d&risl=&pid=ImgRaw&r=0",
    difficulty: 3,
  },
  {
    id: 4,
    name: "Black burger",
    image:
      "https://th.bing.com/th/id/R.6d9590b707774dd8f144ca505dde1618?rik=Xmd2YL%2bq8vQLgQ&pid=ImgRaw&r=0",
    difficulty: 4,
  }
];

const RecipeList = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const RecipeItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 22%;
  text-align: center;

  & img {
    width: 100%;
    border-radius: 10px;
    height: 200px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Список рецептів</h1>
      <RecipeList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id}>
           
            <img src={recipe.image} alt="" />
            <h2>{recipe.name}</h2>
            <Difficulty level={recipe.difficulty} />
          </RecipeItem>
        ))}
      </RecipeList>
    </div>
  );
}

export default App;
