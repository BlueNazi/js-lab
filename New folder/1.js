let ITEMS = [
    {
      title: "React",
      isChecked: false,
      position: "left",
    },
    {
      title: "PHP",
      isChecked: false,
      position: "left",
    },
    {
      title: "C++",
      isChecked: false,
      position: "right",
    },
    {
      title: "Vue",
      isChecked: false,
      position: "right",
    },
    {
      title: "Angular",
      isChecked: false,
      position: "left",
    },
    {
      title: "GIT",
      isChecked: false,
      position: "right",
    },
    {
      title: "Material UI",
      isChecked: false,
      position: "left",
    },
    {
      title: "Tailwind",
      isChecked: false,
      position: "right",
    },
  ];
  
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  
  function changeItemStatus() {
    // const name = event.target.name;
    // const checked = event.target.checked;
  
    // es6 destructring
    const { name, checked } = event.target;
    const item = ITEMS.find((item) => item.title === name);
    item.isChecked = checked;
  }
  
  function render() {
    const leftElements = ITEMS.filter((item) => item.position === "left");
    const rightElements = ITEMS.filter((item) => item.position === "right");
  
    // left list
    const leftTemplate = leftElements.map((item) => {
      return `  <li>
      <input onchange="changeItemStatus()" type="checkbox" name="${item.title}"  />
      ${item.title}
    </li>`;
    });
    left.innerHTML = leftTemplate.join("");
  
    // right list
    const rightTemplate = rightElements.map((item) => {
      return `  <li>
      <input onchange="changeItemStatus()" type="checkbox" name="${item.title}"  />
      ${item.title}
    </li>`;
    });
    right.innerHTML = rightTemplate.join("");
  }
  
  function MoveAllToLeft() {
    ITEMS = ITEMS.map((item) => {
      return { ...item, position: "left" };
    });
    render();
  }
  
  function MoveAllToRight() {
    ITEMS = ITEMS.map((item) => {
      return { ...item, position: "right" };
    });
    render();
  }
  
  function moveSelectedToRight() {
    let checkedElements = ITEMS.filter((item) => item.isChecked);
    let unCheckedElements = ITEMS.filter((item) => !item.isChecked);
    checkedElements = checkedElements.map((item) => {
      return { ...item, position: "right", isChecked: false };
    });
    ITEMS = [...unCheckedElements, ...checkedElements];
    render();
  }
  
  function moveSelectedToLeft() {
    let checkedElements = ITEMS.filter((item) => item.isChecked);
    let unCheckedElements = ITEMS.filter((item) => !item.isChecked);
    checkedElements = checkedElements.map((item) => {
      return { ...item, position: "left", isChecked: false };
    });
    ITEMS = [...unCheckedElements, ...checkedElements];
    render();
  }
  window.addEventListener("load", render);
  