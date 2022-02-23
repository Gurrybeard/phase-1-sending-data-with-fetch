// Add your code here
function submitData(userName,email){
    const data ={
        "name":userName,
        "email":email

    }
    const config={
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(data),
        
    }
    return fetch("http://localhost:3000/users",config)
         .then(response => response.json())
         .then(body=>addContact(body.id))
         .catch(error=>addContact(error.message))
        }

    function addContact(id) {
        document.getElementsByTagName("body")[0].innerHTML=id;
    }
         