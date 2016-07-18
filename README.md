# validation

<h3>This class can be used to validate forms on the browser and server sides.</h3>

<p>
It can take an array of validation rules and generates JavaScript to perform validation on the browser side of given form fields.
</p>
<p>
The class can generate validation JavaScript code using jQuery that is performed for different form events like when the form input is changed, the form loses focus, when a key is released, etc..
</p>
<p>
It can also perform validation of the submitted form input on the server side with the class PHP code.
Currently in can perform validation types like: required value, minimum length, maximum length, required file, file minimum and maximum size, file MIME type, image maximum width and height, checked checkbox, valid date and time format, IP address, valid email address, valid URL, match regular expression, maximum and minimum length, value equal to another input, valid number, minumum and maximum number, etc..
</p>

<strong>Important: for client-side validation it is necessary to include jQuery and file <a href="https://github.com/hispanicode/validation/tree/master/js">validation.js</a></strong>

<p>Install with composer</p>
<div class="highlight highlight-source-php">
<pre>
composer require hispanicode/validation
</pre>
</div>

<p>
<a href="http://hispanicode.com/home/pages/hispanicodevalidation-Modelo-de-validacion-de-formularios-del-lado-del-cliente-y-del-servidor-con-php-y-jQuery" target="_blank">Online example</a>
</p>

<h3>Simple usage</h3>

<p>Require the class file</p>
<div class="highlight highlight-source-php">
<pre>
require "src/Validation.php";
/* 
if install with composer 
require "vendor/autoload.php";
*/
</pre>
</div>

<p>New instance</p>
<div class="highlight highlight-source-php">
<pre>
use Hispanic\Validation;
$validation = new Validation();
</pre>
</div>

<p>Rules</p>
<div class="highlight highlight-source-php">
<pre>
$rules = array(
  "name" => "required|name|min_length:3|max_length:50",
  "email" => "required|email|min_length:6|max_length:80",
  "password" => "required|between:6-30",
  "confirm_password" => "required|equalsTo:password",
  "terms" => "checked",
);
</pre>
</div>

<p>Optional. Custom messages. For example translate in other language (French)</p>
<div class="highlight highlight-source-php">
<pre>
$messages = array(
  "name.required" => "Le champ :attribute est obligatoire",
  /* ... */
);
</pre>
</div>

<p>The default messages in distinct languages is possible in the <a href="https://github.com/hispanicode/validation/tree/master/src/translate">language.php</a> file. The spanish and english translates are availables but you can translate in your language.</p>

<div class="highlight highlight-source-php">
<pre>
//The default translate is "en" in this case not is need use the translate method.
//Translate in spanish
$validation->translate("es");
</pre>
</div>

<p>In the client validation is possible handle javascript events</p>
<div class="highlight highlight-source-php">
<pre>
$events = array(
  "name" => "keyup|blur|change",
  /* ... */
);
</pre>
</div>

<p>Start the client validation</p>
<div class="highlight highlight-source-php">
<pre>
//The $messages and $events params are optionals
$validation->client($rules, $messages, $events);
</pre>
</div>

<p>Generate the client validation is easy</p>
<div class="highlight highlight-source-php">
<pre>
//The argument is the id of the form
echo $validation->getClientValidation("#form");
</pre>
</div>

<p>For get the client messages set the next structure based in the bootstrap css styles</p>
<div class="highlight highlight-source-html">
<pre>
&lt;form method="post" id="form"&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input type="text" name="name" id="name" class="form-control" value="" /&gt;
        &lt;p id="error_name"&gt;&lt;/p&gt;
    &lt;/div&gt;
    ...
&lt;/form&gt;
</pre>
</div>

<p>For the server side is the server() method</p>
<div class="highlight highlight-source-php">
<pre>

use Hispanic\Validation;

$validation = new Validation();

//Is possible change the labels attributes with the attribute() method
$attributes = array(
  "name" => "Name",
  "confirm_password" => "Confirm Password",
  /* ... */
);

$validation->attributes($attributes);

$rules = array(
  "name" => "required|regex:/^[a-z]+$/|min_length:3|max_length:50",
  /* ... */
);

/* if you like the client validation is easy */
$validation->client($rules);

/* request */
if (isset($_POST["name"])) {
  $validation->server($rules); //The second argument is optional for the custom messages array
  
  //If is valid
  if ($validation->isValid()) {
      /* ok */
  } else {
    /* error */
    //get associative array with all errors
    $errors = $validation->getErrors();
    //get only one error, the first error.
    $first_error = $validation->getFirstError();
  }
}
</pre>
</div>

<h3>Validation rules options</h3>
<ul>
  <li><strong>required</strong> : the field is required</li>
  <li><strong>checked</strong> : the field needs to be checked</li>
  <li><strong>min_length</strong> : minimum length of characters in string. Example: <i>min_length:3</i></li>
  <li><strong>max_length</strong> :  maximum length of characters in string. Example: <i>max_length:30</i></li>
  <li><strong>min</strong> : minimum numeric value. Example: <i>min:1</i></li>
  <li><strong>max</strong> : maximum numeric value: Example: <i>max:10</i></li>
  <li><strong>between</strong> : range of characters allowed. Example: <i>between:3-20</i></li>
  <li><strong>range</strong> : range of allowable numeric values. Example: <i>range:1-10</i></li>
  <li><strong>name</strong> : only allowed a-záéíóúàèìòùäëïöüâêîôûñ\s. <i>(ignored uppercase)</i></li>
  <li><strong>alpha</strong> : only allowed a-záéíóúàèìòùäëïöüâêîôûñ <i>(ignored uppercase)</i></li>
  <li><strong>alphanumeric</strong> : only allowed 0-9a-záéíóúàèìòùäëïöüâêîôûñ <i>(ignored uppercase)</i></li>
  <li><strong>digit</strong> : only digits</li>
  <li><strong>email</strong> : only a valid email</li>
  <li><strong>ip</strong> : only a valid ip</li>
  <li><strong>url</strong> : only a valid url</li>
  <li><strong>date</strong> : only a valid date format. Example: <i>date:Y-m-d</i></li>
  <li><strong>time</strong> : only a valid time format. Example: <i>time:H:i:s</i></li>
  <li><strong>datetime</strong> : only a valid datetime format. Example: <i>datetime:Y-m-d H:i:s</i></li>
  <li><strong>regex</strong> : regular expression filter. Example: <i>regex:/^[a-z]$/i</i></li>
  <li><strong>equalsTo</strong> : The field value is equal to other field. Example: <i>equalsTo:password</i></li>
  <li><strong>float</strong> : only a float value</li>
  <li><strong>integer</strong> : only a integer value</li>
  <li><strong>numeric</strong> : only a numeric value</li>
  <li><strong>contains</strong> : the field needs to contain one of the required values. Example: <i>contains:one,two,three</i></li>
  <li><strong>file_required</strong> : the input file is required</li>
  <li><strong>min_files</strong> : minimum number of files allowed in input file multiple. Example: <i>min_files:2</i></li>
  <li><strong>max_files</strong> : maximum number of files allowed in input file multiple. Example: <i>max_files:10</i></li>
  <li><strong>file_min_size</strong> : minimum size allowed for file. Example 1MB: <i>file_min_size:1048576</i></li>
  <li><strong>file_max_size</strong> : maximum size allowed for file. Example 1024 bytes: <i>file_min_size:1024</i></li>
  <li><strong>mime</strong> : mime type allowed for file. Example: <i>mime:pdf,txt,js</i></li>
  <li><strong>img_min_width</strong> : minimum width allowed for image file. Example 250px: <i>img_min_width:250</i></li>
  <li><strong>img_max_width</strong> : maximum width allowed for image file. Example 1024px: <i>img_max_width:1024</i></li>
  <li><strong>img_min_height</strong> : minimum height allowed for image file. Example 250px: <i>img_min_height:250</i></li>
  <li><strong>img_max_height</strong> : maximum height allowed for image file. Example 1024px: <i>img_max_height:1024</i></li>
</ul>





