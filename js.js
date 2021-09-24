$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn", 
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
    });
 
    $('.nav-trigger').click(function(){
       $('.site-content-wrapper').toggleClass('scaled');
    })
 });

const counter = () => {

   let upComingDate = new Date('sep 25, 2021 10:30:00').getTime()
   let currentDate = new Date().getTime()
   let dif = upComingDate - currentDate

   let days = parseInt(dif / (60 * 60 * 24 * 1000))
   let hours = parseInt((dif % (60 * 60 * 24 *1000)) / (60 * 60 * 1000))
   let minutes = parseInt((dif % (60 * 60 *1000)) / (60 * 1000))
   let seconds = parseInt((dif % (60*1000)) / 1000)

   let daysDiv = document.getElementById('days')
   let hoursDiv = document.getElementById('hours')
   let minutesDiv = document.getElementById('minutes')
   let secondsDiv = document.getElementById('seconds')

   daysDiv.firstElementChild.innerHTML = days
   hoursDiv.firstElementChild.innerHTML = hours
   minutesDiv.firstElementChild.innerHTML = minutes
   secondsDiv.firstElementChild.innerHTML = seconds

}

setInterval(counter,1000)