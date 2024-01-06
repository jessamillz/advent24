//******************************** */
// TEST AREA
//******************************** */
//Check date to see if date is the correct date or later, if it is run the function for specific box, if not then alert indicating to come back in specific number of days.
//Need global date variable for today's date
//Need local date variable for each box, or global date variable that is 12/1/2022 and add numbers to the days to get the specific date for each box. Ex: if box_3 is selected, then day += 2. local date for box 3 is now 12/3/2022.

// let date1 = new Date(); //get todays full date
// let adventDate = new Date("12/01/2022"); //date of advent
// let today = date1.toDateString(); //turning todays date into just day of week, month, date, year.
// let adventDay = adventDate.toDateString(); //turning advent date into just day of week, month, date, year.
// let timeDifference = adventDate.getTime() - date1.getTime(); //gets time between dates in milliseconds
// let dayDifference = timeDifference / (1000 * 3600 *24); // converts time to days between dates
// let daysUntil = Math.trunc(dayDifference); //remove decimals
// alert("Today's date is " + today + ". December first is " + adventDay + ". Number of days until " + adventDay + ": " + daysUntil +"!");

//******************************** */
// Code below was reduced with functions boxClick, acivateBox and adventFun.
//******************************** */
// Available to click 12/1/22

// function advent1Fun() {
//     if (checkDate(new Date("12/01/2022")) == true) {
//         activateBox1();
//     }
// }
//activateBox1 runs the daily advent
// function activateBox1(){
// 	document.querySelector('#box_1_bg').classList.toggle('hidden')
// }

//On click, activateBox1 function runs IF date is correct date or later. Put advent1Fun into anonymous function so it is only run when called.
// ex: document.querySelector('#box_1').addEventListener('click', () => advent1Fun());
// document.querySelector('#box_1').addEventListener('click', advent1Fun());
// document.querySelector('#box_1').addEventListener('click', () => adventFun('12/01/2022', '#box_1_bg'));


//******************************** */
// COUNTDOWN TIMER
//******************************** */
// Set the date we're counting down to
const countDownDate = new Date("12/25/2022").getTime();

// Update the count down every 1 second, that's the 1000 at the end of the function
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds (remember time is in milliseconds so we need to *1000)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Christmas has already arrived";
  }
}, 1000);

//******************************** */
// function occurs on box click getting input for actions 
//******************************** */
function boxClick(boxId, adventDate, adventBoxId) {
    document.querySelector(boxId).addEventListener('click', () => adventFun(adventDate, adventBoxId))
}
//******************************** */
// CHECK DATE TO SEE IF WE CAN RUN ADVENT OR NOT, IF NOT ALERT HOW MUCH TIME UNTIL WE CAN
//******************************** */
function checkDate(adventDate){
    let date1 = new Date();
    let today = date1.toDateString();
    let adventDay = adventDate.toDateString();
    let timeDifference = adventDate.getTime() - date1.getTime();
    let dayDifference = timeDifference / (1000 * 3600 *24);
    let daysUntil = Math.floor(dayDifference);
    let hoursUntil = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)); 
    let minutesUntil = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    let secondsUntil = Math.floor((timeDifference % (1000 * 60)) / 1000);
    if (date1 >= adventDate ) { //can compare date objects with =, <, >, >=
        return true;
    }
    else { 
        alert("Today's date is " + today + ". This box will be available on " + adventDay + ". Time until " + adventDay + ": " + daysUntil +" days, " + hoursUntil + " hours, " + minutesUntil + " minutes, " + secondsUntil + " seconds!");
        }  
}
//******************************** */
// function inputs adventDate and adventBoxId. if checkdate is true for adventDate, activates activateBox function to show advent for that day!
//******************************** */
function adventFun(adventDate, adventBoxId) {
    if (checkDate(new Date(adventDate)) == true) {
        activateBox(adventBoxId);
    }
}
//******************************** */
// function activates the advent for that day 
//******************************** */
function activateBox(adventBoxId){
	document.querySelector(adventBoxId).classList.toggle('hidden');
}

//******************************** */
// BOX 1 DONE
//******************************** */
// Available to click 12/1/22
boxClick('#box_1', '12/01/2022', '#box_1_advent');


//******************************** */
// BOX 2 DONE
//******************************** */
// Available to click 12/2/22
boxClick('#box_2', '12/02/2022', '#box_2_advent');

//******************************** */
// BOX 3 DONE
//******************************** */
// Available to click 12/3/22
boxClick('#box_3', '12/03/2022', '#box_3_advent');

//******************************** */
// BOX 4 DONE
//******************************** */
// Available to click 12/4/22
boxClick('#box_4', '12/04/2022', '#box_4_advent');

//******************************** */
// BOX 5 DONE
//******************************** */
// Available to click 12/5/22
boxClick('#box_5', '12/05/2022', '#box_5_advent');

//******************************** */
// BOX 6 DONE
//******************************** */
// Available to click 12/6/22
boxClick('#box_6', '12/06/2022', '#box_6_advent');

//******************************** */
// BOX 7 DONE
//******************************** */
// Available to click 12/7/22
boxClick('#box_7', '12/07/2022', '#box_7_advent');

//******************************** */
// BOX 8 DONE
//******************************** */
// Available to click 12/8/22
boxClick('#box_8', '12/08/2022', '#box_8_advent');

//******************************** */
// BOX 9 DONE 
//******************************** */
// Available to click 12/9/22
boxClick('#box_9', '12/09/2022', '#box_9_advent');

//******************************** */
// BOX 10 DONE
//******************************** */
// Available to click 12/10/22
boxClick('#box_10', '12/10/2022', '#box_10_advent');

//******************************** */
// BOX 11 DONE
//******************************** */
// Available to click 12/11/22
boxClick('#box_11', '12/11/2022', '#box_11_advent');

//******************************** */
// BOX 12 DONE
//******************************** */
// Available to click 12/12/22
boxClick('#box_12', '12/12/2022', '#box_12_advent');

//******************************** */
// BOX 13 DONE
//******************************** */
// Available to click 12/13/22
boxClick('#box_13', '12/13/2022', '#box_13_advent');

//******************************** */
// BOX 14 DONE
//******************************** */
// Available to click 12/14/22
boxClick('#box_14', '12/14/2022', '#box_14_advent');

//******************************** */
// BOX 15 DONE
//******************************** */
// Available to click 12/15/22
boxClick('#box_15', '12/15/2022', '#box_15_advent');

//******************************** */
// BOX 16 DONE
//******************************** */
// Available to click 12/16/22
boxClick('#box_16', '12/16/2022', '#box_16_advent');

//******************************** */
// BOX 17 DONE
//******************************** */
// Available to click 12/17/22
boxClick('#box_17', '12/17/2022', '#box_17_advent');

//******************************** */
// BOX 18 DONE
//******************************** */
// Available to click 12/18/22
boxClick('#box_18', '12/18/2022', '#box_18_advent');

//******************************** */
// BOX 19 DONE
//******************************** */
// Available to click 12/19/22
boxClick('#box_19', '12/19/2022', '#box_19_advent');

//******************************** */
// BOX 20 DONE
//******************************** */
// Available to click 12/20/22
boxClick('#box_20', '12/20/2022', '#box_20_advent');

//******************************** */
// BOX 21 DONE
//******************************** */
// Available to click 12/21/22
boxClick('#box_21', '12/21/2022', '#box_21_advent');

//******************************** */
// BOX 22 DONE
//******************************** */
// Available to click 12/22/22
boxClick('#box_22', '12/22/2022', '#box_22_advent');

//******************************** */
// BOX 23 DONE
//******************************** */
// Available to click 12/23/22
boxClick('#box_23', '12/23/2022', '#box_23_advent');

//******************************** */
// BOX 24 DONE
//******************************** */
// Available to click 12/24/22
boxClick('#box_24', '12/24/2022', '#box_24_advent');

//******************************** */
// BOX 25 DONE
//******************************** */
// Available to click 12/25/22
boxClick('#box_25', '12/25/2022', '#box_25_advent');
