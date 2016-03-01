$(document).ready(function(){

 	function animatedBoxes(){
 	$(".box1").addClass('animated fadeInLeftBig');

var options = [
    {selector: '.box1', offset: 0, callback: 'Materialize.fadeInImage("animatedBoxes"()' }
 ];
  Materialize.scrollFire(options);

};
});
