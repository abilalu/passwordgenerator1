// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar;
var uppercasechar;
var number;
var special;
var finalpassword;
var lowercase = ["abcdefghijklmnopqrstuvwxyz"] ;
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"] ;
var spchar = ["/[!@#$%^&*()_+\|{}[].<>'"] ;
var numchar = "0123456789"
var final= "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
function generatePassword()
{
  input=prompt("Enter maximum length of characters you want for the password!!(Minimum 8 required) ");
  console.log(input);
  {
    if(input >= 8 && input <=128)
    {
      lowercasechar = confirm("Do you want to include Lower Case letter?");
      uppercasechar = confirm("Do you want to include Upper case letter?");
      number = confirm("Do you want to include Numerical Characters?");
      special = confirm("Do yoy want to include Special Characters?");
      finalpassword="0";
      finalpassword= writePasswordfirst()
      return finalpassword;}
      
     
      
      
    }
  }
  function writePasswordfirst() 
  {

    var i = 0;
    if(lowerchar==true)
    {
      for(i=0;i<(input/4);i++)
      {
        final+=lowercase[Math.floor(Math.random()*26)];
      }}
      if(uppercasechar==true)
      {
        for(i;i<(input/3);i++)
        {
          final+=uppercase[Math.floor(Math.random()*26)];
        }
        
      }
      if(special==true)
      {
        for(i;i<(input/2);i++)
        {
          final+=spchar[Math.floor(Math.random()*25)];
        }
      }
      if(number==true)
      {
        for(i;i<(input);i++)
        {
          final+=numchar[Math.floor(Math.random()*10)];

        }
      }
    }

