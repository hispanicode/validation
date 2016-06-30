<?php

require "../src/Validation.php";

$validation = new Validation();
$attributes = array(
	"repeat_password" => "Repeat Password",
);

$validation->attributes($attributes);
$rules = array(
	"name" => "required|min_length:2|max_length:50|name",
	"file:multiple" => "file_required|mime:png,jpg|file_min_size:1000|file_max_size:".(1024*1024),
	"upload" => "file_required|mime:pdf|file_min_size:".(20)."|file_max_size:".(1024*1024),
	"image" => "file_required|mime:png,jpg|img_max_width:140|img_max_height:140",
	"check" => "checked",
	"date" => "required|date:Y/m/d",
	"time" => "required|time:H:i:s",
	"datetime" => "required|datetime:Y/m/d H:i:s",
	"ip" => "required|ip",
	"email" => "required|email",
	"url" => "required|url",
	"regex" => "required|regex:/^[a-z]+$/",
	"password" => "required",
	"repeat_password" => "required|equalsTo:password",
	"float" => "required|float",
	"integer" => "required|integer",
	"numeric" => "required|numeric",
	"between" => "required|between:10-20",
	"range" => "required|range:1-10",
	"contains" => "required|contains:one,two,three",
);

$messages = array(
	//"name.required" => "El campo :attribute es requerido",$validation->server($rules, $messages);
	// ...
);
	 
$events = array(
	"name" => "keyup|blur|change",
	"file" => "change",
	"upload" => "change",
	"check" => "click",
	"date" => "keyup|blur|change",
	"time" => "keyup|blur|change",
	"datetime" => "keyup|blur|change",
	"ip" => "keyup|blur|change",
	"email" => "keyup|blur|change",
	"url" => "keyup|blur|change",
	"regex" => "keyup|blur|change",
	"repeat_password" => "keyup|blur|change",
	"float" => "keyup|blur|change",
	"integer" => "keyup|blur|change",
	"numeric" => "keyup|blur|change",
	"between" => "keyup|blur|change",
	"range" => "keyup|blur|change",
	"contains" => "keyup|blur|change",
);

$validation->translate("en");
$validation->client($rules, $messages, $events);
$errors = null;
$first_error = null;
if (isset($_POST["name"])) {
	$validation->server($rules, $messages);
    if (!$validation->isValid()) {
        $errors = $validation->getErrors();
		$first_error = $validation->getFirstError();
    }
}
?>
<!DOCTYPE HTML>
<html>
	<head>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
		
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="../js/validation.js"></script>
	</head>
	<body>
	<div class="container">
		<br /><br />
		<?php print_r($errors) ?>
		<form method="post" action="" id="form" enctype="multipart/form-data" class="form-horizontal">
			<div class="form-group">
				<label for="name">Name:</label> 
				<input type="text" name="name" id="name" class="form-control" value="" />
				<p id="error_name"></p>
			</div>
			<div class="form-group">
				<label for="file">File Multiple:</label> 
				<input type="file" name="file[]" id="file" multiple class="form-control" />
				<p id="error_file"></p>
			</div>
			<div class="form-group">
				<label for="upload">File:</label> 
				<input type="file" name="upload" id="upload" class="form-control" />
				<p id="error_upload"></p>
			</div>
			<div class="form-group">
				<label for="image">Image:</label> 
				<input type="file" name="image" id="image" class="form-control" />
				<p id="error_image"></p>
			</div>
			<div class="form-group">
				<label for="check">
					<input type="checkbox" name="check" id="check" /> Checkbox
				</label>
				<p id="error_check"></p>
			</div>
			<div class="form-group">
				<label for="date">Date:</label> 
				<input type="text" name="date" id="date" class="form-control" />
				<p id="error_date"></p>
			</div>
			<div class="form-group">
				<label for="time">Time:</label> 
				<input type="text" name="time" id="time" class="form-control" />
				<p id="error_time"></p>
			</div>
			<div class="form-group">
				<label for="datetime">DateTime:</label> 
				<input type="text" name="datetime" id="datetime" class="form-control" />
				<p id="error_datetime"></p>
			</div>
			<div class="form-group">
				<label for="ip">Ip:</label>
				<input type="text" name="ip" id="ip" class="form-control" />
				<p id="error_ip"></p>
			</div>
			<div class="form-group">
				<label for="email">Email:</label> 
				<input type="text" name="email" id="email" class="form-control" />
				<p id="error_email"></p>
			</div>
			<div class="form-group">
				<label for="url">Url:</label> 
				<input type="text" name="url" id="url" class="form-control" />
				<p id="error_url"></p>
			</div>
			<div class="form-group">
				<label for="regex">Regex:</label>
				<input type="text" name="regex" id="regex" class="form-control" />
				<p id="error_regex"></p>
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input type="password" name="password" id="password" class="form-control" />
				<p id="error_password"></p>
			</div>
			<div class="form-group">
				<label for="repeat_password">Repeat password:</label>
				<input type="password" name="repeat_password" id="repeat_password" class="form-control" />
				<p id="error_repeat_password"></p>
			</div>
			<div class="form-group">
				<label for="float">Float:</label>
				<input type="text" name="float" id="float" class="form-control" />
				<p id="error_float"></p>
			</div>
			<div class="form-group">
				<label for="integer">Integer:</label>
				<input type="text" name="integer" id="integer" class="form-control" />
				<p id="error_integer"></p>
			</div>
			<div class="form-group">
				<label for="numeric">Numeric:</label>
				<input type="text" name="numeric" id="numeric" class="form-control" />
				<p id="error_numeric"></p>
			</div>
			<div class="form-group">
				<label for="between">Between:</label>
				<input type="text" name="between" id="between" class="form-control" />
				<p id="error_between"></p>
			</div>
			<div class="form-group">
				<label for="range">Range:</label>
				<input type="text" name="range" id="range" class="form-control" />
				<p id="error_range"></p>
			</div>
			<div class="form-group">
				<label for="contains">Contains:</label>
				<input type="text" name="contains" id="contains" class="form-control" />
				<p id="error_contains"></p>
			</div>
			<button class="btn btn-default">Send</button>
		</form>
		<br /><br />
	</div>
		<?php echo $validation->getClientValidation("#form") ?>
	</body>
</html>