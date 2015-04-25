<?php

//phpinfo();

$path = '/var/www/UploadDir/';
$count = 0;
// Place max file size: 1GB
$max_file_size = 1024*1024*1024*1024;

echo "Beginning Upload...";
echo "<br>";

// Test for post
if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
    // Print array and test if $_FILES is set
    //print_r($_FILES);
    //echo "<br>";

    //echo $_FILES['files']['name']['0'];
    //echo "<br>";

    //echo is_array($_FILES) ? 'File Array Allocated...' : 'Array failed to build';
    //echo "<br>";
    
    foreach ($_FILES['files']['name'] as $f => $name){
        //echo "<br>";
        //echo "Processing File...";
	//echo "<br>";
        // If file has an error, just skip it and continue
        if(isset($_FILES['files']['error'][$f])){
	    if($_FILES['files']['error'][$f] != 0) {
	        echo "Error found with file ";
		echo $_FILES['files']['name'][$f];
	        continue; //Skip file if any error found
	    }
	    else{
	        //echo "<br>";
	        //echo "No errors found... Continuing...";
		//echo "<br>";
	    }
	}
	
	// Continue in error skips this block, no if/else neccesary
	// Move the uploaded files if no errors are found
	// No error found! Move uploaded files 

	if(move_uploaded_file($_FILES["files"]["tmp_name"][$f], $path.$name)){
	    echo "<br>";
	    echo $_FILES['files']['name'][$f];
	    echo " moved to ";
	    echo "upload directory successfully.";
	    echo "<br>";
	    $count++; // Number of successfully uploaded file
	}	
    }
    echo "<br>";
    echo "Completed file transfer...";
    echo "<br>";
    
    echo "<br>";
    echo "You will be redirected to the home page shortly...";
}
?>
<script>
	window.location.assign("http://stevenpg.github.io");
</script>


