let addButton = document.getElementById("add-button");

addButton.addEventListener("click", (ev) => {
  let taskBox = document.querySelector(".taskbox");
  let input = document.getElementById("task-input");

  if (!input.value.trim()) return;

  let element = document.createElement("div");

  let innetHtml = `
    <input type='checkbox' class='checkbox'>
    <span class="inline-block overflow-auto">${input.value}</span>
    <div class="btn-div">
      <i class="material-icons delete-btn">delete</i>
      <i class="fa fa-edit edit-btn" style="font-size:24px"></i>
    </div>
  `;

  element.classList.add("task-list");
  element.innerHTML = innetHtml;

  input.value = "";
  taskBox.appendChild(element);
});

let parent = document.querySelector(".taskbox");

// Event Delegation
if (parent) {
  parent.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("delete-btn")) {
      ev.target.parentElement.parentElement.remove();
    }

    if (ev.target.classList.contains("edit-btn")) {
      let task = ev.target.parentElement.parentElement;
      let taskText = task.children[1];

      let refactorText = prompt("Refactor it", taskText.textContent);

      if (refactorText !== null && refactorText.trim() !== "") {
        taskText.textContent = refactorText.trim();
      }
    }
  });
}

let allBtn = document.querySelector(".all");
let editBtn = document.querySelector(".edit");
let completedBtn = document.querySelector(".completed");

// Show All
allBtn.addEventListener("click", (ev) => {
  for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].removeAttribute("hidden");
  }
});

// Show Completed
completedBtn.addEventListener("click", (ev) => {
  for (let i = 0; i < parent.children.length; i++) {
    if (!parent.children[i].children[0].checked) {
      parent.children[i].setAttribute("hidden", "");
    } else {
      parent.children[i].removeAttribute("hidden");
    }
  }
});
