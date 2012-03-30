chrome.browserAction.onClicked.addListener(function(tab){
	var range = document.createRange();
	var link = document.createElement("a");
	link.href = tab.url;
	link.innerText = tab.title;
	document.body.innerHtml = "";
	document.body.appendChild(link);

	var sel = window.getSelection();
	sel.removeAllRanges();
	var range = document.createRange();
	range.selectNode(link);
	sel.addRange(range);

	document.execCommand("copy", false, null);
});
