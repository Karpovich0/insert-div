(() => {
	const ITEM = document.querySelector(".product-items>li:nth-of-type(4)");
	ITEM.insertAdjacentHTML(
		"afterend",
		'<div style="display: flex;justify-content:center; align-items:center;margin:16px 0.5rem;min-height:320px;border-radius:10px;box-shadow: 1px 1px 5px 5px #f1f1f1;">Some inserted text</div>'
	);
	const INSERTED_ITEM = document.querySelector(".product-items>div");

	changeElementWidth();

	window.onresize = () => {
		changeElementWidth();
	};

	function changeElementWidth() {
		if (window.innerWidth > 1199) {
			INSERTED_ITEM.style.setProperty("width", "calc(48%)");
		} else if (window.innerWidth > 767) {
			INSERTED_ITEM.style.setProperty("width", "calc(60%)");
		} else {
			INSERTED_ITEM.style.setProperty("width", "calc(98%)");
		}
	}
})();
