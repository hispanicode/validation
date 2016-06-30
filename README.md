# validation
Form validation model with fantastic tools for the client and server side with php and jQuery.

<h3>Simple usage</h3>

//Require the class file
require "src/Validation.php";

//new instance
$validation = new Validation();

Rules
<code>
$rules = array(
  "name" => "required|name|min_length:3|max_length:50",
  "email" => "required|email|min_length:6|max_length:80",
  "password" => "required|between:6-30",
  "confirm_password" => "required|equalsTo:password",
  "terms" => "checked",
);
</code>

Optional. Custom messages. For example translate in other language (French)
<code>
$messages = array(
  "name.required" => "Le champ :attribute est obligatoire",
);
</code>

The default messages in distinct languages is possible in the <a href="https://github.com/hispanicode/validation/tree/master/src/translate">language.php</a> file. The spanish and english translates are availables but you can translate in your language.

<code>
//The default translate is "en" in this case not is need use the translate method.
//Translate in spanish
$validation->translate("es");
</code>

//Start client validation
$clientValidation = $validation->client($rules);


