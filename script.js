var x;

function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        x = "black";
     }
     document.body.appendChild(btn);    
}

createButton();

if (x == "black") {
  document.write(x);
} else {
  document.write("outra cor");
}

document.write("<h1>Titulo feito com JS</h1>");


