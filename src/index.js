import "./styles.css";

const onClickAdd = () => {
  // get value of text box, initialize text box
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // make div tag
  const div = document.createElement("div");
  div.className = "list-row";

  //make li tag
  const li = document.createElement("li");

  //make p tag
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  //make button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // make child tag
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add li into ul
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
