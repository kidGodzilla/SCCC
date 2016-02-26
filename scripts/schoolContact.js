function validEmail(email) {
	
	invalidChars = " /:,;"

	if (email == "") { // “if”  email address field  is equal to "empty," return false
		return false
	}
	
	
	for (i=0; i<invalidChars.length; i++) {  // checks to see if email address contains any invalid characters
				badChar = invalidChars.charAt(i)
				if (email.indexOf(badChar,0) > -1) {
					return false
				}
			}
	
	atPos = email.indexOf("@",1)  // checks to see that there must be one "@" symbol...
	
	if (atPos == -1) {
		return false
	}
	if (email.indexOf("@",atPos+1) > -1) {  // ...and only one "@" symbol
		return false
	}
	
	periodPos = email.indexOf(".",atPos) // ...and at least one "." after the "@"
	
	if (periodPos == -1) {
		return false
	}
	if (periodPos+3 > email.length)	{  // ... and there must be at least 2 characters after the "."
		return false
	}


	return true // email address is valid if passed the above tests
}

function validName(name) {

	if (name == "")	{ 
		return false
	}

	return true
}

function validText(message) {

	if (message == "")	{ 
		return false
	}

	return true
}

function submitIt(myForm) { 
	if (!validName(myForm.yourname.value)) {
		alert("Don't insult me with that generic name!")
		myForm.yourname.focus()
		myForm.yourname.select()
		return false
	}
	if (!validEmail(myForm.realname.value)) {
		alert("Don't insult me with this invalid email address!")
		myForm.realname.focus()
		myForm.realname.select() // will highlight the incorrect email address
		return false
	}
	if (!validText(myForm.textfield.value)) {
		alert("Did you forget to write me a message!?")
		myForm.textfield.focus()
		myForm.textfield.select()
		return false
	}
	alert("Your email has been sent to your instructor.")
	return true // form gets submitted if the email address is valid
}