const $scroll = document.querySelector('.s-slide');
const $body = document.querySelector('body');

let state = true;
$scroll.addEventListener('click', () => {
	if (state) {
		$scroll.value = '1';
		$body.style.backgroundColor = 'black';
		state = false;
	} else {
		$scroll.value = '0';
		$body.style.backgroundColor = '#ffffff';
		state = true;
	}
});
