const addTracking = () => {
	// Find the two "Add to Cart" buttons
	const buttonAddToCart = document.querySelector('#addToCart');
	const buttonAddToCartMobile = document.querySelector('#addToCartBtnMobile2');
	// Find the two "Use Pro Credit" buttons
	const buttonUseProCredit = document.querySelector('#buyWithCreditsUpsellButton1');
	const buttonUseProCreditMobile = document.querySelector('#buyWithCreditsUpsellButton2');
	// Find all instances of the "Learn More" link
	const linkUseProCredit = document.querySelectorAll('.proCreditUpsellMessage__link');

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

	// Add tracking to the variation PDP Pro Credit Learn More add to cart clicks -- Event: pdp_pro_credit_learn_more_click
	if (linkUseProCredit.length) {
		linkUseProCredit.forEach(learnMore => {
			learnMore.addEventListener('click', () => {
					dataLayer.push({
							event: 'vwo_test_event',
							vwo_event_name: 'pdp_pro_credit_learn_more_click'
					});
			});
		});
	}

};

var onDocumentLoad = function () {

	// Find the div `.proCreditUpsellMessage` located in `.productPageButton` and `.mobileDisplayOnly`
	const proCreditUpsellMessage = document.querySelectorAll('.proCreditUpsellMessage');

	// Within all instances of `proCreditUpsellMessage`, ...
	proCreditUpsellMessage.forEach(function(el) {

		// add a period after the text
		el.innerHTML = el.innerHTML + '.';

		// add an image before the text
		el.innerHTML = '<img src="https://storage.googleapis.com/images.trinity.one/Music%20Notes/MN-A-Pro-PDP-June2023/Group%202.png" width="28" height="38" alt="MusicNotes Pro" class="proCreditUpsellMessage__image" />' + el.innerHTML;

		// add a "Learn More" link after the period
		el.innerHTML = el.innerHTML + ' <a href="#" class="proCreditUpsellMessage__link">Learn&nbsp;More</a>';

	});

	// Find the `.proCreditUpsellMessage__link` link
	const proCreditUpsellMessageLink = document.querySelectorAll('.proCreditUpsellMessage__link');
	// Find the `.mn-btn-action-pro` button
	const buyWithCreditsUpsellButton = document.querySelectorAll('.mn-btn-action-pro');

	// When clicking on `proCreditUpsellMessageLink`,
	// apply a click to the `buyWithCreditsUpsellButton`
	proCreditUpsellMessageLink.forEach(function(el) {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			buyWithCreditsUpsellButton.forEach(function(el) {
				el.click();
			});
		});
	});

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
    "vwodesc": "MN-A-Pro-PDP-June2023 | Variation",
    "type": "vwo",
    "message": err.toString(),
    "stack": err.stack,
    "source": window.location.href
  };
  var x = new XMLHttpRequest;
  x.open("POST", "https://us-central1-tixray.cloudfunctions.net/err", !0), x.send(JSON.stringify(e));
}
