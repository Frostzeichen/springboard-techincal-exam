<!DOCTYPE html>
<html>
    <head>
        <title>List of all Users</title>
    </head>
    <body>
        <p>Hello, {{ $username }}! <a href="/logout">Logout</a></p>
        <h1>List of all Users</h1>
        <ul>
        @foreach ($users as $user)
            <li class="username">{{ $user->{'username'} }} - {{ $user->{'password'} }}</li>
        @endforeach
        </ul>
    </body>
</html>