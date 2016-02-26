function validName(name) {
				
			if (name == "") {
				return false
			}

			return true 
		}

function validCompany(company) {
				
			if (company == "") {
				return false
			}

			return true 
		}
		
function validEmail(email) {
			
			invalidChars = " /:,;"
	
			if (email == "") {
				return false
			}
			
			for (i=0; i<invalidChars.length; i++) {
				badChar = invalidChars.charAt(i)
				if (email.indexOf(badChar,0) > -1) {
					return false
				}
			}
			
			atPos = email.indexOf("@",1)
			
			if (atPos == -1) {
				return false
			}
			if (email.indexOf("@",atPos+1) > -1) {
				return false
			}
			
			periodPos = email.indexOf(".",atPos)
			
			if (periodPos == -1) {
				return false
			}
			if (periodPos+3 > email.length)	{
				return false
			}


			return true 
		}


	function validateSurvey(surveyForm) { 
			if (!validName(surveyForm.name.value)) {
				alert("Please use a name!!")
				surveyForm.realname.focus()
				surveyForm.realname.select()
				return false
			}
			if (!validCompany(surveyForm.company.value)) {
				alert("Please use a company!!")
				surveyForm.realname.focus()
				surveyForm.realname.select()
				return false
			}
			if (!validEmail(surveyForm.realname.value)) {
				alert("Invalid email address!!")
				surveyForm.realname.focus()
				surveyForm.realname.select()
				return false
			}
			alert("Thank you for completing the Client Survey!")
			return true 

		}
