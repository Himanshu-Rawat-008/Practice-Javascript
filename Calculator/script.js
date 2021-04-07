var buttons= document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click',function () {
		var value = this.getAttribute('data-value');
		if(value == 'a/c')
		{
			display.innerText="";
			operand1 = 0;
			operand2 = null;
			operator = null;
		}
		else if(value == '+/-')
		{
			if(operator!=null)
				operand2=-1*operand2;
			else
				operand1= -1*operand1
			let operand = parseFloat(display.textContent);
			operand = -1 * operand;
			display.innerText = operand;
		}
		else if(value == '%'||value == '/'||value == '*'||value == '-'||value == '+'||value == '.')
		{
			if( value == '/' && operand2 == 0)
			{
				display.innerText="Error";
				operand1 =0;
				operand2 = null;
				operator = null;
			}
			if(operand2!=null)
				{
					operand1 = eval(operand1+' '+operator+' '+operand2);
					operand2 = null;
				}
			operator = value;
			display.innerText="";
		}
		else if(value == '=')
		{
			console.log(operand1);
			console.log(operator);
			console.log(operand2);
			let ans = eval(operand1+' '+operator+' '+operand2);
			display.innerText=ans;
			operand1 = ans;
			operand2 = null;
			operator = null;
		}
		else
		{
			display.innerText+=value;
			if(operator==null)
				operand1 = parseFloat(display.textContent);
			else
				operand2 = parseFloat(display.textContent);	
		}
	});
}