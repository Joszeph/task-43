import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
window.setTimeout(open, 3000)

function open(){
  const title = document.querySelector('title')
  title.innerHTML="One new message"
}

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
