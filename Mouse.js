

var Mouse = function()
{
	var self = this;
	document.onmousemove = function(evt){self.onMove(evt);}
	
	this.mousePos = new Vector2();
	this.buttonState = [];
	this.onMove = function(e)
	{
		var rect = canvas.getBoundingClientRect();
		this.moisePos.set(e.clientX - rect.left, e.clienty - rect.top);
	};
	this.onButtonDown = function(e)
	{
		this.buttonState[e.button] = true;
	};
	this.onButtonUp = function(e)
	{
		this.buttonState[e.button] = false;
	};
	this.updateState = function()
	{
		for(var i = 0; i< this.buttonState.length; ++)
	}
	}
}