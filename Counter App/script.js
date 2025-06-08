const counter = document.getElementById("counter");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const min = document.getElementById("min");

let totalCount = 0;

//* display count*//

function updateCount() {
  counter.innerHTML = totalCount;
}

//* add button *//

add.addEventListener("click", () => {
  totalCount++;
  updateCount();
});

/* min button  */

min.addEventListener("click", () => {
  if (totalCount > 0) {
    totalCount--;
    updateCount();
  } else {
    alert("❌ Count can't go below 0!");
  }
});

/* reset button */

reset.addEventListener("click", () => {
  totalCount = 0;
  updateCount();
});
