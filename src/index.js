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

  //make complete button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeItem = completeButton.parentNode;
    const completeItemName = completeItem.firstChild.innerText;

    // delete complete item from incomplete area
    const deleteTarget = completeItem.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    // add complete item into complete area
    //make li tag
    const li = document.createElement("li");

    // make div tag
    const div = document.createElement("div");
    div.className = "list-row";

    //make p tag
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = completeItemName;

    //make back button tag
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // make child tag
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  // make delete button tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
