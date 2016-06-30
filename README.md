# validation

<h3>Form validation model with fantastic tools for the client and server side with php and jQuery.</h3>

<strong>Important: for client-side validation it is necessary to include jQuery and file validation.js</strong>

<h3>Simple usage</h3>

<p>Require the class file</p>
<div class="highlight highlight-source-php">
<pre>
require "src/Validation.php";
</pre>
</div>

<p>New instance</p>
<div class="highlight highlight-source-php">
<pre>
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
  <li>required : the field is required</li>
  <li>checked : the field needs to be checked</li>
  <li>min_length : minimum length of characters in string. Example: <i>min_length:3</i></li>
  <li>max_length :  maximum length of characters in string. Example: <i>max_length:30</i></li>
  <li>min : minimum numeric value. Example: <i>min:1</i></li>
  <li>max : maximum numeric value: Example: <i>max:10</i></li>
  <li>between : range of characters allowed. Example: <i>between:3-20</i></li>
  <li>range : range of allowable numeric values. Example: <i>range:1-10</i></li>
  <li>name : only allowed a-záéíóúàèìòùäëïöüâêîôûñ\s. <i>(ignored uppercase)</i></li>
  <li>alpha : only allowed a-záéíóúàèìòùäëïöüâêîôûñ <i>(ignored uppercase)</i></li>
  <li>alphanumeric : only allowed 0-9a-záéíóúàèìòùäëïöüâêîôûñ <i>(ignored uppercase)</i></li>
  <li>digit : only digits</li>
  <li>email : only a valid email</li>
  <li>ip : only a valid ip</li>
  <li>url : only a valid url</li>
  <li>date : only a valid date format. Example: <i>date:Y-m-d</i></li>
  <li>time : only a valid time format. Example: <i>time:H:i:s</i></li>
  <li>datetime : only a valid datetime format. Example: <i>datetime:Y-m-d H:i:s</i></li>
  <li>regex : regular expression filter. Example: <i>regex:/^[a-z]$/i</i></li>
  <li>equalsTo : The field value is equal to other field. Example: <i>equalsTo:password</i></li>
  <li>float : only a float value</li>
  <li>integer : only a integer value</li>
  <li>numeric : only a numeric value</li>
  <li>contains : the field needs to contain one of the required values. Example: <i>contains:one,two,three</i></li>
  <li>file_required : the input file is required</li>
  <li>file_min_size : minimum size allowed for file. Example 1MB: <i>file_min_size:1048576</i></li>
  <li>file_max_size : maximum size allowed for file. Example 1024 bytes: <i>file_min_size:1024</i></li>
  <li>mime : mime type allowed for file. Example: <i>mime:pdf,txt,js</i></li>
  <li>img_min_width : minimum width allowed for image file. Example 250px: <i>img_min_width:250</i></li>
  <li>img_max_width : maximum width allowed for image file. Example 1024px: <i>img_max_width:1024</i></li>
  <li>img_min_height : minimum height allowed for image file. Example 250px: <i>img_min_height:250</i></li>
  <li>img_max_height : maximum height allowed for image file. Example 1024px: <i>img_max_height:1024</i></li>
</ul>





