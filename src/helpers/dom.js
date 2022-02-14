// ------ MISC
// found in stackoverflow to add an element first waiting full implementation of appendFirst in DOM
/*
HTMLElement.prototype.appendFirst=function(childNode){
    if(this.firstChild)this.insertBefore(childNode,this.firstChild);
    else this.appendChild(childNode);
};
*/
// -- version from https://1loc.dev/

export const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);
// Or
//const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
export const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);
// Or

//const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);




/*
 * Wrap a given element in a new container element using plain JavaScript: 
 * 
 *  https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
 *  https://stackoverflow.com/questions/6838104/pure-javascript-method-to-wrap-content-in-a-div
 *  https://gist.github.com/datchley/11383482
 */
export const wrap = (el, wrapper) => {el.parentNode.insertBefore(wrapper, el);wrapper.appendChild(el);}

// Check if domisready
// Thanks @stimulus:
// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
export const  domReady = function () {
	return new Promise(resolve => {
		if (document.readyState == "loading") { // Loading hasn't finished yet
			document.addEventListener("DOMContentLoaded", resolve)
		} else {// `DOMContentLoaded` has already fired
			resolve();
		}
	})
};
