// tIME CODE LINE HERE 
var time = moment().format('MMMM Do YYYY [at] h:mm:ss a');
$("#time-display").text(time);


$('.btn').on("click",function( event ){
console.log($(this).siblings());
var taxt=$(this).siblings("textarea").val()
console.log(taxt)
var hour= $(this).siblings("div").text()
console.log(hour)
// CODE TO STOR THE TEXT IN LOCAL STORAGE
localStorage.setItem(hour,text)

});
// CODE TO SHOW THE TEXT AND WHAT IS STORED 
var ROW1= localStorage.getItem("9AM")
$('#9AM').val(ROW1);

var ROW2= localStorage.getItem("10AM")
$('#10AM').val(ROW2);

var ROW3= localStorage.getItem("11AM")
$('#11AM').val(ROW3);

var ROW4= localStorage.getItem("12AM")
$('#12AM').val(ROW4);

var ROW5= localStorage.getItem("1PM")
$('#1PM').val(ROW5);

var ROW6= localStorage.getItem("2PM")
$('#2PM').val(ROW6);

var ROW7= localStorage.getItem("3PM")
$('#3PM').val(ROW7);

var ROW8= localStorage.getItem("9AM")
$('#9AM').val(ROW8);

