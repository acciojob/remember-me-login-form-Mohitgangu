//your JS code here. If required.
 <script>
        const form = document.getElementById("loginForm");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const existingBtn = document.getElementById("existing");

        function toggleExistingButton() {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingBtn.style.display = "inline-block";
            } else {
                existingBtn.style.display = "none";
            }
        }

        // Show button if credentials already exist
        toggleExistingButton();

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            alert(`Logged in as ${username}`);

            if (checkbox.checked) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            toggleExistingButton();
        });

        existingBtn.addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");

            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        });
    </script>
