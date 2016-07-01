/**
Hispanicode Validation
Copyright (C) 2016  http://hispanicode.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Form validation model with fantastic tools for the client and server side with php and jQuery.
 *
 * @author manudavgonz@gmail.com
 */

validation_required = function(element, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value == "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_checked = function(element, message) {
    checkbox = $("#"+element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!checkbox.is(":checked")) {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_min_length = function(element, condition, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value.length < condition && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_max_length = function(element, condition, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value.length > condition && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_min = function(element, condition, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value < condition && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_max = function(element, condition, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value > condition && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_between = function(element, min, max, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value.length < min || value.length > max && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_range = function(element, min, max, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (value < min || value > max && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_regex = function(element, regex, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value.match(regex) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_date = function(element, condition, message) {
    
    value = $("#"+element).val()+"/";
    
    condition_parts = condition.split("/");
    reg = "";
    for (x = 0; x < condition_parts.length; x++) {

        if (condition_parts[x] == "Y") {
            reg = reg + "\\d{4}\\/";
        }
        if (condition_parts[x] == "y") {
            reg = reg + "\\d{2}\\/";
        }
        if (condition_parts[x] == "n") {
            reg = reg + "(1|2|3|4|5|6|7|8|9|10|11|12)\\/";
        } 
        if (condition_parts[x] == "m") {
            reg = reg + "(01|02|03|04|05|06|07|08|09|10|11|12)\\/";
        }
        if (condition_parts[x] == "M") {
            reg = reg + "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\/";
        }
        if (condition_parts[x] == "F") {
            reg = reg + "(January|February|March|April|May|June|July|August|September|October|November|December)\\/";
        }
        if (condition_parts[x] == "d") {
            reg = reg + "(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)\\/";
        }
    }
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value.match(reg) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_time = function(element, condition, message) {
    
    value = $("#"+element).val()+":";
    
    condition_parts = condition.split(":");
    
    reg = "";
    for (x = 0; x < condition_parts.length; x++) {

        if (condition_parts[x] == "B") {
            reg = reg + "\\d[0-9]{3}\\:";
        } 
        if (condition_parts[x] == "g") {
            reg = reg + "(1|2|3|4|5|6|7|8|9|10|11|12)\\:";
        } 
        if (condition_parts[x] == "G") {
            reg = reg + "(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23)\\:";
        } 
        if (condition_parts[x] == "h") {
            reg = reg + "(01|02|03|04|05|06|07|08|09|10|11|12)\\:";
        }
        if (condition_parts[x] == "H") {
            reg = reg + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)\\:";
        }
        if (condition_parts[x] == "i") {
            reg = reg + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\:";
        }
        if (condition_parts[x] == "s") {
            reg = reg + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\:";
        }
        if (condition_parts[x] == "u") {
            reg = reg + "\\d+\\:";
        }
        if (condition_parts[x] == "U") {
            reg = reg + "\\d+\\:";
        }
    }
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value.match(reg) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_datetime = function(element, condition, message) {

    value = $("#"+element).val();
    value_parts = value.split(" ");
    conditions_parts = condition.split(" ");
    
    value_date = value_parts[0]+"/";
    condition_part_date = conditions_parts[0].split("/");
    reg_date = "";
    for (x = 0; x < condition_part_date.length; x++) {
        if (condition_part_date[x] == "Y") {
            reg_date = reg_date + "\\d{4}\\/";
        }
        if (condition_part_date[x] == "y") {
            reg_date = reg_date + "\\d{2}\\/";
        }
        if (condition_part_date[x] == "n") {
            reg_date = reg_date + "(1|2|3|4|5|6|7|8|9|10|11|12)\\/";
        } 
        if (condition_part_date[x] == "m") {
            reg_date = reg_date + "(01|02|03|04|05|06|07|08|09|10|11|12)\\/";
        }
        if (condition_part_date[x] == "M") {
            reg_date = reg_date + "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\/";
        }
        if (condition_part_date[x] == "F") {
            reg_date = reg_date + "(January|February|March|April|May|June|July|August|September|October|November|December)\\/";
        }
        if (condition_part_date[x] == "d") {
            reg_date = reg_date + "(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)\\/";
        }
    }
    
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value_date.match(reg_date) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    
    value_time = value_parts[1]+":";
    condition_part_time = conditions_parts[1].split(":");
    reg_time = "";
    for (x = 0; x < condition_part_time.length; x++) {

        if (condition_part_time[x] == "B") {
            reg_time = reg_time + "\\d[0-9]{3}\\:";
        } 
        if (condition_part_time[x] == "g") {
            reg_time = reg_time + "(1|2|3|4|5|6|7|8|9|10|11|12)\\:";
        } 
        if (condition_part_time[x] == "G") {
            reg_time = reg_time + "(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23)\\:";
        } 
        if (condition_part_time[x] == "h") {
            reg_time = reg_time + "(01|02|03|04|05|06|07|08|09|10|11|12)\\:";
        }
        if (condition_part_time[x] == "H") {
            reg_time = reg_time + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)\\:";
        }
        if (condition_part_time[x] == "i") {
            reg_time = reg_time + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\:";
        }
        if (condition_part_time[x] == "s") {
            reg_time = reg_time + "(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\:";
        }
        if (condition_part_time[x] == "u") {
            reg_time = reg_time + "\\d+\\:";
        }
        if (condition_part_time[x] == "U") {
            reg_time = reg_time + "\\d+\\:";
        }
    }
    
    if (!value_time.match(reg_time) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_equalsTo = function(element, condition, message) {  
    value = $("#"+element).val();
    condition_value = $("#"+condition).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (condition_value != value && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_float = function(element, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value.match(/^\-?(\d+?|)\.?\d+?$/) || value == "." && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_integer = function(element, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!value.match(/^\-?\d+$/) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_numeric = function(element, message) {  
    value = $("#"+element).val();
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (isNaN(parseFloat(value)) && !isFinite(value) && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_contains = function(element, condition, message) {  
    value = $("#"+element).val();
    conditions = condition.split(",");
    isValid = false;
    for(x = 0; x < conditions.length; x++) {
        if (conditions[x] == value) {
            isValid = true;
        }
    }
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (!isValid && value != "") {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_file_required = function(element, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (file.files.length == 0) {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_min_files = function(element, condition, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (file.files.length < condition) {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_max_files = function(element, condition, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (file.files.length > condition) {
        error_box.html(message);
        error_box.addClass("text-danger");
        error_box.closest(".form-group").addClass("has-error");
        return false;
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_file_min_size = function(element, condition, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (file.files.length > 0) {
        var isValid = true;
        for (var x = 0; x < file.files.length; x++) {
            if (file.files[x].size < condition) {
                message = message.replace(":file", file.files[x].name);
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            error_box.html(message);
            error_box.addClass("text-danger");
            error_box.closest(".form-group").addClass("has-error");
            return false;
        }
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_file_max_size = function(element, condition, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    if (file.files.length > 0) {
        var isValid = true;
        for (var x = 0; x < file.files.length; x++) {
            if (file.files[x].size > condition) {
                message = message.replace(":file", file.files[x].name);
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            error_box.html(message);
            error_box.addClass("text-danger");
            error_box.closest(".form-group").addClass("has-error");
            return false;
        }
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

validation_mime = function(element, condition, message) {  
    file = document.getElementById(element);
    error_box = $("#error_"+element);
    error_box.html("");
    error_box.removeClass("text-danger");
    error_box.closest(".form-group").removeClass("has-error").removeClass("has-success");
    conditions = condition.split(",");
    if (file.files.length > 0) {
        var isValid = false;
        for (var x = 0; x < file.files.length; x++) {
            file_name = file.files[x].name;
            message = message.replace(":file", file_name);
            file_type = file.files[x].name.split(".");
            file_type = file_type[file_type.length-1];
            for (i = 0; i < conditions.length; i++) {
                if (conditions[i] == file_type) {
                    isValid = true;
                    break;
                }
            }
        }
        if (!isValid) {
            error_box.html(message);
            error_box.addClass("text-danger");
            error_box.closest(".form-group").addClass("has-error");
            return false;
        }
    }
    error_box.closest(".form-group").addClass("has-success");
    return true;
};

var error_files = false;
function imageIsValid(boolean) {
    error_files = boolean;
}

function readImage (file, element, condition, message, type) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    var image  = new Image();
    image.addEventListener("load", function (e) {
        error_box = $("#error_"+element);
        if (type == "min_width") {
            error_files = false;
            if (image.width < condition) {
                if (error_box.html() == "") {
                    error_box.html(message);
                    error_box.closest(".form-group").removeClass("has-success");
                    error_box.addClass("text-danger");
                    error_box.closest(".form-group").addClass("has-error");
                }
                error_files = true;
            } else {
                error_box.html("");
                error_box.closest(".form-group").removeClass("has-error");
                error_box.removeClass("text-danger");
                error_box.closest(".form-group").addClass("has-success");
            }
        }
        else if (type == "max_width") {
            error_files = false;
            if (image.width > condition) {
                if (error_box.html() == "") {
                    error_box.html(message);
                    error_box.closest(".form-group").removeClass("has-success");
                    error_box.addClass("text-danger");
                    error_box.closest(".form-group").addClass("has-error");
                }
                error_files = true;
            } else {
                error_box.html("");
                error_box.closest(".form-group").removeClass("has-error");
                error_box.removeClass("text-danger");
                error_box.closest(".form-group").addClass("has-success");
            }
        }
        else if (type == "min_height") {
            error_files = false;
            if (image.height < condition) {
                if (error_box.html() == "") {
                    error_box.html(message);
                    error_box.closest(".form-group").removeClass("has-success");
                    error_box.addClass("text-danger");
                    error_box.closest(".form-group").addClass("has-error");
                }
                error_files = true;
            } else {
                error_box.html("");
                error_box.closest(".form-group").removeClass("has-error");
                error_box.removeClass("text-danger");
                error_box.closest(".form-group").addClass("has-success");
            }
        }
        else if (type == "max_height") {
            error_files = false;
            if (image.height > condition) {
                if (error_box.html() == "") {
                    error_box.html(message);
                    error_box.closest(".form-group").removeClass("has-success");
                    error_box.addClass("text-danger");
                    error_box.closest(".form-group").addClass("has-error");
                }
                error_files = true;
            } else {
                error_box.html("");
                error_box.closest(".form-group").removeClass("has-error");
                error_box.removeClass("text-danger");
                error_box.closest(".form-group").addClass("has-success");
            }
        }

        imageIsValid(error_files);
    });
    image.src = useBlob ? window.URL.createObjectURL(file) : reader.result;
    if (useBlob) {
      window.URL.revokeObjectURL(file);
    }
  });
  reader.readAsDataURL(file);
}