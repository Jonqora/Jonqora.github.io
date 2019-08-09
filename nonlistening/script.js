//Hides the details of non-listening descriptions by default
let hiddenElem = document.querySelectorAll('.nl-type .textwindow');

function hideAll() {
  for (i = 0; i < hiddenElem.length; i++) {
    hiddenElem[i].style.display = 'none';
  }
}

function showAll() {
  for (i = 0; i < hiddenElem.length; i++) {
    hiddenElem[i].style.display = null;
  }
}

hideAll(); //All textwindows hidden by default

//Toggles visibility of a section when clicking on its header (???)
function toggleHidden(element) {
  if (element.style.display === 'none') {
    element.style.display = null;
    return true; //Element is visible = TRUE
  } else {
    element.style.display = 'none';
    return false; //Element is hidden = FALSE
  }
}

//Targets the adjacent textwindow
function targetText(headerbar) {
  return headerbar.parentNode.querySelector('.textwindow');
}

//Finds all the relevent header bars and adds event listeners to them
let headerBarElem = document.querySelectorAll('.nl-type .headerbar');

for (i = 0; i < headerBarElem.length; i++) {
  let elem = headerBarElem[i];
  elem.addEventListener('click', function () {
    if (toggleHidden(targetText(elem))) { //If element toggles visible, scroll:
      elem.parentNode.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
