/************************
COMPP229 Assignment 1, 2
File Name: app.js
Student's Name: Guo Huang
Student ID: 301303940
Date: 2023-02-09
************************/


// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        //for all the danger button in our project 
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();