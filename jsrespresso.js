/* JSRespresso JS V1.0 by GPSoft 2020 
     Changelog : 
*/

function checkTest(inputTxt) {
    var inputText = document.getElementById(inputTxt);
    var regexpr = document.getElementById("regexpr");
    if ( regexpr.value != "" )
    {    
      var re = new RegExp(regexpr.value);
      console.log("regexpr.value : " + regexpr.value);
      console.log("re : " + re);

      if ( inputText.value != "" )
      {
        var ret=re.exec(inputText.value);
        console.log("ret : " + ret);
        if ( !ret )
        {
          inputText.style.backgroundColor = "red";
        }
        else
        {
          inputText.style.backgroundColor = "green";
        }    
      }    
      else
      {
        inputText.style.backgroundColor = "white";   
      }    

    }    
}

function resetText(textName)
{
  var inputText = document.getElementById(textName);
  inputText.value = "";
  inputText.style.backgroundColor = "white";
}

function checkRegExpr() {
  var regexpr = document.getElementById("regexpr"); 
  if ( regexpr.value != "" )
  {  
    checkTest1();
    checkTest2();
    checkTest3();
    checkTest4();
  }
  else
  {
    resetText("test1");
    resetText("test2");
    resetText("test3");
    resetText("test4");
  }  
}

function checkTest1() {
    var regexpr = document.getElementById("regexpr");
    if ( regexpr.value.trim() == "" )
    {    
      alert("Insert before Regular Expression.")
    }  
    else
    {
      checkTest("test1")
    }  
}

function checkTest2() {
    var regexpr = document.getElementById("regexpr");
    if ( regexpr.value.trim() == "" )
    {    
      alert("Insert before Regular Expression.")
    }  
    else
    {
      checkTest("test2")
    }  
}

function checkTest3() {
    var regexpr = document.getElementById("regexpr");
    if ( regexpr.value.trim() == "" )
    {    
      alert("Insert before Regular Expression.")
    }  
    else
    {
      checkTest("test3")
    }  
}

function checkTest4() {
    var regexpr = document.getElementById("regexpr");
    if ( regexpr.value.trim() == "" )
    {    
      alert("Insert before Regular Expression.")
    }  
    else
    {
      checkTest("test4")
    }  
}