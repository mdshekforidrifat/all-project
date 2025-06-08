const bill = document.getElementById("bll");
const tip = document.getElementById("tip");
const btn = document.getElementById("calculate");
const total = document.getElementById("total");
const tipAm = document.getElementById("tipAm");

/* calculate button  */

function calculatetip() {
  const billValue = parseFloat(bill.value);
  const tipValue = parseFloat(tip.value);

  if (isNaN(billValue) || isNaN(tipValue)) {
    alert("দয়া করে বিল এবং টিপ এর পরিমাণ লিখুন।");
    return;
  }
  const totalTip = billValue * (tipValue / 100);
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerHTML = totalValue.toFixed(2);
  tipAm.innerHTML = totalTip.toFixed(2);
}

btn.addEventListener("click", calculatetip);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculatetip();
  }
});
