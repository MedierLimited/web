
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const solutionCards = document.querySelectorAll('.solution-card');

function selectSolution(card) {
  solutionCards.forEach((item) => {
    const selected = item === card;
    item.classList.toggle('is-selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
}

solutionCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    selectSolution(card);
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectSolution(card);
    }
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

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

if (window.jQuery) $(document).ready(function(){
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
