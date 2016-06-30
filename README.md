# validation
Form validation model with fantastic tools for the client and server side with php and jQuery.

<h3>Simple usage</h3>

<p>Require the class file</p>
<code>
require "src/Validation.php";
</code>

<p>New instance</p>
<code>
$validation = new Validation();
</code>

<p>Rules</p>
<code>
$rules = array(
  "name" => "required|name|min_length:3|max_length:50",
  "email" => "required|email|min_length:6|max_length:80",
  "password" => "required|between:6-30",
  "confirm_password" => "required|equalsTo:password",
  "terms" => "checked",
);
</code>

<p>Optional. Custom messages. For example translate in other language (French)</p>
<code>
$messages = array(
  "name.required" => "Le champ :attribute est obligatoire",
  /* ... */
);
</code>

<p>The default messages in distinct languages is possible in the <a href="https://github.com/hispanicode/validation/tree/master/src/translate">language.php</a> file. The spanish and english translates are availables but you can translate in your language.</p>

<code>
//The default translate is "en" in this case not is need use the translate method.
//Translate in spanish
$validation->translate("es");
</code>

<p>In the client validation is possible handle javascript events</p>
<code>
$events = array(
  "name" => "keyup|blur|change",
  /* ... */
);
</code>

<p>Start the client validation</p>
<code>
//The $messages and $events params are optionals
$validation->client($rules, $messages, $events);
</code>

<p>Generate the client validation is easy</p>
<code>
//The argument is the id of the form
echo $validation->getClientValidation("#form");
</code>

<p>For get the client messages set the next structure based in the bootstrap css styles</p>
<code>
<form method="post" id="form">
    <div class="form-group">
        <label for="name">Name:</label> 
        <input type="text" name="name" id="name" class="form-control" value="" />
        <p id="error_name"></p>
    </div>
    ...
</form>
</code>

<p>For the server side is the server() method</p>
<code>

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
    //get associative array with all erros
    $errors = $validation->getErrors();
    //get only one error, the first error.
    $first_error = $validation->getFirstError();
  }
}
</code>

<h3>Validation rules options</h3>
<ul>
  <li></li>
</ul>
