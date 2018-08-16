/*function clickElement (el) {
	console.log(el);
}
function bar () {
	console.log('BAR');
}
function bar1 () {
	alert('BAR1');
}

var div = document.getElementById('div');
div.onclick = bar;
var div = document.getElementById('div1');
div.onclick = bar1;*/
///////////////////////////////////////////
/*function foo () {
	console.log("OK"); 
}
function handEvent (element, event, foo) {
	try {
		element.addEventListener(event, foo, false);
	} catch(e) {
		element.attachEvent("on"+event, foo);
	}
}
var p = document.getElementById('p');
handEvent(p, "click", foo);
*/
/*//////////////////////////////////////
				Drag&Drop
//////////////////////////////////////*/
function f () {
	function DragConst (element, dragStart, dragEnd) {
		this.element = element;
		this.dragStart = dragStart;
		this.dragEnd = dragEnd;
		var self = this;
		function move (event) {
			if (self.dragStart !== undefined) {
				self.dragStart();
			}
			var originalTop = parseInt(window.getComputedStyle(this).top);
			var originalLeft = parseInt(window.getComputedStyle(this).left);
			var mouseDownX = event.clientX;
			var mouseDownY = event.clientY;
			/*console.log(mouseDownX);
			console.log(mouseDownY);
			console.log(originalTop);
			console.log(originalLeft);*/
			function dragMe (event) {
				self.element.style.top = originalTop + event.clientY - mouseDownY + "px";	
				self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
				event.stopPropagation();			
			}
			function dropMe (event) {
				document.removeEventListener("mousemove", dragMe, true);
				document.removeEventListener("mouseup", dropMe, true);
				if (self.dragEnd !== undefined) {
				self.dragEnd();
				}
				event.stopPropagation();
			}
			document.addEventListener("mousemove", dragMe, true);
			document.addEventListener("mouseup", dropMe, true);
			
		}
		this.element.addEventListener('mousedown', move, false);
		
	}
	var dragStart = function () {
		this.element.style.width = 	parseInt(window.getComputedStyle(this.element).width) * 1.05 + "px";
		this.element.style.height = 	parseInt(window.getComputedStyle(this.element).height) * 1.05 + "px";
	};
	var dragEnd = function () {
		this.element.style.width = 	parseInt(window.getComputedStyle(this.element).width) * (100/105) + "px";
		this.element.style.height = parseInt(window.getComputedStyle(this.element).height) * (100/105) + "px";
	};
	var divEl = document.getElementById('dragDiv');
	var newObj = DragConst(divEl, dragStart, dragEnd);
}
window.addEventListener('load', f, false);






















