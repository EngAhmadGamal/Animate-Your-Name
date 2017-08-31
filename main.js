/**
 * Created by Ahmad on 1/07/2017.
 */
var myName = prompt(' Please Enter Your Name || من فضلك أكتب اسمك ');
document.write('<h3 align="center">Move Your Mouse On Your Name || حرك الماوس على اسمك</h3>');
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
