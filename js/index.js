window.onscroll = function () { stickyHeader() };
var header = document.getElementById("nav-bar__id");
var main = document.getElementById("main__section_id");
var sticky = header.offsetTop;

function stickyHeader() {
	if (window.pageYOffset > main.offsetHeight) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
