<!DOCTYPE html>
<html>
    <head>
        <title>Sample Welcome Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <form action="/login" method="post" id="loginForm">
            @csrf
            <h2>Login</h2>
            <label for="username">
                <p>Username:</p>
                <input type="text" name="username" id="username">
            </label>
            <label for="password">
                <p>Password:</p>
                <input type="password" name="password" id="password">
            </label>
            <input type="submit" value="Login">
            <p>Don't have an account? <span id="showRegistrationForm" onclick="showRegistrationForm()">Register</span>!</p>
        </form>
        <form action="/register" method="post" id="registrationForm">
            @csrf
            <h2>Register</h2>
            <label for="username">
                <p>Username:</p>
                <input type="text" name="username" id="username">
            </label>
            <label for="password">
                <p>Password:</p>
                <input type="password" name="password" id="password">
            </label>
            <label for="repeatPassword">
                <p>Repeat Password:</p>
                <input type="password" name="repeatPassword" id="repeatPassword">
            </label>
            <input type="submit" value="Register">
            <p>Already have an account? <span id="showRegistrationForm" onclick="showLoginForm()">Login</span>!</p>
        </form>
        <script>           
            const showRegistrationForm = () => {
                document.querySelector("#registrationForm").style.display = "block";
                document.querySelector("#loginForm").style.display = "none";
            }

            const showLoginForm = () => {
                document.querySelector("#registrationForm").style.display = "none";
                document.querySelector("#loginForm").style.display = "block";
            }

            showLoginForm();
        </script>
    </body>
</html>