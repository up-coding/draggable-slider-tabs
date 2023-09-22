const tabsContainer = document.querySelector(".tabs");
const tabs = document.querySelectorAll(".tabs .tab");

let isTabsDragging = false;

//function to drag tabs on mouse grab
const drag = (e) => {
  //if isTabsDragging is false then stop dragging otherwise drag tab list.
  if (!isTabsDragging) return;
  //adding 'drag' class to tabs container
  tabsContainer.classList.add("drag");
  //e.movementX value is difference between two mouse pointer event value.
  //assigning mouse pointer movementX value to tab container scroll left property.
  tabsContainer.scrollLeft -= e.movementX;
  toggleIcons();
};

//function to stop dragging
const stop = () => {
  isTabsDragging = false;
  tabsContainer.classList.remove("drag");
};

//function to remove 'active' class from tab
const removeActive = () => {
  let activeTab = tabsContainer.querySelector(".active");
  activeTab.classList.remove("active");
};

//looping through all tabs
tabs.forEach((tab) => {
  //adding click event listener to each tab
  tab.addEventListener("click", () => {
    //remove 'active' class from previous tab
    removeActive();
    //adding 'active' class to current tab
    tab.classList.add("active");
  });
});

//function to move tabs to left
const left = () => {
  //scrolling tab container to left
  tabsContainer.scrollLeft -= 400;
  //handling left and right arrow icons
  setTimeout(() => toggleIcons(), 40);
};

//function to move tabs to right
const right = () => {
  //scrolling tab container to right
  tabsContainer.scrollLeft += 400;
  //handling left and right arrow icons
  setTimeout(() => toggleIcons(), 40);
};

//function to handle left and right arrows icons
const toggleIcons = () => {
  //contains scroll left value
  let scroll = tabsContainer.scrollLeft;
  //contains maximum scrollable value
  let maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;
  //left arrow
  let arrowLeft = document.querySelector(".icon-left");
  //right arrow
  let arrowRight = document.querySelector(".icon-right");

  //if scroll value is greater than 0 then show left arrow otherwise hide it.
  if (scroll > 0) arrowLeft.style.display = "flex";
  else arrowLeft.style.display = "none";

  //if maximum scroll value is grater than scroll value then show right arrow otherwise hide it.
  if (maxScroll > scroll) arrowRight.style.display = "flex";
  else arrowRight.style.display = "none";
};

//set isTabDragging = true if mouse left button is clicked.
tabsContainer.addEventListener("mousedown", () => (isTabsDragging = true));
//drag tab list on mouse move
tabsContainer.addEventListener("mousemove", drag);
//stop dragging on mouse button is left
document.addEventListener("mouseup", stop);
