/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()


const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)



// ** Calculate the total bill per person **
const calculateBill = () => {


  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value / 100)


  // get the total tip amount
  const tipAmount = Number(bill * tipPercentage)


  // calculate the total (tip amount + bill)
  const totalAmount = bill + tipAmount


  // calculate the per person total (total divided by number of people)
  const perPersonTotal = (totalAmount / numberOfPeople)




  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = perPersonTotal.toLocaleString('en-IN')

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)


  // decrement the amount of people
  if (numberOfPeople == 1) {
    alert("Do You Want Us To Be Bankrupt 😍🤷‍♀️🤷‍♂️😉")
    // we can write return also

  }
  else {
    numberOfPeople -= 1;
  }

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
