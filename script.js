// Wrap your entire script in a DOMContentLoaded event listener. 
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element and its feedback div element.
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    
    // Add an event listener to the form for the submit event.
            form.addEventListener('submit', (event) => {
                // Prevent the form from submitting by default.
                event.preventDefault();
                // Input Retrieval 
                const usernameInput = document.getElementById("username");
                const emailInput = document.getElementById("email");
                const passwordInput= document.getElementById("password");
                
                //  Input  Trimming
                const username = usernameInput.value.trim();
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();

                // Initialize Validation Variables
                let isValid = true;
                const messages =[];
                
                // Username Validation

                if(username.length < 3){
                    messages.push("Username should be at least 3 characters long");
                    isValid=false;
                    
                    } 

                
                // Email Validation
                if (!email.includes("@") && !email.includes(".")){
                    messages.push("Please enter a valid email address");
                    isValid=false;
                    
                 }
                
                // Password Validation
                if(password.length < 8){
                    messages.push("Password should be at least 8 characters long");
                    isValid=false;
                    
                }

                //Display Logic
                feedbackDiv.style.display = "block";

                if(isValid){
                    feedbackDiv.textContent = "Registration successful!";
                    feedbackDiv.style.color = "#28a745";
                    
                }else{
                    feedbackDiv.innerHTML = messages.join("<br>");
                    feedbackDiv.style.color = "#dc3545";
                }
                
                

                });
    });
    