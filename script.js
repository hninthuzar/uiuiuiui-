
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e) {
	marker.style.left = e.offsetLeft + 'px';
	marker.style.width = e.offsetWidth + 'px';
}
indicator(item[0]);

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
	})
})