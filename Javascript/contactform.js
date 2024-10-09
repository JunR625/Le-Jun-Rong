function validateForm(){
    if (document.forms[0].name.value ==""){
        alert("Name cannot be empty.");
        return false;
    }

    if (document.forms[0].comment.value ==""){
        alert("Comment cannot be empty.");
        return false;
        }


    if (document.forms[0].email.value ==""){
        alert("E-mail address cannot be empty.");
        return false;
    }

    if (!document.forms[0].email.value.includes('@')) {
        alert ("The e-mail address is invalid. Missing @ symbol.");
        return false;
      }
    
    }
    

