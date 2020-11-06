<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/register', 'App\Http\Controllers\RegisterController@index');
Route::get('/register/index', 'App\Http\Controllers\RegisterController@index');
Route::get('/register/list', 'App\Http\Controllers\RegisterController@index');
Route::get('/register/form', 'App\Http\Controllers\RegisterController@index');
Route::get('/register/edit/{num}', 'App\Http\Controllers\RegisterController@index');
