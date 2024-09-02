const addTracking = () => {
	// Find the two "Add to Cart" buttons
	const buttonAddToCart = document.querySelector('#addToCart');
	const buttonAddToCartMobile = document.querySelector('#addToCartBtnMobile2');
	// Find the two "Use Pro Credit" buttons
	const buttonUseProCredit = document.querySelector('#buyWithCreditsUpsellButton1');
	const buttonUseProCreditMobile = document.querySelector('#buyWithCreditsUpsellButton2');

	// Add tracking for PDP add to cart clicks -- Event: pdp_add_to_cart_click
	if (buttonAddToCart || buttonAddToCartMobile) {
		buttonAddToCart.addEventListener('click', () => {
			dataLayer.push({
				event: 'vwo_test_event',
				vwo_event_name: 'pdp_add_to_cart_click'
			});
		});
		buttonAddToCartMobile.addEventListener('click', () => {
			dataLayer.push({
				event: 'vwo_test_event',
				vwo_event_name: 'pdp_add_to_cart_click'
			});
		});
	}

	// Add tracking for PDP Use Pro Credit clicks -- Event: pdp_use_pro_credit_click
	if (buttonUseProCredit || buttonUseProCreditMobile) {
		buttonUseProCredit.addEventListener('click', () => {
			dataLayer.push({
				event: 'vwo_test_event',
				vwo_event_name: 'pdp_use_pro_credit_click'
			});
		});
		buttonUseProCreditMobile.addEventListener('click', () => {
			dataLayer.push({
				event: 'vwo_test_event',
				vwo_event_name: 'pdp_use_pro_credit_click'
			});
		});
	}

};

var onDocumentLoad = function () {

	addTracking();

};

try {
	// ensures code runs when content is loaded
	if (
		document.readyState === "complete" ||
		(document.readyState !== "loading" && !document.documentElement.doScroll)
	) {
		onDocumentLoad();
	} else {
		document.addEventListener("DOMContentLoaded", onDocumentLoad);
	}
} catch (err) {
	var e = {
		"vwotest": "24",
		"vwodesc": "MN-A-Pro-PDP-June2023 | TI Control",
		"type": "vwo",
		"message": err.toString(),
		"stack": err.stack,
		"source": window.location.href
	};
	var x = new XMLHttpRequest;
	x.open("POST", "https://us-central1-tixray.cloudfunctions.net/err", !0), x.send(JSON.stringify(e));
}
