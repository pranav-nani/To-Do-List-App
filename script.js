const inputBox = document.getElementById('input-box');
const ListContainer = document.getElementById('list-container');

function addtask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

ListContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();

        if (e.target.classList.contains("checked")) {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your have completed this task successfully',
            showConfirmButton: false,
            timer: 1400
        });

        var end = Date.now() + (2 * 1000);
        var colors = ['#FF6000', '#FFF323'];
        
        function frame() {
            confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
            });
            confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
            });
            if (Date.now() < end) {
            requestAnimationFrame(frame);
            } else {
            document.getElementById("makeItRain").disabled = false;
            }
        }
        frame();
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask() {
  ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
