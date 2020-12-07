$(document).ready(function(){
    $("#stkbtn1").click(function(){
      $("#stkbtn6").toggle();
    });
});

$(document).ready(function(){
    $("#stkbtn2").click(function(){
      $("#stkbtn5").toggle();
    });
});

$(document).ready(function(){
    $("#stkbtn3").click(function(){
      $("#stkbtn4").toggle();
    });
});

$(document).ready(function(){
    $("#stkbtn4").click(function(){
      $("#stkbtn3").toggle();
    });
});

$(document).ready(function(){
    $("#stkbtn5").click(function(){
      $("#stkbtn2").toggle();
    });
});

$(document).ready(function(){
    $("#stkbtn6").click(function(){
      $("#stkbtn1").toggle();
    });
});


let dropBtn = document.getElementById('loadDrp');
dropBtn.addEventListener('click',getData,true);

let clrBtn = document.getElementById('clearDrp');
clrBtn.addEventListener('click',clearData,true);
$('#clearDrp').attr('disabled', true);

/*let dropdown = $('#country-dropdown');

dropdown.append('<option selected="true" disabled>Choose Country</option>');
dropdown.prop('selectedIndex', 0);
*/
let dropdown2 = $('#countryList');

dropdown2.append('<option selected="true" disabled>Choose Country</option>');
dropdown2.prop('selectedIndex', 0);


async function getData() {
  
  const dropdownData = 'https://restcountries.eu/rest/v2/all';

  $.getJSON(dropdownData, function (data) {
    $.each(data, function (key, entry) {
      /*dropdown.append($('<option></option>').attr('value', entry.alpha2Code).text(entry.name));*/
      dropdown2.append($('<option></option>').attr('value', entry.alpha2Code).text(entry.name));
    })
  });
  
  
  $('#loadDrp').attr('disabled', true);
  $('#clearDrp').attr('disabled', false);
}

function clearData(){

  /*dropdown.empty();
  dropdown.append('<option selected="true" disabled>Choose Country</option>');
  dropdown.prop('selectedIndex', 0);*/

  dropdown2.empty();
  dropdown2.append('<option selected="true" disabled>Choose Country</option>');
  dropdown2.prop('selectedIndex', 0);



  console.log('dropdown cleared');
  $('#loadDrp').attr('disabled', false);
  $('#clearDrp').attr('disabled', true);

}








