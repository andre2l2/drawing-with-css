const $block = document.querySelector('.move');

let flag = false;
let click = false;
const events = {
	mousemove() {
		if (flag) {
			$block.style.top = event.clientY - 100 + 'px';
			$block.style.left = event.clientX - 100 + 'px';

			$block.innerHTML = `<p>Y:${$block.style.top} X:${$block.style.left}</p>`;
		}
	},
	mouseout() {
		flag = false;
	},
	mouseout() {
		$block.style.cursor = 'grab';
	},
	mouseup() {
		flag = false;

		$block.style.cursor = 'grab';
	},
	mousedown() {
		flag = true;

		$block.style.cursor = 'grabbing';
	},
};

const eventsArray = Object.keys(events);
eventsArray.forEach((element) => {
	$block.addEventListener(element, events[element]);
});
