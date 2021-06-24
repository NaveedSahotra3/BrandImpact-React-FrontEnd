function contactform1()
{

if((document.iea.your_name.value=="")||(document.iea.your_name.value=="your_name")) {
alert("Kindly fill in Your Name!");
document.iea.your_name.focus();
return false;
}

else if(containsdigit(document.iea.your_name.value))
{
alert("Name cannot contain numeric!");
document.iea.your_name.focus();
return false;
}
else if(containswrong(document.iea.your_name.value))
{
alert("Name contains junk values!");
document.iea.your_name.focus();
return false;
}

if((document.iea.your_email.value=="")||(document.iea.your_email.value=="your_email")) {
alert("Kindly fill in Your Email!");
document.iea.your_email.focus();
return false;
}

else if((document.iea.your_email.value!='') && (validateemailv2(document.iea.your_email.value)==false)){
alert("Enter Valid Email ID!");
document.iea.your_email.focus();
return false;
}

if((document.iea.your_mobile.value=="")||(document.iea.your_mobile.value=="your_mobile")) {
alert("Kindly fill in Your Mobile no.!");
document.iea.your_mobile.focus();
document.iea.your_mobile.select();
return false;
}

else if((containsalpha(document.iea.your_mobile.value))||(containswrong(document.iea.your_mobile.value)))
{
alert("Please check your Mobile number!");
document.iea.your_mobile.focus();
document.iea.your_mobile.select();
return false;
}

else if((document.iea.your_mobile.value.length<6)) {
alert("Please check your Mobile number!");
document.iea.your_mobile.focus();
document.iea.your_mobile.select();
return false;
}




}


function containsalpha(param){
strLen = param.length;

for(i=0;i<strLen;i++)
{
if((param.charAt(i)<"0") || (param.charAt(i)>"9"))
{
return true;
}
}
return false;

} // end of containsalpha


function containsdigit(param){
strLen = param.length;

for(i=0;i<strLen;i++)
{
if((param.charAt(i)=="0") || (param.charAt(i)=="1") || (param.charAt(i)=="2") || (param.charAt(i)=="3") || (param.charAt(i)=="4") || (param.charAt(i)=="5") || (param.charAt(i)=="6") || (param.charAt(i)=="7") || (param.charAt(i)=="8") || (param.charAt(i)=="9"))
{
return true;
}
}
return false;

} // end of function containsdigit

function containswrong(param){
strLen1 = param.length;

for(i=0;i<strLen1;i++)
{
if((param.charAt(i)==";") || (param.charAt(i)=="=") || (param.charAt(i)=="+") || (param.charAt(i)=="*") || (param.charAt(i)=="#") || (param.charAt(i)=="$") || (param.charAt(i)=="%") || (param.charAt(i)=="^") || (param.charAt(i)=="?") || (param.charAt(i)=="@")||(param.charAt(i)=="/") || (param.charAt(i)=="<") || (param.charAt(i)==">")|| (param.charAt(i)=="-") || (param.charAt(i)=="~"))
{
return true;
}
}
return false;
}


function validateemailv2(email){
var splitted = email.match("^(.+)@(.+)$");
if(splitted == null) return false;
if(splitted[1] != null )
{
var regexp_user=/^\"?[\w-_\.]*\"?$/;
if(splitted[1].match(regexp_user) == null) return false;
}
if(splitted[2] != null)
{
var regexp_domain=/^[\w-\.]*\.[a-za-z]{2,4}$/;
if(splitted[2].match(regexp_domain) == null)
{
var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
if(splitted[2].match(regexp_ip) == null) return false;
}
return true;
}
return false;
} 
