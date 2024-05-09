<!DOCTYPE html>
<html>
    <head>
        <title>List of all Users</title>
    </head>
    <body>
        <h1>List of all Users</h1>
        <ul>
        @foreach ($users as $user)
            <li class="username">{{ $user->{'username'} }} - {{ $user->{'password'} }}</li>
        @endforeach
        </ul>
        <script>

        </script>
    </body>
</html>