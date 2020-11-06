<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register/create', 'App\Http\Controllers\API\RegisterController@create');

Route::get('/register/list', 'App\Http\Controllers\API\RegisterController@list');

Route::get('/register/get/{id}', 'App\Http\Controllers\API\RegisterController@get');

Route::put('/register/update/{id}', 'App\Http\Controllers\API\RegisterController@update');

Route::delete('/register/delete/{id}', 'App\Http\Controllers\API\RegisterController@delete');




