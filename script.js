let page = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  if (page < pages.length - 1) {
    pages[page].style.transform = "rotateY(-180deg)";
    page++;
  }
}

// Diary functions
let history = [];
function undoText(){
  if(history.length > 0){
    document.getElementById("diary").value = history.pop();
  }
}
function clearText(){
  history.push(document.getElementById("diary").value);
  document.getElementById("diary").value = "";
}
document.getElementById("diary").addEventListener("input", e=>{
  history.push(e.target.value);
});
function saveNote(){
  localStorage.setItem("birthdayNote", document.getElementById("diary").value);
  alert("Saved 💙");
}
window.onload = ()=>{
  const saved = localStorage.getItem("birthdayNote");
  if(saved) document.getElementById("diary").value = saved;
};

// Envelope
function openLetter(){
  document.getElementById("letter").classList.add("open");
}
