/*<---SELECT RATING--->*/
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const orangeColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-orange");
const whiteColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-white");

one.addEventListener("click", e => {
  one.style.backgroundColor = orangeColor
  one.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "1"
})


/*<---CHANGE PAGE--->*/
const submit = document.getElementById("button");
const ratingsCard=document.getElementById("ratings-card");
const thankyouCard=document.getElementById("thankyou-card");

function changePage() {
  ratingsCard.style.display = "none"
  thankyouCard.style.display = "flex"
}


submit.onclick = changePage;
