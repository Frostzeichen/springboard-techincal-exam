<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB; // Testing purposes only.
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', function (Request $request) {
    $username = $request->input('username');
    $password = $request->input('password');

    $data = DB::select('SELECT username, password FROM users WHERE username = ?', [$username]);

    if ($data[0]->{'password'} == $password) {
        // TODO: Make a session here.
        return redirect('/users');
    } else {
        // TODO: Return invalid login message.
        return redirect('/');
    }
});

Route::post('/register', function (Request $request) {
    // TODO: Regex validation for username and password.
    // Must not contain spaces.
    // Username must be alphanumeric only.
    // Password must be at least 7 characters long.
    $username = $request->input('username');
    $password = $request->input('password');

    DB::insert('INSERT INTO users (username, password) VALUES (?, ?)', [$username, $password]);

    return redirect('/users');
});

Route::get('/users', function () {
    $users = DB::select('SELECT * FROM users');
    $usersList = [];
 
    foreach ($users as $user) {
        array_push($usersList, $user);
    }

    return view('users', ['users' => $usersList]);
});