// function cookingStatus
// @param remainTime is the remaining time in minutes
// @returns string based on if the food is ready. forgot timer if null, done if 0, not done if time left

function cookingStatus(remainTime) {
  if (remainTime == null) {
    return "You forgot to set the timer.";
  } else if (remainTime == 0) {
    return "Lasagna is done.";
  } else {
    return "Not done, please wait.";
  }
}

// function preparationTime
// @param layers array
// @param prep is the length of time per layer prep time takes. if no number default is 2 min
// @returns prep time
function preparationTime(layers, prep) {
  console.log(layers.length);
  const count = layers.length;
  if (prep === undefined) {
    return count * 2;
  } else {
    return count * prep;
  }
}
// function quantities
// @param layers array
// determine the quantity of noodles and sauce needed to make your mea
// @returns need object with keys noodles and sauce.
function quantities(layers) {
  let noods = 0;
  let saucey = 0;

  for (const key in layers) {
    console.log(key);
    if (layers[key] == "noodles") {
      noods = noods + 1;
    } else if (layers[key] == "sauce") {
      saucey = saucey + 1;
    }
  }
  noods = noods * 50;
  saucey = saucey * 0.2;
  const need = { noodles: noods, sauce: saucey };
  return need;
}
// function addSecretIngredient
// @param friend recipe array
// @param my recipe array
// @returns nothing adds last item from friend recipe to my original recipe
function addSecretIngredient(friend, mine) {
  let len = friend.length;
  let last = friend[len - 1];
  mine.push(last);

  console.log(last);
}
// function scaleRecipe
// @param recipe Object
// @param portion size desired (original recipe portion size is always 2)
// @returns new scaled recipe without altering original
function scaleRecipe(recipe, portion) {
  let newR = {};
  let num = portion / 2;
  for (const key in recipe) {
    if (recipe.hasOwnProperty.call(recipe, key)) {
      newR[key] = recipe[key] * num;
    }
  }

  return newR;
}
