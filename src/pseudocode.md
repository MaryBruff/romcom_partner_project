# Pseudocode Iteration-0

## On load of the page we should see a cover with a randomly selected image, title, and tagline.

- Declare and assign variables that reference the DOM elements that we want to use

  - do this using document.querySelector()

- do we need an eventListener that triggers when the website page loads?

- write a function that uses the createCover function(provided)that somehow captures and stores the provided randomIndex for each respective cover property (image, title, descriptor1, descriptor2)

  - uses the index# and fills text for the src, title etc

## When the Show New Random Cover button is clicked - we need to generate another randomly selected image, title, and tagline.

- create a event listener/event handler on this button.

  - the function that will run for the event handler will most likely be the same as the one that ran when the page loaded.

## What do our starter function do for us?

- getRandomIndex(array): takes an array as a parameter and returns a random index.

  - Math.random generates a number between 0 and 1, multiplies it by the length of the array

  - Math.floor to round down to whole number

- createCover(): creates a cover object and then returns "cover"

  - "cover" value is now available for us to use if we need it

- savedCovers: is a variable that contains an array that at ground zero has one cover object in it by invoking the createCover function.

## Notes about process from Scott

- capture the elements you need (querySelectors)
- add event listeners to those elements
- do the thing

<!-- # Pseudocode Iteration-1

## Make your Own Cover Button -->

<!-- - Create eventListeners for button -->

<!-- - Form view - visible -->

<!-- - Show New Random Cover & Save Cover buttons - hidden -->

<!-- - Form view visible - Home button visible -->

<!-- ## Saved covers button -->

<!-- - View Saved Covers button - show saved cover section & home page hidden

- When saved covers is visible - home button visible -->

  <!-- ## For both the Make New Cover Form section & Saved Covers Section

  - Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
  - When a user clicks the "Home" button, we should only see the Home section
  - When a user clicks the "Home" button, the home button should be hidden
  - When a user clicks the "Home" button, the "Show New Random Cover" and "Save Cover" buttons should be visible again
 -->

<!-- # Pseudocode Iteration-2

## Make the form active to user input

- each text box will need to recieve and store the user input into a respective variable

## Make My Book Button

- Use the input values to create a new, unique cover object(??)
  - Am I missing something here - is there an additional save that needs to happen or just the push to the arrays
  - Save to currentCover type question?
  - currentCover is an existing object in our main.js
- "push" each user input to their respective array(s)
- Change back to the main home view
  - hide the form view again
- Use the newly created cover object to display the newly created cover on the main view (home-view?) -->

# Refactor after Iteration-2

1. making the toggle add/remove to be more dry?
   => on view saved covers need to see save cover button
   => on make your own cover view need to see view saved covers

# Pseudocode Iteration-3
