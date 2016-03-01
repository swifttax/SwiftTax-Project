
$(document).ready(function(){

	function animatedBoxes(){
 		$(".box1").addClass('animated fadeInLeftBig');
		var options = [
    		{selector: '.box1', offset: 0, callback: 'Materialize.fadeInImage("animatedBoxes"()' }
 		];
  		Materialize.scrollFire(options);
	};
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
            zoom: 4
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
          var homeImg = 'BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_AZURE';
          var infowindow = new google.maps.InfoWindow({
            map: map,
            position: currentLatLng,
            content: "You are here."
          });
          jobsArray.forEach(function(element,index){
            console.log(index);
            console.log("______________________");
            console.log("______________________");
            console.log("Job Title: " + element.jobtitle);
            console.log("Employer: " + element.company);
            console.log("Posted " + element.formattedRelativeTime);
            console.log(element.latitude + ", " + element.longitude);
            // jobLatLng = [element.latitude, element.longitude];
            $('#jobTitle' + index).text(element.jobtitle);
            $('#employer' + index).text(element.company);
            $('#posted' + index).text(element.formattedRelativeTime);
            // var currentLatLng = {
            //   lat: 29.424122, 
            //   lng: -98.493629
            // }
            
            jobLatLng = {
              lat: parseFloat(element.latitude),
              lng: parseFloat(element.longitude)
            };
            console.log(currentLatLng);
            console.log(jobLatLng);

              if (index == 0) {
                label = 'A';
              }
              else if (index == 1) {
                label = 'B';
              }
              else {
                lablel = 'C';
              }
             
            
            marker = new google.maps.Marker({
              map: map,
              draggable: false,
              animation: google.maps.Animation.DROP,
              position: jobLatLng,
              label: label
  
            });
            

         
        
        })
});

      

});