// Create variables targeting the relevant DOM elements here 👇
//buttons:
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeMyCoverButton = document.querySelector('.create-new-book-button');
//cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
//views:
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  createCover(
    'http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg',
    'Sunsets and Sorrows',
    'sunsets',
    'sorrows'
  ),
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomCover);
randomCoverButton.addEventListener('click', displayRandomCover);
viewSavedCoversButton.addEventListener('click', showSavedCoversView); 
makeNewCoverButton.addEventListener('click', showFormView); 
homeButton.addEventListener('click', showHomeView); 
makeMyCoverButton.addEventListener('click', makeMyBookBtn);
saveCoverButton.addEventListener('click', saveCover); 
savedCoversView.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇
function displayRandomCover() {
  currentCover = getRandomCover();
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;

  return currentCover;
}

function getRandomCover() {
  var coverImageIndex = getRandomIndex(covers);
  var coverTitlesIndex = getRandomIndex(titles);
  var coverTagline1Index = getRandomIndex(descriptors);
  var coverTagline2Index = getRandomIndex(descriptors);
  
  var randomCover = createCover(
    covers[coverImageIndex],
    titles[coverTitlesIndex],
    descriptors[coverTagline1Index],
    descriptors[coverTagline2Index]
    );
    return randomCover;
  }
  
  function showFormView() {
    homeView.classList.add('hidden');
    savedView.classList.add('hidden');
    formView.classList.remove('hidden');
    randomCoverButton.classList.add('hidden');
    saveCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    viewSavedCoversButton.classList.remove('hidden');
  }
  
  function showSavedCoversView() {
    displaySavedCovers();
    homeView.classList.add('hidden');
    savedView.classList.remove('hidden');
    formView.classList.add('hidden');
    randomCoverButton.classList.add('hidden');
    saveCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    viewSavedCoversButton.classList.add('hidden');
  }
  
  function showHomeView() {
    homeView.classList.remove('hidden');
    savedView.classList.add('hidden');
    formView.classList.add('hidden');
    randomCoverButton.classList.remove('hidden');
    saveCoverButton.classList.remove('hidden');
    homeButton.classList.add('hidden');
    viewSavedCoversButton.classList.remove('hidden');
  }

  function makeMyBookBtn(event) {
    event.preventDefault();
    var cover = document.querySelector('.user-cover').value;
    var title = document.querySelector('.user-title').value;
    var descriptor1 = document.querySelector('.user-desc1').value;
    var descriptor2 = document.querySelector('.user-desc2').value;
    
    var currentCover = createCover(cover, title, descriptor1, descriptor2);

    covers.push(currentCover.coverImg);
    titles.push(currentCover.title);
    descriptors.push(currentCover.descriptors);
    descriptors.push(currentCover.descriptors);
    
    coverImage.src = currentCover.coverImg;
    coverTitle.innerText = currentCover.title;
    tagline1.innerText = currentCover.tagline1;
    tagline2.innerText = currentCover.tagline2;

    showHomeView();

    displayNewCover(newCover);
  }
  
  function displayNewCover(cover) {
    coverImage.src = cover.coverImg;
    coverTitle.innerText = cover.title;
    tagline1.innerText = cover.tagline1;
    tagline2.innerText = cover.tagline2;
  }
  
  function saveCover() {
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    }
  }
  
  function displaySavedCovers() {
    savedCoversView.innerHTML = '';
    if (savedCovers.length === 0) {
      savedCoversView.innerHTML = '<p>No saved covers found.</p>';
    } else {
      for (var i = 0; i < savedCovers.length; i++) {
        var cover = savedCovers[i];
        savedCoversView.innerHTML += `
        <div class="mini-cover" style="background-image: url(${cover.coverImg});">
        <h2 class="cover-title">${cover.title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
        <img class="cover-image" src="${cover.coverImg}" alt="No image found">
        </div>
        `;
      }
    }
  }
  
  function deleteCover(event) {
    var clickedCoverElement = event.target.closest('.mini-cover');
    if (clickedCoverElement) {
      var coverIndex = Array.from(savedCoversView.children).indexOf(clickedCoverElement);
      if (coverIndex !== -1) {
        savedCovers.splice(coverIndex, 1);
        displaySavedCovers();
      }
    }
  }
  
  // We've provided two functions to get you started 👇           
        function getRandomIndex(array) {
          return Math.floor(Math.random() * array.length);
        }

        function createCover(imgSrc, title, descriptor1, descriptor2) {
          var cover = {
            id: Date.now(),
            coverImg: imgSrc,
            title: title,
            tagline1: descriptor1,
            tagline2: descriptor2,
          };
          return cover;
        }