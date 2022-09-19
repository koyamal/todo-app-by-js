import "./styles.css";

const onClickAdd = () => {
  // get value of text box, initialize text box
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  // make div tag
  const div = document.createElement("div");
  div.className = "list-row";

  //make li tag
  const li = document.createElement("li");

  //make p tag
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = text;

  //make complete button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeItem = completeButton.parentNode;
    const completeItemName = completeItem.firstChild.innerText;

    // delete complete item from incomplete area
    deleteFromIncompleteList(completeItem.parentNode);

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
    backButton.addEventListener("click", () => {
      const backItem = backButton.parentNode;
      const backItemName = backItem.firstChild.innerText;

      // delete Item
      const deleteTarget = backItem.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      createIncompleteList(backItemName);
    });

    //make delete button tag at complete area
    const deleteButtonFromCompleteArea = document.createElement("button");
    deleteButtonFromCompleteArea.innerText = "削除";
    deleteButtonFromCompleteArea.addEventListener("click", () => {
      const deleteItem = deleteButtonFromCompleteArea.parentNode;

      // delete Item
      const deleteTarget = deleteItem.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
    });

    // make child tag
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    div.appendChild(deleteButtonFromCompleteArea);
    document.getElementById("complete-list").appendChild(li);
  });

  // make delete button tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
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
