document.addEventListener('DOMContentLoaded', function() {
    const openNavBtn = document.getElementById('openNavBtn');
    const mySidenav = document.getElementById('mySidenav');
    const closeNavBtn = document.querySelector('.closebtn');

    openNavBtn.addEventListener('click', function() {
        mySidenav.style.width = "250px";
        openNavBtn.classList.add('hidden');
        document.addEventListener('click', closeNavOutside);
    });

    closeNavBtn.addEventListener('click', function() {
        closeNav();
    });

    function closeNav() {
        mySidenav.style.width = "0";
        openNavBtn.classList.remove('hidden');
        document.removeEventListener('click', closeNavOutside);
    }

    function closeNavOutside(event) {
        if (!mySidenav.contains(event.target) && event.target !== openNavBtn) {
            closeNav();
        }
    }
});

function toggleDOB() {
    var picker = document.getElementById("dob-picker");
    var toggleButton = document.getElementById("toggle-dob");

    if (picker.type !== "text") {
        picker.type = "text";
        picker.placeholder = "Enter your date of birth (YYYY-MM-DD)";
        toggleButton.innerText = "Use Date Picker";
    } else {
        picker.type = "date";
        picker.placeholder = "";
        toggleButton.innerText = "Enter Manually";
    }
}
let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})
