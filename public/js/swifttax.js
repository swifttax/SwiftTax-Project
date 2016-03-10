
$(".nextBtn1").hide();
$(".nextBtn1A").hide();
$("#validNameCheck").hide();
$("#interestForm").hide();
$("#unemploymentForm").hide();
$(".centerText14").hide();
$("#armedForcesForm").hide();
$("#combatPay").hide();
$("#returnOwePage").hide();

$(document).ready(function(){
  $("#validOccupationCheck").hide();
  $("#address").hide();
  $("#finalForm").hide();
  $("#validLastNameCheck").hide()
  $(".nextBtn1B").hide();
  $(".nextBtn1A").hide();
  $("#validSSNCheck").hide();
  $(".modal").css("padding","10px");
  $(".modal-content").css("padding","10px");
  $("#on3").hide();
  $(".button-collapse").sideNav();
  $("#armedForcesQuestion0").hide();
  $("#flagDiv").hide();
  $(".nextBtn1").hide();
  $("#validNameCheck").hide();
  $("#interestForm").hide();
  $("#unemploymentForm").hide();
  $(".centerText14").hide();
  $("#armedForcesForm").hide();
  $("#combatPay").hide();
  $("#returnOwePage").hide();
  $("#text_16_1").hide();
  $("#text_16_2").hide();
  $("#text_16_3").hide();
  $("#text_16_4").hide();
  $("#modal19").hide();
  $("#modal17").hide();
  $("#validNameCheck").hide();
  $("#on").hide();
  $("#on2").hide();
  $(".nextBtnOwe").hide();
  $(".nextBtnRefund").hide();
  $(".backBtn16").hide();
  $(".nextBtn1D").hide();
  $("#finalRefundText").hide();
  $(".nextBtn1").hide();
   $('.modal-trigger').leanModal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
    });

  var filingStatusAnswer;
  var inputName;
  var ssnArray = []

  $("#inputFirstName").keyup(function(){
    if ((/[A-Z]/ig).test($("#inputFirstName").val())) {
        $("#validNameCheck").hide()
        if ($("#inputFirstName").val().length > 1) {
          $(".nextBtn1").fadeIn(300).css("transition: ''");
        }
    }
    if (($("#inputFirstName").val().length < 2)) {
      $(".nextBtn1").fadeOut(300).css("transition: ''");
       $("#validNameCheck").show() 
    }
    if (!((/[A-Z]/ig).test($("#inputFirstName").val()))) {
      $("#validNameCheck").show() 
    }
  });


// SSN Input Test _______________________________________

var ssnArray = [];
$("#inputSSN").keyup(function(){
  if ((/[0-9]/ig).test($("#inputSSN").val())) {
    $("#validSSNCheck").hide();
    if ($("#inputSSN").val().length == 3) {
         ssnArray = [];
         ssnArray.push($("#inputSSN").val());
         ssnArray.push("-");
    $("#inputSSN").val(ssnArray.join(""))
         // $("#inputSSN").val(ssnArray.toString());
         console.log(ssnArray);
     }
  if ($("#inputSSN").val().length == 6) {
    ssnArray = [];
    ssnArray.push($("#inputSSN").val());
    ssnArray.push("-");
      $("#inputSSN").val(ssnArray.join(""))
    // $("#inputSSN").val(ssnArray.toString());
      console.log(ssnArray);
  }
  if ($("#inputSSN").val().length == 11) {
    ssnArray.push($("#inputSSN").val());
    $(".nextBtn1A").show();
  }
}
if((/[a-z]/ig).test($("#inputSSN").val())) {
  $("#inputSSN").val("");
  ssnArray = [];
  $("#validSSNCheck").show();
  $(".nextBtn1A").hide();
}
});

// _______________________________________
  // Last Name Check

  $("#inputLastName").keyup(function(){
    if ((/[A-Z]/ig).test($("#inputLastName").val())) {
        $("#validLastNameCheck").hide()
        if ($("#inputLastName").val().length > 1) {
          $(".nextBtn1B").fadeIn(300).css("transition: ''");
        }
    }
    if (($("#inputLastName").val().length < 2)) {
      $(".nextBtn1B").fadeOut(300).css("transition: ''");
       $("#validLastNameCheck").show() 
    }
    if (!((/[A-Z]/ig).test($("#inputLastName").val()))) {
      $(".nextBtn1B").fadeOut(300).css("transition: ''");
      $("#validLastNameCheck").show() 
    }
  });

// ____________________________________________
	// Occupation Check
  $("#inputOccupation").keyup(function(){
    if ((/[A-Z]/ig).test($("#inputOccupation").val())) {
        $("#validOccupationCheck").hide()
        if ($("#inputOccupation").val().length > 1) {
          $(".nextBtn1D").fadeIn(300).css("transition: ''");
        }
    }
    if (($("#inputOccupation").val().length < 2)) {
      $(".nextBtn1D").fadeOut(300).css("transition: ''");
       $("#validOccupationCheck").show() 
    }
    if (!((/[A-Z]/ig).test($("#inputOccupation").val()))) {
      $(".nextBtn1D").fadeOut(300).css("transition: ''");
      $("#validOccupationCheck").show() 
    }
  });


  // _________________________________________


  $(".nextBtn1").click(function(){
    inputName = $.trim($("#inputFirstName").val())
    $("#inputNameValue").text("Thanks " + inputName + "!")
    $('#modal1').closeModal({out_duration: 0,});
    $('#modal1A').openModal({out_duration: 0,});
  });
  $(".nextBtn1A").click(function(){
    $('#modal1A').closeModal({out_duration: 0,});
    $('#modal1B').openModal({in_duration: 0,});
  });
   $(".backBtn1A").click(function(){
    $('#modal1A').closeModal({out_duration: 0,});
    $('#modal1').openModal({in_duration: 0,});
  });
     $(".nextBtn1B").click(function(){
    $('#modal1B').closeModal({out_duration: 0,});
    $('#modal1C').openModal({in_duration: 0,});
  });
   $(".backBtn1B").click(function(){
    $('#modal1B').closeModal({out_duration: 0,});
    $('#modal1A').openModal({in_duration: 0,});
  });
   $(".backBtn1C").click(function(){
    $('#modal1C').closeModal({out_duration: 0,});
    $('#modal1B').openModal({in_duration: 0,});
  });
   $(".nextBtn1C").click(function(){
    $('#modal1C').closeModal({out_duration: 0,});
    $('#modal1D').openModal({out_duration: 0,});
  });    
 $(".backBtn1D").click(function(){
    $('#modal1D').closeModal({out_duration: 0,});
    $('#modal1C').openModal({in_duration: 0,});
  });
   $(".nextBtn1D").click(function(){
    $('#modal1D').closeModal({out_duration: 0,});
    $('#modal2').openModal({out_duration: 0,});
    setTimeout(function(){
       $("#on").show();
    },400)
   
  });
  $(".nextBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal3').openModal({in_duration: 0,});
  });
   $(".backBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal1C').openModal({in_duration: 0,});
  });
   $(".nextBtn3").click(function(){
    $('#modal3').closeModal({out_duration: 0,});
    $('#modal4').openModal({in_duration: 0,});
  });
   $(".backBtn3").click(function(){
    $('#modal3').closeModal({out_duration: 0,});
    $('#modal2').openModal({in_duration: 0,});
  });
    $(".nextBtn4").click(function(){
    $('#modal4').closeModal({out_duration: 0,});
    $('#modal5').openModal({in_duration: 0,});
    $('.centerBtn5').show();
    $("#interestForm").hide();
    $(".nextBtn5").text("No");
    $("#interestQuestion").text("Did you receive any taxable interest in 2015?");
  });
   $(".backBtn4").click(function(){
    $('#modal4').closeModal({out_duration: 0,});
    $('#modal3').openModal({in_duration: 0,});
  });
    $(".nextBtn5").click(function(){
    $('#modal5').closeModal({out_duration: 0,});
    $('#modal6').openModal({in_duration: 0,});
    $('.centerBtn6').show();
    $("#unemploymentForm").hide();
    $(".nextBtn6").text("No");
    $("#stormDiv").show();
    $("#unemployQuestion").text("Did you receive any unemployment compensation in 2015?");
  });
   $(".backBtn5").click(function(){
    $('#modal5').closeModal({out_duration: 0,});
    $('#modal4').openModal({in_duration: 0,});
  });
  $(".centerBtn5").click(function(){
    $('.centerBtn5').hide();
    $("#interestForm").slideDown(0);
    $(".nextBtn5").text("Continue");
    $("#interestQuestion").text("Enter your total taxable interest.");
  });
    $(".nextBtn6").click(function(){
    $('#modal6').closeModal({out_duration: 0,});
    $('#modal7').openModal({in_duration: 0,});
    $('.centerBtn7').show();
    $("#alaskaForm").hide();
    $(".nextBtn7").text("No");
    $("#alaskaQuestion").text("Did you receive any Alaska Permanent Fund dividends in 2015?");
  });
   $(".backBtn6").click(function(){
    $('#modal6').closeModal({out_duration: 0,});
    $('#modal5').openModal({in_duration: 0,});
    $("#stormDiv").show();
    $('.centerBtn5').show();
    $("#interestForm").hide();
    $(".nextBtn5").text("No");
    $("#interestQuestion").text("Did you receive any taxable interest in 2015?");
  });
  $(".centerBtn6").click(function(){
    $("#stormDiv").hide();
    $('.centerBtn6').hide();
    $("#unemploymentForm").slideDown(0);
    $(".nextBtn6").text("Continue");
    $("#unemployQuestion").text("Enter your total unemployment compensation received in 2015.");
  });
    $(".nextBtn7").click(function(){
    $('#modal7').closeModal({out_duration: 0,});
    $('#modal8').openModal({in_duration: 0,}); 
    $("#greatNews").text("Great news, " + inputName + "!")
  });
    $(".backBtn7").click(function(){
    $('#modal7').closeModal({out_duration: 0,});
    $('#modal6').openModal({in_duration: 0,});
    $('.centerBtn6').show();
    $("#unemployForm").hide();
    $(".nextBtn6").text("No");
    $("#unemployQuestion").text("Did you receive any unemployment compensation in 2015?");
  });
  $(".centerBtn7").click(function(){
    $('.centerBtn7').hide();
    $("#alaskaForm").slideDown(0);
    $(".nextBtn7").text("Continue");
    $(".alaska").hide();
    $("#alaskaQuestion").text("Enter your total Alaska Permanent Fund dividends received in 2015.");
  });
    $(".nextBtn8").click(function(){
    $('#modal8').closeModal({out_duration: 0,});
    $('#modal9').openModal({in_duration: 0,}); 
    unemploymentAlaska = (parseInt($("#inputUnemp").val()) + parseInt($("#inputAlaska").val()));
    totalIncome();
  });
    $(".backBtn8").click(function(){
    $('#modal8').closeModal({out_duration: 0,});
    $('#modal7').openModal({in_duration: 0,});
    $('.centerBtn7').show();
    $("#alaskaForm7").hide();
    $(".nextBtn7").text("No");
    $("#alaskaQuestion").text("Did you receive any Alaska Permanent Fund dividends in 2015?");
  });
    $(".nextBtn9").click(function(){
    $('#modal9').closeModal({out_duration: 0,});
    $('#modal10').openModal({in_duration: 0,}); 
    $("#doneIncome").text("Congrats, " + inputName + "!")
    marriedStatus = false;
  });
    $(".backBtn9").click(function(){
    $('#modal9').closeModal({out_duration: 0,});
    $('#modal8').openModal({in_duration: 0,});
  });
  $(".centerBtn9").click(function(){
     $('#modal9').closeModal({out_duration: 0,});
    $('#modal10').openModal({in_duration: 0,}); 
    $("#doneIncome").text("Congrats, " + inputName + "!")
     marriedStatus = true;
  });
    $(".nextBtn10").click(function(){
      console.log("clicked modal 10");
      dependentStatus = false;
    $('#modal10').closeModal({out_duration: 0,});
    $('#modal11').openModal({in_duration: 0,}); 
     setTimeout(function(){
       $("#on2").show();
    },400)
  });
     $(".centerBtn10").click(function(){
      console.log("clicked modal 10");
    $('#modal10').closeModal({out_duration: 0,});
    $('#modal11').openModal({in_duration: 0,}); 
    dependentStatus = true;
  });
    $(".backBtn10").click(function(){
      $('#modal10').closeModal({out_duration: 0,});
      $('#modal9').openModal({in_duration: 0,});
  });
    $(".nextBtn11").click(function(){
      $('#modal11').closeModal({out_duration: 0,});
      $('#modal12').openModal({in_duration: 0,}); 
      dependentStatusFunction();
  });
    $(".backBtn11").click(function(){
      $('#modal11').closeModal({out_duration: 0,});
      $('#modal10').openModal({in_duration: 0,});
  });
    $(".nextBtn12").click(function(){
      $('#modal12').closeModal({out_duration: 0,});
      $('#modal13').openModal({in_duration: 0,});
      if (marriedStatus){
        filingStatusAnswer = "Jointly"
      } 
      if (!(marriedStatus)){
        filingStatusAnswer = "Individual"
      }
       standDeductionFunction();
       creditsFunction();
      $("#taxableIncomeSpan").text("$" + taxableIncome.toFixed(2));
      $("#filingStatusAnswerSpan").text("'" + filingStatusAnswer + "'");
      $("#eicSpan").text("$" + eic.toFixed(2));
      console.log("Based on your calculated Adjusted Gross Income of $" + taxableIncome + " and your Filing Status of " + filingStatusAnswer + ", your Earned Income Credit (EIC) is: $" + eic);
  });
    $(".backBtn12").click(function(){
      $('#modal12').closeModal({out_duration: 0,});
      $('#modal11').openModal({in_duration: 0,});
  });
     $(".nextBtn13").click(function(){
      $('#modal13').closeModal({out_duration: 0,});
      $('#modal14').openModal({in_duration: 0,});


  });
    $(".backBtn13").click(function(){
      $('#modal13').closeModal({out_duration: 0,});
      $('#modal12').openModal({in_duration: 0,});
  });
 $(".nextBtn14").click(function(){
    $('#modal14').closeModal({out_duration: 0,});
    $('#modal15').openModal({in_duration: 0,}); 
     $("#modal14").css("background-image","");
     $("#armedForcesQuestion0").hide();
      $("#armedForcesQuestion").show();
      $("#armedForcesQuestion2").text("");
       $(".centerText14").hide();
    $("#armedForcesForm").hide();
    $(".vet").show();
  });
    $(".backBtn14").click(function(){
      $('#modal14').closeModal({out_duration: 0,});
      $('#modal13').openModal({in_duration: 0,});
       $("#modal14").css("background-image","")
        $("#armedForcesQuestion0").hide();
        $("#armedForcesQuestion").show();
        $("#armedForcesQuestion2").text("");
        $(".centerText14").hide();
    $("#armedForcesForm").hide();
     $(".vet").show();
  });
  $(".centerBtn14").click(function(){
      $("#modal14").css("background-image","url('/img/usFlag.jpg')");
      $("#modal14").css("transition","background-image 10s ease");
    $('.centerBtn14').hide();
    $(".nextBtn14").text("Continue");
    $("#armedForcesQuestion").hide();
    $("#armedForcesQuestion0").show();
    $("#armedForcesQuestion2").text("Enter your Nontaxable Combat Pay Elections, if any.");
    $(".centerText14").show();
    $("#armedForcesForm").show();
     $(".vet").hide();
  });
  $(".centerBtn15").click(function(){
   taxCalcFunction();
    healthInsurance = true;
    totalTaxFunction();
    refundCalcFunction();
     fillHiddenInput();
    $('#modal15').closeModal({out_duration: 0,});
    $('#modal16').openModal({in_duration: 0,}); 
     setTimeout(function(){
      $("#text_16_0").hide();
      $("#text_16_1").fadeIn();
    },1000);
     setTimeout(function(){
     $("#text_16_1").hide();
      $("#text_16_2").fadeIn();
    },2000);
      setTimeout(function(){
      $("#text_16_2").hide();
      $("#text_16_3").fadeIn();
    },3000);
      setTimeout(function(){
      $("#text_16_3").hide();
      $("#loopGif").hide();
      $("#text_16_4").fadeIn();
      $("#finalRefundTextSpan").text("$" + refundRound);
      $("#finalRefundText").fadeIn();
      $(".nextBtnOwe").fadeIn(2000);
      $(".nextBtnRefund").fadeIn(2000);
      $(".backBtn16").fadeIn(2000);
    },4000);
    
    

  });
   $(".nextBtn15").click(function(){
   taxCalcFunction();
   healthInsurance = false;
   totalTaxFunction();
   refundCalcFunction();
   fillHiddenInput();
   $('#modal15').closeModal({out_duration: 0,});
    $('#modal16').openModal({in_duration: 0,}); 
     setTimeout(function(){
      $("#text_16_0").hide();
      $("#text_16_1").fadeIn();
    },1000);
     setTimeout(function(){
     $("#text_16_1").hide();
      $("#text_16_2").fadeIn();
    },2000);
      setTimeout(function(){
      $("#text_16_2").hide();
      $("#text_16_3").fadeIn();
    },3000);
      setTimeout(function(){
      $("#text_16_3").hide();
      $("#loopGif").hide();
      $("#text_16_4").fadeIn();
      $("#finalRefundTextSpan").text("$" + refundRound)
      $("#finalRefundText").fadeIn();
      $(".nextBtnOwe").fadeIn(2000);
      $(".nextBtnRefund").fadeIn(2000);
      $(".backBtn16").fadeIn(2000);
    },4000);
  });
    $(".backBtn15").click(function(){
      $('#modal15').closeModal({out_duration: 0,});
      $('#modal14').openModal({in_duration: 0,});
      $(".centerText14").hide();
      $("#armedForcesForm").hide();
      $(".nextBtn14").text("Yes");
      $('.centerBtn14').hide();
      $("#combatPay").hide();
      $("#armedForcesQuestion").html("");
      $("#armedForcesQuestion").text("");
  });

      $(".nextBtnOwe").click(function(){
      jobGetRequest();
    $(".taxesOwed").text(finalOwe);
    $('#modal16').closeModal({out_duration: 0,});
    $(".taxform").hide();
    $("#coolComputer").hide();
    $("#splashPage").hide();
    $(".macDaddy").hide();
    $('#mainStuff').hide();
    $('#modal17').show();
    $('html,body').scrollTop(0);
    console.log("owe button clicked");
  });

    $("#oweBackBtn").click(function(){
     $('#modal17').hide();
    $('#modal16').openModal({out_duration: 0,});
    $(".taxform").show();
    $("#coolComputer").show();
    $("#splashPage").show();
    $(".macDaddy").show();
     $("html,body").scrollTop(0);
    });
     $(".nextBtnRefund").click(function(){
    $("#refundOwed").text(finalRefund);
    $('#modal16').closeModal({out_duration:0,});
    $('#mainStuff').hide();
    $('#modal19').show();
    $('html,body').scrollTop(0);
    console.log("clickedrefund");

  });

 $("#refundBackBtn").click(function(){
     $('#modal19').hide();
    $('#modal16').openModal({out_duration: 0,});
    $(".taxform").show();
    $("#coolComputer").show();
    $("#splashPage").show();
    $(".macDaddy").show();
  });
  $(".backBtn16").click(function(){
    $('#modal16').closeModal({out_duration: 0,});
    $('#modal15').openModal({in_duration: 0,});
    $("#text_16_0").show();
    $("#text_16_4").hide();
    $("#loopGif").show();
    $(".nextBtnOwe").hide();
    $(".nextBtnRefund").hide();
    $(".backBtn16").hide();
  });
$("#downloadBtn").click(function(){
   $("#finalForm").submit();
setTimeout(function(){
  open("save.pdf");
   },1500);
});
$("#downloadBtn2").click(function(){
  $("#finalForm").submit();
setTimeout(function(){
  open("save.pdf");
   },1500);
});
$("#exitBtn1").click(function(){
      $('#modal17').hide();
      $('#modal18').openModal({in_duration: 0,});

  });
$(".nextBtn18").click(function(){
      $('#modal18').closeModal({out_duration: 0,});
      $(".taxform").show();
      $("#coolComputer").show();
      $("#splashPage").show();
      $("#mainStuff").show();

  });
$(".backBtn18").click(function(){
      $('#modal18').closeModal({out_duration: 0,});
      $('#modal17').show();

  });
$("#exitBtn2").click(function(){
      $("#modal19").hide();
      $('#modal20').openModal({in_duration: 0,});
  });
$(".nextBtn20").click(function(){
      $('#modal20').closeModal({out_duration: 0,});
      $(".taxform").show();
      $("#coolComputer").show();
      $("#splashPage").show();
      $("#mainStuff").show();
  });
$(".backBtn20").click(function(){
      $('#modal20').closeModal({out_duration: 0,});
      $("#modal19").show();

  });
// Indeed API //

     function animatedBoxes(){
  $(".box1").addClass('animated fadeInLeftBig');
  var options = [
      {selector: '.box1', offset: 0, callback: 'Materialize.fadeInImage("animatedBoxes"()' }
  ];
    Materialize.scrollFire(options);
};

var markersArray = [];
var jobLatLng;
var map;
var zip = 78234;
var currentLatLng = {
  lat: 29.426786, 
  lng: -98.489576
}
var jobTitle;
var query;
var jobUrl;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: currentLatLng,
    zoom: 10,
    draggable: true
  });
  console.log("map initialized");
};

// initMap();

google.maps.event.addListenerOnce(map, 'idle', function() {
google.maps.event.trigger(map, 'resize');
});

function xmlToJson(xml) {
  var obj = {};
  if (xml.nodeType == 1) { 
    if (xml.attributes.length > 0) {
    obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    obj = xml.nodeValue;
  }
  if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
    obj = xml.childNodes[0].nodeValue;
  }
  else if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};


function jobGetRequest(){
  jobTitle = $("#boxOccupation").val();
  query = ($.trim(jobTitle)).replace(/\s/g, "+");
  console.log(query);
  jobUrl = "http://api.indeed.com/ads/apisearch?publisher=6167575085685252&q=" + query + "&l=" + zip + "&sort=&radius=&st=&jt=&start=&limit=3&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2";
  $.get(jobUrl)
    .done(function(data){
      
      console.log(data);
      var jobsJson = xmlToJson(data);
      console.log(jobsJson);
      var jobsArray = jobsJson.response.results.result;
      
      jobsArray.forEach(function(element,index){
        console.log(index);
        console.log("______________________");
        console.log("______________________");
        console.log("Job Title: " + element.jobtitle);
        console.log("Employer: " + element.company);
        console.log("Posted " + element.formattedRelativeTime);
        console.log(element.latitude + ", " + element.longitude);
        $("#jobTitle" + index).text(element.jobtitle);
        $("#employer" + index).text(element.company);
        $("#posted" + index).text(element.formattedRelativeTime);
        $("#applyBtn" + index).prop("bacon", element.url);
        // console.log($(".box" + index).prop("bacon"));
        console.log($("#applyBtn" + index).prop("bacon"));
        
        jobLatLng = {
          lat: parseFloat(element.latitude),
          lng: parseFloat(element.longitude)
        };
        console.log(currentLatLng);
        console.log(jobLatLng);

        if (index == 0) {
          letterIcon = "/img/markera.png";
          title = "A";
        }
        else if (index == 1) {
          letterIcon = "/img/markerb.png";
          title = "B";
        }
        else {
          letterIcon = "/img/markerc.png";
          title = "C"
        }
        marker = new google.maps.Marker({
              setMap: map,
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: jobLatLng,
              icon: letterIcon
            });
      
           google.maps.event.trigger(map, 'resize');
          map.setCenter(currentLatLng);
          map.setZoom(10);
      })




      

      $("body").on("click", "#applyBtn0", function(){
        open($("#applyBtn0").prop("bacon"));
        console.log("clicked");
        console.log($("#applyBtn0").prop("bacon"));
      });
      $("body").on("click", "#applyBtn1", function(){
        open($("#applyBtn1").prop("bacon"));
        console.log("clicked");
        console.log($("#applyBtn1").prop("bacon"));
      });
      $("body").on("click", "#applyBtn2", function(){
        open($("#applyBtn2").prop("bacon"));
        console.log("clicked");
        console.log($("#applyBtn2").prop("bacon"));
      });
    });
    function animatedBoxes(){
      $(".box1").addClass('animated fadeInLeftBig');
      var options = [
        {selector: '.box1', offset: 0, callback: 'Materialize.fadeInImage("animatedBoxes"()' }
      ];
      Materialize.scrollFire(options);
    };
  };

// Amazon API Call //

var myDataRef = new Firebase("https://swifttax-amazon-db.firebaseio.com/");
var data;
var basket = [];
var refund = 5000.43;
var randomFirst;
var randomSecond;
var randomThird;
var remainingRefund2;
var remainingRefund3;

myDataRef.on('value', function(snapshot) {
  data = snapshot.val();
  console.log(data);
  console.log(data.length)
  function pickRandomFirst(){
    randomFirst = Math.floor((Math.random()*(data.length - 1))+1);
    console.log(randomFirst);
    console.log(basket);
    basket.push(randomFirst);
  }
  function pickRandomSecond(){
     randomSecond = Math.floor((Math.random()*(data.length - 1))+1)
  };
  function pickRandomThird(){
     randomThird = Math.floor((Math.random()*(data.length - 1))+1)
  };
  function pickSecondItem(){
    remainingRefund2 = (refund - (data[randomFirst].price));
    if (basket.length < 3) {
        pickRandomSecond();
        console.log(randomSecond);
        if (randomSecond != randomFirst){
              basket.push(randomSecond);
              return
            }
            else {
              pickSecondItem();
            }
    }   
  };


  function pickThirdItem(){
    remainingRefund3 = (refund - ((data[randomFirst].price) + data[randomSecond].price));
    if (basket.length < 3) {
        pickRandomThird();
        console.log(randomThird);
        if (randomThird != randomSecond){
            basket.push(randomThird);
            console.log("remainFinal " + (refund-((parseFloat(data[basket[0]].price) + parseFloat(data[basket[1]].price) + parseFloat(data[basket[2]].price)))));
           
            console.log("items: " + data[basket[0]].name + data[basket[1]].name + data[basket[2]].name)
            
            return
          }
        else {
          pickThirdItem();
        }     
    }
  };
  
  function fillBasket(){
    pickRandomFirst();
    pickSecondItem();
    pickThirdItem();
  };


  function amazonRequest(){
    fillBasket();
    $(".amazonBox1").hide();
    $(".amazonBox2").hide();
    $(".amazonBox3").hide();
    basket.forEach(function(element, index){
        $("#amazonText" + index).text(data[basket[index]].name);
        $("#amazonImg" + index).attr("src", data[basket[index]].image);
        var ratingUrl = "img/" + data[basket[index]].rating + "star.png";
        $("#rating" + index).attr("src", ratingUrl);
        if (data[basket[index]].shipping != 'prime'){
          $("#shipping" + index).text(data[basket[index]].shipping);
        }
        else {
          $("#shipping" + index).html($('<img>', { 
          src : "img/primelogo.png",
          height: 22,
          width: 77
        }));
        }
        console.log(data[basket[index]].price);
        console.log((data[basket[index]].price).toFixed(2));
        $("#price" + index).text("$" + (data[basket[index]].price).toFixed(2));
        $("#url" + index).attr("href", data[basket[index]].url );
    });
    setTimeout(function(){
      $(".amazonBox1").fadeIn(800);
    },100);
     setTimeout(function(){
      $(".amazonBox2").fadeIn(800);
    },600);
      setTimeout(function(){
      $(".amazonBox3").fadeIn(800);
    },1100);
  };

  amazonRequest();
  
  $("#refreshBtn").click(function(){
    basket = []
     amazonRequest();
  });

});
 // Hidden Form JS 

 var dependentStatus;
var cityAddress;
var streetAddress;
var unemploymentAlaska;


    function fillHiddenInput (){
       
        streetAddress = ($("#street_number").val() + " " + $("#route").val());
       cityAddress = ($("#locality").val() + ", " + $("#administrative_area_level_1").val() + " " + $("#postal_code").val());
      console.log(cityAddress);
      console.log("filled table");
      console.log($("#inputWages").val());
      $("#boxfirstName").val($("#inputFirstName").val());
      $("#boxlastName").val($("#inputLastName").val());
      $("#box_ssn").val($("#inputSSN").val());
      $("#box_nameFirstSpouse").val("");
      $("#box_nameLastSpouse").val("");
      $("#box_spouse_social").val("");
      $("#box_street").val(streetAddress);
      $("#box_apt_no").val("");
      $("#box_city").val(cityAddress);
      console.log($("#box_city").val());
      $("#box1").val($("#inputWages").val());
      $("#box2").val($("#inputInterest").val());
      $("#box3").val(unemploymentAlaska);
      $("#box4").val(totalIncome);
      $("#box5").val(standardDeduction);
      $("#box6").val(taxableIncome);
      $("#box7").val($("#withholdingsInput").val());
      $("#box8a").val(eic);
      $("#box8b").val($("#inputCombat").val());
      $("#box9").val(totalCredits);
      $("#box10").val(prelimTaxTotal);
      $("#box11").val(healthTax);
      $("#box12").val(totalTax);
      $("#box13a").val(finalRefund);
      $("#box14").val(finalOwe);
      $("#boxOccupation").val($("#inputOccupation").val());
    };
    function plus(a,b,c) {
      return(a+b+c);
    };
    
    // var name = "Kendrick"
    // var lastName = "Gardner"
    var wages;
    var interest;
    var unemployment;
    var totalIncome;
    var taxableIncome = 0;
    var withheldTax;
    var eic;
    var combatPay;
    var totalCredits;
    var prelimTaxTotal
    var totalTax;
    var exemption = 0;
    var prelimDeduct = 1000;
    var maxDeduct;
    var refund;
    var prelimTaxTotalRound;
    var healthInsurance;
    var marriedStatus;
    var totalTaxRound;
    var refundRound;
    var finalRefund;
    var finalOwe;
    var healthTax;




    function totalIncome(){
      wages = parseFloat($("#inputWages").val())
      interest = parseFloat($("#inputInterest").val());
      unemployment = parseFloat(unemploymentAlaska);
      totalIncome = (plus(wages,interest,unemployment));
      console.log(wages);
      console.log(interest);
      console.log(unemploymentAlaska);
      console.log(unemployment);
      console.log(totalIncome);  
    };
    
    function dependentStatusFunction (){
      if (dependentStatus) { exemption = 3950 }
      else { exemption = 0 }
    }; 
    
     function standDeductionFunction(){
      if ((totalIncome + 350) > 1000) {
      prelimDeduct = (totalIncome + 350);
      }
      if ((marriedStatus) && (dependentStatus)){
        maxDeduct = 12400;
        if (prelimDeduct < maxDeduct){
          standardDeduction = (prelimDeduct + exemption);
          taxableIncome = (totalIncome - (prelimDeduct + exemption)); 
        }
        else {
          standardDeduction = (maxDeduct + exemption);
          taxableIncome = (totalIncome - (maxDeduct + exemption));
        }
      }
      else if (!(marriedStatus) && (dependentStatus)){
        maxDeduct = 6200;
        if (prelimDeduct < maxDeduct){
          standardDeduction = (prelimDeduct + exemption)
          taxableIncome = (totalIncome - (prelimDeduct + exemption));
        }
        else {
          standardDeduction = (maxDeduct + exemption);
          taxableIncome = (totalIncome - (maxDeduct + exemption));
        }
      }
      else if (!(marriedStatus) && (!(dependentStatus))) {
          standardDeduction = 10150;
          if ((totalIncome - 10150) > 0) {
            taxableIncome = (totalIncome - 10150);
          }
          else { taxableIncome = 0; }
      }
      else if  ((marriedStatus) && (!(dependentStatus))) {
          standardDeduction = 20300;
          console.log(totalIncome);
          if ((totalIncome - 20300) > 0) {
          taxableIncome = (totalIncome - 20300);
          }
          else { taxableIncome = 0; }
      }
      if (taxableIncome < 0) {
        taxableIncome = 0;
      }
      if (marriedStatus) {
        eicMarried();
      }
      if (!(marriedStatus)) {
        eicSingle();
      } 
    };
  


    function creditsFunction(){
      console.log(eicCredit);
      console.log(parseFloat(eicCredit));
      console.log((parseFloat(eicCredit)).toFixed(2));
      eic = (parseFloat(eicCredit));
      withheldTax = parseFloat($("#withholdingsInput").val());
      totalCredits = eic + withheldTax;
      console.log(withheldTax);
      console.log(eic);
      console.log(totalCredits);
    };

    function findTaxSingle(){
      var bracket1 = 9275;
      var bracket2 = 37650;
      var bracket3 = 91150;
      var bracket4 = 190150;
      var bracket5 = 413350;
      var bracket6 = 415050;

      if (taxableIncome <= 0) {
        prelimTaxTotal = 0;
      }
      else if ((0 < taxableIncome) && (taxableIncome <= bracket1)) {
        prelimTaxTotal = (0.1 * taxableIncome);
      }
      else if ((bracket1 < taxableIncome) && (taxableIncome <= bracket2)) {
        prelimTaxTotal = (
          (0.1*bracket1) + ((taxableIncome - bracket1)*0.15)
        );
      }
      else if ((bracket2 < taxableIncome) && (taxableIncome <= bracket3)) {
        prelimTaxTotal = (
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((taxableIncome - bracket2)*0.25)
        );
      }
      else if ((bracket3 < taxableIncome) && (taxableIncome <= bracket4)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((taxableIncome - bracket3)*0.28)
        );
      }
      else if ((bracket4 < taxableIncome) && (taxableIncome <= bracket5)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((taxableIncome - bracket4)*0.33)
        );
      }
      else if ((bracket5 < taxableIncome) && (taxableIncome <= bracket6)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((bracket5 - bracket4)*0.33) + ((taxableIncome - bracket5)*0.35)
        );
      }
      else {
        prelimTaxTotal = (
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((bracket5 - bracket4)*0.33) + ((bracket6- bracket5)*0.35) + ((taxableIncome - bracket6)*0.396)
        );
      }

    };

    function findTaxMarried(){
      var bracket1 = 18550;
      var bracket2 = 75300;
      var bracket3 = 151900;
      var bracket4 = 231450;
      var bracket5 = 413350;
      var bracket6 = 466950;

      if (taxableIncome <= 0) {
        prelimTaxTotal = 0;
      }
      else if ((0 < taxableIncome) && (taxableIncome <= bracket1)) {
        prelimTaxTotal = (0.1 * taxableIncome);
      }
      else if ((bracket1 < taxableIncome) && (taxableIncome <= bracket2)) {
        prelimTaxTotal = (
          (0.1*bracket1) + ((taxableIncome - bracket1)*0.15)
        );
      }
      else if ((bracket2 < taxableIncome) && (taxableIncome <= bracket3)) {
        prelimTaxTotal = (
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((taxableIncome - bracket2)*0.25)
        );
      }
      else if ((bracket3 < taxableIncome) && (taxableIncome <= bracket4)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((taxableIncome - bracket3)*0.28)
        );
      }
      else if ((bracket4 < taxableIncome) && (taxableIncome <= bracket5)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((taxableIncome - bracket4)*0.33)
        );
      }
      else if ((bracket5 < taxableIncome) && (taxableIncome <= bracket6)) {
        prelimTaxTotal = (  
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((bracket5 - bracket4)*0.33) + ((taxableIncome - bracket5)*0.35)
        );
      }
      else {
        prelimTaxTotal = (
          (0.1*bracket1) + ((bracket2 - bracket1)*0.15) + ((bracket3 - bracket2)*0.25) 
          + ((bracket4 - bracket3)*0.28) + ((bracket5 - bracket4)*0.33) + ((bracket6- bracket5)*0.35) + ((taxableIncome - bracket6)*0.396)
        );
      }
    };

    function taxCalcFunction(){
      if (!(marriedStatus)) {
        findTaxSingle();
      }
      else {
        findTaxMarried();
      }
      prelimTaxTotalRound = prelimTaxTotal.toFixed(2);
    };

    function totalTaxFunction(){
      if (healthInsurance){
        healthTax = 0;
        totalTax = prelimTaxTotal.toFixed(2);
      }
      else {
        healthTax = 750;
        totalTax = (prelimTaxTotal + 750)
        totalTaxRound = totalTax.toFixed(2);
      }
    };

    function refundCalcFunction(){
      refund = parseFloat((totalCredits - totalTax));
      console.log(totalCredits);
      console.log(totalTax);
      console.log(refund);
      refundRound = refund.toFixed(2);
      if (refundRound < 0) {
        finalRefund = 0;
        finalOwe = -refundRound;
      }
      else {
        finalRefund = refundRound;
        finalOwe = 0;
      }
    };


var eicCredit;

function eicSingle (){
  console.log("taxableIncome: $" +  taxableIncome);
  if (taxableIncome < 6610) {
    eicCredit = (taxableIncome * 0.0765);
  }
  if ((taxableIncome >= 6610) && (taxableIncome < 8270)) {
    eicCredit = 506;
  }
  if ((taxableIncome >= 8270) && (taxableIncome < 14880)) {
    eicCredit = ((8270/taxableIncome)*506);
  }
  if (taxableIncome >= 14880) {
    eicCredit = 0;
  }
    console.log(taxableIncome);
};

function eicMarried (){
  console.log("taxableIncome: $" +  taxableIncome);
  if (taxableIncome < 6610) {
    eicCredit = (taxableIncome * 0.0765);
  }
  if ((taxableIncome >= 6610) && (taxableIncome < 13820)) {
    eicCredit = 506;
  }
  if ((taxableIncome >= 13820) && (taxableIncome < 20330)) {
    eicCredit = ((13820/taxableIncome)*506);
  }
  if (taxableIncome >= 20330) {
    eicCredit = 0;
  }
  console.log(taxableIncome);
};
});


    