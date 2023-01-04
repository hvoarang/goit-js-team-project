
       /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
const mobFavarite = document.querySelector('#dropdownmob')
const deskFavarite = document.querySelector('#dropdowndesk')    
mobFavarite.addEventListener('click', myFunctionn)
    function myFunctionn() {
        document.getElementById("myDropdownn").classList.toggle("show");     
}
    deskFavarite.addEventListener('click', myFunction)
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {

            const dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
