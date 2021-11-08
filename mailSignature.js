
function separateTwoItems (block, first, separator, last) {
	let firstValue = $("#"+ first).text();
	let lastValue = $("#"+ last).text();
	if (firstValue !== "" || lastValue !== "") {
		$("#"+ block).show();
		if (firstValue !== "" && lastValue !== "") {
			$("#" + separator).show();
		} else {
			$("#" + separator).hide();
		}
	} else {
		$("#"+ block).hide();
	}
}

function separateThreeItems (block, first, firstSeparator, second, lastSeparator, last) {
	let firstValue = $("#"+ first).text();
	let secondValue = $("#"+ second).text();
	let lastValue = $("#"+ last).text();
	if (firstValue !== "" || secondValue !== "" || lastValue !== "") {
		$("#"+ block).show();
		if (firstValue !== "" && secondValue !== "" && lastValue !== "") {
			$("#" + firstSeparator).show();
			$("#" + lastSeparator).show();
		} else if (firstValue !== "" && secondValue !== "") {
			$("#" + firstSeparator).show();
			$("#" + lastSeparator).hide();
		} else if (secondValue !== "" && lastValue !== "") {
			$("#" + firstSeparator).hide();
			$("#" + lastSeparator).show();
		} else if (firstValue !== "" && lastValue !== "") {
			$("#" + firstSeparator).show();
			$("#" + lastSeparator).hide();
		} else {
			$("#" + firstSeparator).hide();
			$("#" + lastSeparator).hide();
		}
	} else {
		$("#"+ block).hide();
	}
}

function setValue(field, value) {
	let divObject = "#" + field;
	if (value !== "null") {
		$(divObject).text(value);
		inputObject = "input[name='" + field + "']";
		$(inputObject).val(value);
 		// if (typeof(Storage) !== "undefined") {
		// 	localStorage.setItem(field, value);
		// }
		if (value !== "") {
			$(divObject).show();
		} else {
			$(divObject).hide();
		}
	} else {
		$(divObject).hide();
	}
	separateTwoItems("nameBlock", "fullname", "separateName", "mail");
	separateTwoItems("positionBlock", "effecivePosition", "separatePosition", "commissionedPosition");
	separateThreeItems("phoneBlock", "phone", "separateFirstPhone", "altPhone", "separateLastPhone", "compPhone");
};

function saveImage() {
	let imageBox = document.querySelector("#imageBox");
	html2canvas(imageBox).then(canvas => {
		imageDataURL = canvas.toDataURL("image/png", 1.0);
		let downloadLink = document.createElement('a');
		downloadLink.download = "assinatura.png";
		downloadLink.href = imageDataURL;
		downloadLink.click();
	});
}

function setStyles(originalElem, elem) {
	let style = getComputedStyle(originalElem);
	elem.style.marginLeft = style.marginLeft;
	elem.style.marginRight = style.marginRight;
	elem.style.marginTop = style.marginTop;
	elem.style.marginBottom = style.marginBottom;
	elem.style.paddingLeft = style.paddingLeft;
	elem.style.paddingRight = style.paddingRight;
	elem.style.paddingTop = style.paddingTop;
	elem.style.paddingBottom = style.paddingBottom;
	elem.style.display = style.display;
	elem.style.flexWrap = style.flexWrap;
	elem.style.flexDirection = style.flexDirection;
	elem.style.fontWeight = style.fontWeight;
	elem.style.fontFamily = style.fontFamily;
	elem.style.fontSize = style.fontSize;
	elem.style.color = style.color;
	elem.style.border = style.border;
	elem.style.borderRightWidth = style.borderRightWidth;
	elem.style.borderRightStyle = style.borderRightStyle;
	elem.style.borderRightColor = style.borderRightColor;
	elem.style.width = style.width;
	elem.style.textAlign = style.textAlign;
	elem.style.alignItems = style.alignItems;
	elem.style.justifyContent = style.justifyContent;
	elem.style.lineHeight = style.lineHeight;
	elem.style.whiteSpace = style.whiteSpace;
	for (let i = 0; i < elem.children.length; i++) {
		setStyles(originalElem.children[i], elem.children[i]);
	}
}

function copyHTML(elem) {
	let textArea = document.querySelector("textarea");
	textArea.value = elem.outerHTML;
	textArea.focus();
	textArea.select();
	if (navigator.clipboard && window.isSecureContext) {
		console.log("Navigator Clipboard")
		navigator.clipboard.writeText(elem.outerHTML);
	} else {
		console.log("Exec Command Copy")
		document.execCommand('copy');
	}
	textArea.readOnly = "true";
}

function saveHTML() {
	let rootElement = document.querySelector("#imageBox");
	let cloneElement = rootElement.cloneNode(true);
	setStyles(rootElement, cloneElement);
	copyHTML(cloneElement);
}

function copiedTooltip() {
	let tooltip = document.getElementById("tooltip")
	tooltip.innerHTML = "Copiado!";
}

function resetTooltip() {
	let tooltip = document.getElementById("tooltip")
	tooltip.innerHTML = "Clique para copiar!";
}

$(document).ready(function() {
	// setValue("fullname", localStorage.getItem("fullname"));
	// setValue("mail", localStorage.getItem("mail"));
	// setValue("effecivePosition", localStorage.getItem("effecivePosition"));
	// setValue("commissionedPosition", localStorage.getItem("commissionedPosition"));
	// setValue("department", localStorage.getItem("department"));
	// setValue("phone", localStorage.getItem("phone"));
	// setValue("altPhone", localStorage.getItem("altPhone"));
	// setValue("compPhone", localStorage.getItem("compPhone"));
});
