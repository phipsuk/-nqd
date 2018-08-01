var intro = document.getElementById('js-skipto-intro'),
		comp = document.getElementById('js-competition-form__submit');

if(intro) {
	intro.addEventListener('click', function(e){
		smooth_scroll_to(document.body, document.getElementById('intro').offsetTop, 600);
		e.preventDefault();
	});
}
if(comp) {
	comp.addEventListener('click', function(e){
		competition();
	  e.preventDefault();
	});
}



document.querySelector('.js-nav-toggle').addEventListener('click', function(e){
	var nav = document.querySelector('.nav')
		nav.classList.toggle('nav--active');
	e.preventDefault();
});




function competition() {
	var firstName = document.getElementById('first-name').value,
			lastName = document.getElementById('last-name').value,
			tel = document.getElementById('tel').value,
			email = document.getElementById('email').value,
			optIn = document.getElementById('opt-in').checked,
			answer = '';

		// Get answer
		var radios = document.getElementsByName('dba');
		for (var i = 0, length = radios.length; i < length; i++) {
		    if (radios[i].checked) {
		        answer = radios[i].value;
		        break;
		    }
		}

	var domain = email.replace(/.*@/, "");
	if(domain === 'hoodmail.co.uk') {
		alert('No Dice!');
	}
	
	if(Number(document.getElementById('tel').value.replace(/ /g,''))!=0) {

		var data = 'firstname=' + firstName + '&lastname=' + lastName + '&tel=' + tel + '&email=' + email + '&answer=' + answer + '&optin=' + optIn;

		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", "/enter.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(data);

		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				document.getElementById('competition').innerHTML = this.responseText;
		  }
		}
	}
}

var smooth_scroll_to=function(a,b,c){if(b=Math.round(b),c=Math.round(c),c<0)return Promise.reject("bad duration");if(0===c)return a.scrollTop=b,Promise.resolve();var d=Date.now(),e=d+c,f=a.scrollTop,g=b-f,h=function(a,b,c){if(c<=a)return 0;if(c>=b)return 1;var d=(c-a)/(b-a);return d*d*(3-2*d)};return new Promise(function(b,c){var i=a.scrollTop,j=function(){if(a.scrollTop!=i)return void c("interrupted");var k=Date.now(),l=h(d,e,k),m=Math.round(f+g*l);return a.scrollTop=m,k>=e?void b():a.scrollTop===i&&a.scrollTop!==m?void b():(i=a.scrollTop,void setTimeout(j,0))};setTimeout(j,0)})};
