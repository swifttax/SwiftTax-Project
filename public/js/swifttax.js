
$("#modal17").css("top","0");
$(".nextBtn1").fadeOut();
$("#validNameCheck").hide();
$("#interestForm").hide();
$("#unemploymentForm").hide();
$(".centerText14").hide();
$("#armedForcesForm").hide();
$("#combatPay").hide();
$(".nextBtn15").hide();
$("#returnOwePage").hide();

$(document).ready(function(){

 $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
  });

 // Kickoff button makes swift tax div, form and button disappear

  $(".kickoff").click(function(){
    $(".main").addClass('animated zoomOut');
  });

  $("#modal2").hide();
  $("#modal1NextBtn").click(function(){
      $("#modal1").hide();
      $("#modal2").show();
  });

  var inputName;

  $("#inputFirstName").keyup(function(){
    if ((/[A-Z]/ig).test($("#inputFirstName").val())) {
        $("#validNameCheck").hide()
        if ($("#inputFirstName").val().length > 1) {
          $(".nextBtn1").fadeIn(1000).css("transition: ''");
        }
    }
    if (($("#inputFirstName").val().length < 2)) {
      $(".nextBtn1").fadeOut(1000).css("transition: ''");
    }
    if (!((/[A-Z]/ig).test($("#inputFirstName").val()))) {
      $("#validNameCheck").show() 
    }
  });

	$(".nextBtn1").click(function(){
    inputName = $.trim($("#inputFirstName").val())
    $("#inputNameValue").text("Thanks " + inputName + "!")
    $('#modal1').closeModal({out_duration: 200,});
    $('#modal2').openModal({in_duration: 200,});
  });
  $(".nextBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal3').openModal({in_duration: 0,});
  });
   $(".backBtn2").click(function(){
    $('#modal2').closeModal({out_duration: 0,});
    $('#modal1').openModal({in_duration: 0,});
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
    $('.centerBtn5').show();
    $("#interestForm").hide();
    $(".nextBtn5").text("No");
    $("#interestQuestion").text("Did you receive any taxable interest in 2015?");
  });
  $(".centerBtn6").click(function(){
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
  });
    $(".backBtn9").click(function(){
    $('#modal9').closeModal({out_duration: 0,});
    $('#modal8').openModal({in_duration: 0,});
  });
  $(".centerBtn9").click(function(){
  });
    $(".nextBtn10").click(function(){
    $('#modal10').closeModal({out_duration: 0,});
    $('#modal11').openModal({in_duration: 0,}); 
  });
    $(".backBtn10").click(function(){
      $('#modal10').closeModal({out_duration: 0,});
      $('#modal9').openModal({in_duration: 0,});
  });
    $(".nextBtn11").click(function(){
      $('#modal11').closeModal({out_duration: 0,});
      $('#modal12').openModal({in_duration: 0,}); 
  });
    $(".backBtn11").click(function(){
      $('#modal11').closeModal({out_duration: 0,});
      $('#modal10').openModal({in_duration: 0,});
  });
    $(".nextBtn12").click(function(){
      $('#modal12').closeModal({out_duration: 0,});
      $('#modal13').openModal({in_duration: 0,}); 
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
  });
    $(".backBtn14").click(function(){
      $('#modal14').closeModal({out_duration: 0,});
      $('#modal13').openModal({in_duration: 0,});
  });
  $(".centerBtn14").click(function(){
    $('.centerBtn14').hide();
    $(".nextBtn14").text("Continue");
    $("#armedForcesQuestion").css("color","#42E035");
    $("#armedForcesQuestion").text("On behalf of a grateful nation, thank you for your service.");
    $("#armedForcesQuestion").append($("<br>"));
    $("#armedForcesQuestion").append($("<br>"));
    $("#armedForcesQuestion2").text("Enter your Nontaxable Combat Pay Elections, if any.");
    $(".centerText14").show();
    $("#armedForcesForm").show();
  });
   $("#healthYes").click(function(){
       $(".nextBtn15").show();
   });
  $("#healthNo").click(function(){
       $(".nextBtn15").show();
   });

   $(".nextBtn15").click(function(){
    $('#modal15').closeModal({out_duration: 0,});
    $('#modal16').openModal({in_duration: 0,}); 
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
    $('#modal16').closeModal({out_duration: 0,});
    $('#modal17').openModal({in_duration: 0,});
    // $('.lean-overlay').hide();
});
      $(".nextBtnRefund").click(function(){
    $('#modal16').closeModal({out_duration: 0,});
    $('#modal19').openModal({in_duration: 0,});
    // $('.lean-overlay').hide();

  });
    $(".backBtn16").click(function(){
      $('#modal16').closeModal({out_duration: 0,});
      $('#modal15').openModal({in_duration: 0,});
  });

$("#downloadBtn").click(function(){
  open("save.pdf");
});
$("#downloadBtn2").click(function(){
  open("save.pdf");
});
$("#exitBtn1").click(function(){
      $('#modal17').closeModal({out_duration: 0,});
      $('#modal18').openModal({in_duration: 0,});
  });
$(".nextBtn18").click(function(){
      $('#modal18').closeModal({out_duration: 0,});
  });
$(".backBtn18").click(function(){
      $('#modal18').closeModal({out_duration: 0,});
      $('#modal17').openModal({out_duration: 0,});
  });
$("#exitBtn2").click(function(){
      $('#modal19').closeModal({out_duration: 0,});
      $('#modal20').openModal({in_duration: 0,});
  });
$(".nextBtn20").click(function(){
      $('#modal20').closeModal({out_duration: 0,});
  });
$(".backBtn20").click(function(){
      $('#modal20').closeModal({out_duration: 0,});
      $('#modal19').openModal({out_duration: 0,});
  });
// Indeed API //

      var markersArray = [];
      var jobLatLng;
      var map;
      var zip = 78234;
      var currentLatLng = {
        lat: 29.424122, 
        lng: -98.493629
      }
      var jobTitle = " Lawyer ";
      var query = ($.trim(jobTitle)).replace(/\s/g, "+");
      console.log(query);
      var jobUrl = "http://api.indeed.com/ads/apisearch?publisher=6167575085685252&q=" + query + "&l=" + zip + "&sort=&radius=&st=&jt=&start=&limit=3&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2";
        
     function initMap() {
          var latUSA = 39.833333;
          var lngUSA = -98.583333;
          var latlngUSA = {lat: latUSA, lng: lngUSA};
          console.log(latlngUSA);
          map = new google.maps.Map(document.getElementById('map'), {
            // center: {lat: -34.397, lng: 150.644},
            center: latlngUSA,
            zoom: 4,
            draggable: false
          });
        };
        initMap();

      function xmlToJson(xml) {
        var obj = {};
        if (xml.nodeType == 1) { // element
          // do attributes
          if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text
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

      $.get(jobUrl)
        .done(function(data){
          
          console.log(data);
          var jobsJson = xmlToJson(data);
          console.log(jobsJson);
          var jobsArray = jobsJson.response.results.result;
          map.panTo(currentLatLng);
          map.setZoom(10);
 
          jobsArray.forEach(function(element,index){
            console.log(index);
            console.log("______________________");
            console.log("______________________");
            console.log("Job Title: " + element.jobtitle);
            console.log("Employer: " + element.company);
            console.log("Posted " + element.formattedRelativeTime);
            console.log(element.latitude + ", " + element.longitude);
            // jobLatLng = [element.latitude, element.longitude];
            $("#jobTitle" + index).text(element.jobtitle);
            $("#employer" + index).text(element.company);
            $("#posted" + index).text(element.formattedRelativeTime);
            $("#applyBtn" + index).prop("bacon", element.url);
            console.log($(".box" + index).prop("bacon"));
            
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
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              position: jobLatLng,
              icon: letterIcon
            });
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

});

    