/////// VARIABLES
const btn = document.querySelectorAll(".btn");
const btnReload = document.querySelector(".display__btn");

const tipAmPer = document.querySelector(".value-1");
const totPer = document.querySelector(".value-2");

const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num_of-people");
const customInput = document.getElementById("custom");

const err1 = document.querySelector(".error-1");
const err2 = document.querySelector(".error-2");

//////// FUNCTIONS
const result = function (input) {
  let bill = Number(document.getElementById("bill").value); // BILL
  let numOfPeop = Number(document.getElementById("num_of-people").value); // NUMBER OF PEOPLE

  tipAmPer.textContent = `$${((bill * input) / numOfPeop).toFixed(2)}`; // Tip Amount / Person
  totPer.textContent = `$${((bill + bill * input) / numOfPeop).toFixed(2)}`; // Total / person
};

//////// EVENT LISTENERS
btn.forEach((value) =>
  value.addEventListener("click", () => {
    let btnPercentage = Number(value.textContent.replace("%", "")) / 100;

    let bill = Number(document.getElementById("bill").value); // BILL
    let numOfPeop = Number(document.getElementById("num_of-people").value); // NUMBER OF PEOPLE

    //Reset button color
    btn.forEach((value) => (value.style.backgroundColor = "rgb(0,73,77)"));

    //First check
    if (bill <= 0 || !Number(bill)) {
      billInput.style.border = "2px solid rgb(255, 0, 0)";
      err1.style.opacity = 1;
      return;
    }

    billInput.style.border = "2px solid transparent";
    err1.style.opacity = 0;

    //Second check
    if (numOfPeop <= 0 || !Number(numOfPeop)) {
      peopleInput.style.border = "2px solid rgb(255, 0, 0)";
      err2.style.opacity = 1;
      return;
    }

    peopleInput.style.border = "2px solid transparent";
    err2.style.opacity = 0;

    ////////////////////////////////////////////////////////////////////////////////////

    value.style.backgroundColor = "rgb(38,192,171)";
    btnReload.style.filter = "none";

    result(btnPercentage);
  })
);

/////////////////////////////////////////////

customInput.addEventListener("change", () => {
  let customValue = Number(document.getElementById("custom").value) / 100;
  btnReload.style.filter = "none";
  result(customValue);
});
