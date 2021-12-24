
function goCollectionPage() {
   location = "https://amway.dm/3z4xla/";
}

function goGetGift()
{
	if ($("#input_1").val().length == 2 && $("#input_2").val().length == 6) {
		var yes = confirm('確認進行集章嗎？');
		if (yes) {
			$("#form").submit();
		}
	}
}

function logout()
{
	location = "collection.aspx?label=logout";
}

$(document).ready(function(){
	$("#input_1").keyup(function(e) { 
	   if (this.value.length >= $(this).data("maxlength")) { 
	   $("#input_2").focus();
	   }
	});
	$("#input_2").keyup(function(e) {
	   if (this.value.length == 0)
	   {
	   $("#input_1").focus();
	   }
	});
	$("#input_1").bind("input", function() {
		$("#input_1").val(this.value.replace(/[^0-9]/gi, ''));
		if ($("#input_1").val().length == 2 && $("#input_2").val().length == 6) {
		   $("#input_button").attr('class', 'input_button_up');
		} else {
			$("#input_button").attr('class', 'input_button');
		}
	});
	$("#input_2").bind("input", function() {
		$("#input_2").val(this.value.replace(/[^a-zA-Z0-9]/gi, ''));
		if ($("#input_1").val().length == 2 && $("#input_2").val().length == 6) {
			$("#input_button").attr('class', 'input_button_up');
		} else {
			$("#input_button").attr('class', 'input_button');
		}
	});
});

