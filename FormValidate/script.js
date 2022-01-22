
function validateForm(){
	var username =document.getElementById("username").value;
	var password =document.getElementById("password").value;
	var email =document.getElementById("email").value;
	var contact =document.getElementById("contact").value;
	if(username.trim()==""){
		alert("please enter usename!");
		return false;  
		 }   
	var checkname =/nsu/g;   
	if(!username.trim().match(checkname)){
		alert("username must contain nsu!");
		return false;  

	}
	
	var pass=/^[a-zA-Z0-9]{7,20}$/;   
	if(!password.trim().match(pass)){

	  	alert("password length should be in between 7-20 and Any special character (e.g. !@#$%^&*()_+=-~`) is invalid.");
	    return false;  
	   }
	   var strings=password.toString();
	   var numeric=0;   
	   var upper=0; 
	   var lowwer=0;  
	   var character='';
	   for(var i=0; i<strings.length;i++){
	    	character=strings.charAt(i);
	    	if(!isNaN(character)){
	    		numeric=2;
	    	}
	    	else if(character==character.toUpperCase()){
	    		upper=1;
	    	}
	    	else if(character==character.toLowerCase()){
	    		lowwer=1;
	    	}
	    }
	    	
	    if(numeric==0 || upper==0 || lowwer==0 ){
	    	alert("Password must contain at least 2 numeric, 1 uppercase, 1 lowwercase");
	   return false;  
	}

	var mail= /@./g;
	if(!email.trim().match(mail)){
		alert("User must enter a valid mail");
		return false;
	}
	var Cnum= /^[0-9]{11}$/;
	if(!contact.trim().match(Cnum)){
		alert("Only numeric is valid input, Enter 11digits also");
		return false;
	}
	if(contact[0]!='0' || contact[1]!= '1'){
		alert("Contact must be start with 01XXXXXXXX");
		return false;
	}
	   

else 
	return true;
}