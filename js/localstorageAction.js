        const nameData = localStorage.getItem("name");
        const emailData = localStorage.getItem("email");
        const addressData = localStorage.getItem("address");

        
        console.log("Name Object:", nameData);
        console.log("Email Object:", emailData);
        console.log("Address Object:", addressData);

         
        
        document.getElementById('name').innerText = nameData;
        document.getElementById('email').innerText = emailData;
        document.getElementById('address').innerText = addressData;