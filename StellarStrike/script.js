var count = 0


function replace() {
	const listItem = document.getElementById("woo")
    const newItem = document.createElement('li');
	newItem.innerHTML = '<button onclick="myFunction()" class="bubbly-button"><span style="font-color:#0e151a">Click Here</span></button>';
    listItem.parentNode.replaceChild(newItem, listItem);
    
}
function myFunction() {
    count++
    document.getElementById("demo").innerHTML = count + 1;
}

function myFunction2() {
    localStorage.setItem("names","[]");
	
    var cps = (count++)/3
    var roundedCps = +cps.toFixed(2);
    console.log(cps)
    count = 0

    var noParse = localStorage.getItem("names");
    var cps_array = JSON.parse(noParse) 
    cps_array[cps_array.length] = roundedCps
    localStorage.setItem("names", JSON.stringify(cps_array));
    var storedNames = JSON.parse(localStorage.getItem("names"));
    console.log(storedNames)

    window.location.href="https://weirdkidwastaken.github.io/WeirdKidWastaken/StellarStrike/score.html?" + roundedCps
}

var cps_array = [];
cps_array[0] = roundedCps
localStorage.setItem("names", JSON.stringify(cps_array));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames)
