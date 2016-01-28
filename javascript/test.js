//my quote... the parts in asteriks are the variables that will chance...

// "The Great *Society* is a place where every *child* can find knowledge to enrich his *mind* and to enlarge his *talents.*  It is a place where the *city* of *man* serves not only the needs of the *body* and the demands of *commerce* but the desire for *beauty* and the *hunger* for *community.* It is a place where *men* are more concerned with the quality of their *goals* than the quantity of their *goods*." Lyndon B. Johnson

var static_words1 = "The Great ";
var static_words2 = " is a place where every ";
var static_words3 = " can find knowledge to enrich his ";
var static_words4 = " and to enlarge his ";
var static_words5 = ". It is a place where the ";
var static_words6 = " of ";
var static_words7 = " serves not only the needs of the ";
var static_words8 = " and the demands of ";
var static_words9 = ", but the desire for ";
var static_words10 = " and the ";
var static_words11 = " for ";
var static_words12 = ". It is a place where ";
var static_words13 = " are more concerned with the quality of their ";
var static_words14 = " than the quantity of their ";
var button = document.getElementById("submit");
//don't forget! DOM = document object model
button.addEventListener("click", onClick, false);

function onClick(evt)
{  evt.preventDefault(evt); 
  
    //Forms
    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    var element6 = document.getElementById("form1").elements.item(5).value;
    var element7 = document.getElementById("form1").elements.item(6).value;
    var element8 = document.getElementById("form1").elements.item(7).value;
    var element9 = document.getElementById("form1").elements.item(8).value;
    var element10 = document.getElementById("form1").elements.item(9).value;
    var element11 = document.getElementById("form1").elements.item(10).value;
    var element12 = document.getElementById("form1").elements.item(11).value;
    var element13 = document.getElementById("form1").elements.item(12).value;
    var element14 = document.getElementById("form1").elements.item(13).value;
 console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6 + element6 + static_words7 + element7 + static_words8 + element8 + static_words9 + element9 + static_words10 + element10 + static_words11 + element11 + static_words12 + element12 + static_words13 + element13 + static_words14 + element14);
 // document.getElementID("myForm").elements.item(0).value;
  // return false;
}