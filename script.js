document.addEventListener("DOMContentLoaded", function () {
    // Load header & footer
    fetch("header.html").then(res => res.text()).then(data => {
        document.getElementById("header").innerHTML = data;
    });

    fetch("footer.html").then(res => res.text()).then(data => {
        document.getElementById("footer").innerHTML = data;
    });

    // Validasi Form (Hanya jika di halaman registrasi)
    const form = document.getElementById("registrationForm");
    if (form) {
        const submitBtn = document.getElementById("submitBtn");
        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const birthdate = document.getElementById("birthdate");
        const phone = document.getElementById("phone");

        function validateForm() {
            let isValid = true;

            if (fullName.value.length < 3) {
                fullName.classList.add("is-invalid");
                isValid = false;
            } else {
                fullName.classList.remove("is-invalid");
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                email.classList.add("is-invalid");
                isValid = false;
            } else {
                email.classList.remove("is-invalid");
            }

            if (password.value.length < 8) {
                password.classList.add("is-invalid");
                isValid = false;
            } else {
                password.classList.remove("is-invalid");
            }

            if (confirmPassword.value !== password.value) {
                confirmPassword.classList.add("is-invalid");
                isValid = false;
            } else {
                confirmPassword.classList.remove("is-invalid");
            }

            const birthYear = new Date(birthdate.value).getFullYear();
            if (birthYear > 2006 || isNaN(birthYear)) {
                birthdate.classList.add("is-invalid");
                isValid = false;
            } else {
                birthdate.classList.remove("is-invalid");
            }

            const phonePattern = /^\+62[0-9]{9,13}$/;
            if (!phonePattern.test(phone.value)) {
                phone.classList.add("is-invalid");
                isValid = false;
            } else {
                phone.classList.remove("is-invalid");
            }

            submitBtn.disabled = !isValid;
        }

        form.addEventListener("input", validateForm);
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Registrasi berhasil!");
            form.reset();
            submitBtn.disabled = true;
        });
    }
});
