<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB; // Testing purposes only.
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

Route::post('/login', function () {
    return redirect('/');
});

Route::post('/register', function () {
    return redirect('/');
});

Route::get('/users', function () {
    $users = DB::select('select * from users');
    $usersList = [];
 
    foreach ($users as $user) {
        array_push($usersList, $user);
    }

    return view('users', ['users' => $usersList]);
});