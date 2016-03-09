<?php 
require __DIR__ . '/../vendor/autoload.php';
use mikehaertl\pdftk\Pdf;

//var_dump($_POST);
$formInput = $_POST;
// var_dump($formInput["wageInput"]);

// Fill form with data array
 $pdf = new Pdf('1040.pdf');
// var_dump($pdf);
$pdf->fillForm(
	array(
		// '1'=>$formInput["wagesInput"],
		// 'nameLast'=>$formInput["lastName"],
		// 'nameFirst'=>$formInput["firstName"],
		// 'ssn'=>$formInput["ssn"],
		// 'nameFirstSpouse'=>$formInput["nameFirstSpouse"],
		// 'nameLastSpouse'=>$formInput["nameLastSpouse"],
		// 'spouse_social'=>$formInput["spouse_social"],
		// 'street'=>$formInput["street"],
		// 'address'=>$formInput['city'],
		// 'apt_no'=>$formInput["apt_no"],
		// '2'=>$formInput["interestInput"],
		// '3'=>$formInput["unemploymentInput"],
		// '4'=>$formInput["totalIncome"],
		'nameFirst'=>$formInput["boxfirstName"],
		'nameLast'=>$formInput["boxlastName"],
		'ssn'=>$formInput["box_ssn"],
		// 'nameFirstSpouse'=>$formInput["box_nameFirstSpouse"],
		// 'nameLastSpouse'=>$formInput["box_nameLastSpouse"],
		// 'spouse_social'=>$formInput["box_spouse_social"],
		'street'=>$formInput["box_street"],
		// 'apt_no'=>$formInput["box_apt_no"],
		'address'=>$formInput["box_city"],
		'1'=>$formInput["box1"],
		'2'=>$formInput["box2"],
		'3'=>$formInput["box3"],
		'4'=>$formInput["box4"],
		'5'=>$formInput["box5"],
		'6'=>$formInput["box6"],
		'7'=>$formInput["box7"],
		'8a'=>$formInput["box8a"],
		'8b'=>$formInput["box8b"],
		'9'=>$formInput["box9"],
		'10'=>$formInput["box10"],
		'11'=>$formInput["box11"],
		'12'=>$formInput["box12"],
		'13a'=>$formInput["box13a"],
		'14'=>$formInput["box14"],
		'occupation'=>$formInput["boxOccupation"]
		)
	)
    ->needAppearances()
    ->flatten()
    ->saveAs("save.pdf");
    header("Location: /save.pdf");
    //->send('filled.pdf');

 //    $pdf = new Pdf('1040.pdf');
	// var_dump($pdf->fillForm('1040fdf.fdf')
	// 	->getTmpFile());
 //    ->send('storage/filled.pdf', true));
	// var_dump($test);
  // $file = 'save.pdf';
  // $filename = 'save.pdf';
  // header('Content-type: application/pdf');
  // header('Content-Disposition: inline; filename="' . $filename . '"');
  // header('Content-Transfer-Encoding: binary');
  // header('Accept-Ranges: bytes');
  // @readfile($file); 


?>