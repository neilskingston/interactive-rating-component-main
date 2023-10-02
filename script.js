/*<---SELECT RATING--->*/
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const orangeColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-orange");
const whiteColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-white");
const darkGray = getComputedStyle(document.documentElement).getPropertyValue("--clr-dark-gray");
const lightGray = getComputedStyle(document.documentElement).getPropertyValue("--clr-light-gray");


one.addEventListener("click", e => {
  one.style.backgroundColor = orangeColor
  one.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "1"
  let notRatings = [two, three, four, five];
  notRatings.forEach(rating => {
    rating.style.backgroundColor = darkGray
    rating.style.color = lightGray
    
  });
})
two.addEventListener("click", e => {
  two.style.backgroundColor = orangeColor
  two.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "2"
  let notRatings = [one, three, four, five];
  notRatings.forEach(rating => {
    rating.style.backgroundColor = darkGray
    rating.style.color = lightGray
    
  });
})
three.addEventListener("click", e => {
  three.style.backgroundColor = orangeColor
  three.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "3"
  let notRatings = [one, two, four, five];
  notRatings.forEach(rating => {
    rating.style.backgroundColor = darkGray
    rating.style.color = lightGray
    
  });
})
four.addEventListener("click", e => {
  four.style.backgroundColor = orangeColor
  four.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "4"
  let notRatings = [one, two, three, five];
  notRatings.forEach(rating => {
    rating.style.backgroundColor = darkGray
    rating.style.color = lightGray
    
  });
})
five.addEventListener("click", e => {
  five.style.backgroundColor = orangeColor
  five.style.color = whiteColor
  document.getElementById("imported-rating").innerHTML = "5"
  let notRatings = [one, two, three, four];
  notRatings.forEach(rating => {
    rating.style.backgroundColor = darkGray
    rating.style.color = lightGray
    
  });
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
