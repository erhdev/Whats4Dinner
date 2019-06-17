/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */
/* eslint-disable func-names */
/* eslint-disable no-undef */
// functionality for dropdown buttons
// eslint-disable-next-line no-undef
$('.dropdown-toggle').dropdown();

const dropdownItem = $('.dropdown-item');
const entree = $('#select-entree');

dropdownItem.click(function () {
  // Displays entree choices upon selecting a category.
  if (
    $(this)
      .parent()
      .siblings()
      .text() === 'Category'
  ) {
    $.get(`/category/${$(this).text()}`, res => {
      console.log(res);
      console.log(res.message[0].Menu_Items[0].menu_item);
      for (i = 0; i < res.message.length; i++) {
        for (j = 0; j < res.message[i].Menu_Items.length; j++) {
          const currentEntree = res.message[i].Menu_Items[j].menu_item;
          entree.append(
            `<option class='entree-options'>${currentEntree}</option>`,
          );
        }
      }
    });
  }

  // Displays entree choices upon selecting a restaurant.
  if (
    $(this)
      .parent()
      .siblings()
      .text() === 'Restaurants'
  ) {
    $.get(`/restaurant/${$(this).text()}`, res => {
      console.log(res);
      for (i = 0; i < 1; i++) {
        for (j = 0; j < res.message.Menu_Items.length; j++) {
          const currentEntree = res.message.Menu_Items[j].menu_item;
          entree.append(
            `<option class='entree-options'>${currentEntree}</option>`,
          );
        }
      }
    });
  }
  $('#entree').show();
  // entree.empty();
});

// Displays recipe and ingredients upon selecting an entree.
entree.change(function () {
  $.get(`/menu_item/${$(this).val()}`, res => {
    $('#ingredients').append('<ul id="ingredient-list">');
    console.log(res.message);
    for (let i = 0; i < res.message.Recipes.length; i++) {
      const { ingredient } = res.message.Recipes[i];
      // console.log(ingredient);
      if (ingredient == null) {
        $('#recipe').append(`<p>${res.message.Recipes[i].instruction}</p>`);
      } else {
        $('#ingredient-list').append(`<li>${ingredient}</li>`);
      }
    }
    $('#ingredients').show();
    $('#recipe').show();
  });
  entree.empty();
});

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i;
  const x = document.getElementsByClassName('step');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '');
  }
  // ... and adds the "active" class to the current step:
  x[n].className += ' active';
}


function showTab(n) {
  // This function will display the specified tab of the form ...
  const x = document.getElementsByClassName('tab');
  x[n].style.display = 'block';
  // ... and fix the Previous/Next buttons:
  if (n === 0) {
    document.getElementById('prevBtn').style.display = 'none';
  } else {
    document.getElementById('prevBtn').style.display = 'inline';
  }
  if (n === x.length - 1) {
    document.getElementById('nextBtn').innerHTML = 'Submit';
  } else {
    document.getElementById('nextBtn').innerHTML = 'Next';
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

// functionality for adding restaurant info form
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function validateForm() {
  // This function deals with validation of the form fields
  let x;
  let y;
  let i;
  let valid = true;
  // eslint-disable-next-line prefer-const
  x = document.getElementsByClassName('tab');
  // eslint-disable-next-line prefer-const
  y = x[currentTab].getElementsByTagName('input');
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field:
      y[i].className += ' invalid';
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish';
  }
  return valid; // return the valid status
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
// eslint-disable-next-line no-unused-vars
function nextPrev(n) {
  // This function will figure out which tab to display
  const x = document.getElementsByClassName('tab');
  // Exit the function if any field in the current tab is invalid:
  if (n === 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = 'none';
  // Increase or decrease the current tab by 1:
  currentTab += n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    // ...the form gets submitted:
    document.getElementById('regForm').submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}


// functionality for creating post routes for new items
// const express = require('express');
// const db = require('../../../models');
let nextCount = 3;
let restaurantId = 0;
// eslint-disable-next-line camelcase
let menu_item_Id = 0;
let restaurantArr = [];
let restaurantUsed = 0;
let categoryUsed = 0;

$('#nextBtn').click(() => {
  $.get('/restaurantArr')
    .then(result => {
      for (let i = 0; i < result.message.length; i++) {
        restaurantArr.push(result.message[i]);
      }
      for (let i = 0; i < restaurantArr.length; i++) {
        if ($('#newRestaurant').val().toLowerCase() === restaurantArr[i].toLowerCase()) {
          console.log('these are equal');
          restaurantUsed += 1;
          console.log(restaurantUsed);
          break;
        }
      }
    }).then(() => {
      dbEntryLogic();
    })
    .catch(error => {
      console.log(error) 
    });
});

function dbEntryLogic() {
  if (nextCount === 3 && restaurantUsed === 0) {
    console.log('I am here');
    nextCount -= 1;
    let newRestaurant = {
      restaurant_name: $('#newRestaurant').val(),
      restaurant_category: $('#newRestaurantCat').val(),
    };
    $.post('api/restaurant', newRestaurant)
      .then(result => {
        restaurantId = result.result.id;
      })
      .catch(error => {
        throw error;
      });
  } else if (nextCount === 3 && restaurantUsed > 0) { 
    nextCount -= 1;
    console.log('Here is where I should be');
    const usedRestaurantName = $('#newRestaurant').val()
    const usedRestaurant = {
      restaurant_name: usedRestaurantName,
      // restaurant_category: $('#newRestaurantCat').val(),
    };
    $.get(`/restaurant/${usedRestaurantName}`, usedRestaurant).then(result => {
      console.log(result.message.id);
      restaurantId = result.message.id;
    });
  } else if (nextCount === 2) {
    nextCount -= 1;
    // eslint-disable-next-line camelcase
    const newMenu_Item = {
      menu_item: $('#newMenuItem').val(),
      RestaurantId: restaurantId,
    };
    $.post(`/api/menu_item/${restaurantId}`, newMenu_Item)
      .then(result => {
        console.log(result);
        // eslint-disable-next-line camelcase
        menu_item_Id = result.result.id;
      })
      .catch(error => {
        throw error;
      });
  } else if (nextCount === 1) {
    nextCount = 3;
    const ingList = $('#ingredientsInput')
      .val()
      .split(','); // note to Kevin: was let and worked

    for (let i = 0; i < ingList.length; i++) {
      const newIng = ingList[i];
      const newIngredient = {
        ingredient: newIng,
        instruction: null,
        MenuItemId: menu_item_Id,
      };
      $.post('api/recipe/:menu_item_id', newIngredient)
        .then(() => { })
        .catch(error => {
          throw error;
        });
    }
    const instructionOne = $('#stepOne').val();
    const instructionTwo = $('#stepTwo').val();
    const instructionThree = $('#stepThree').val();
    const instructionArr = [instructionOne, instructionTwo, instructionThree];

    for (let i = 0; i < instructionArr.length; i++) {
      const newInst = instructionArr[i];
      const newInstruction = {
        ingredient: null,
        instruction: newInst,
        MenuItemId: menu_item_Id,
      };
      $.post('api/recipe/:menu_item_id', newInstruction)
        .then(() => {
          $('#regForm').empty().append('<h2>Thanks for adding your recipe!</h2><br><h4>Refresh the page to see it listed.</h4>')
        })
        .catch(error => {
          throw error;
        });
    }
  }
}
