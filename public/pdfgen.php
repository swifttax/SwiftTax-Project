<?php

// Form data:
$fname      = 'John';
$lname      = 'Smith';
$occupation = 'Teacher';
$age        = '45';
$gender     = 'male';

// FDF header section
$fdf_header = <<<FDF
%FDF-1.2
%,,oe"
1 0 obj
<<
/FDF << /Fields [
FDF;

// FDF footer section
$fdf_footer = <<<FDF
"] >> >>
endobj
trailer
<</Root 1 0 R>>
%%EOF;
FDF;

// FDF content section

$fdf_content = "<</T(last_name)/V({$lname})>>";


$content = $fdf_header . $fdf_content .  $fdf_footer;

// Creating a temporary file for our FDF file.
$FDFfile = tempnam(sys_get_temp_dir(), gethostname());

file_put_contents($FDFfile, $content);

// Merging the FDF file with the raw PDF form
$result = exec("pdftk 1040.pdf fill_form $FDFfile output.pdf"); 
var_dump($result);

// Removing the FDF file as we don't need it anymore
unlink($FDFfile);