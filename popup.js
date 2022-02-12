// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    console.log('color test',color);
  changeColor.style.backgroundColor = color;
});
