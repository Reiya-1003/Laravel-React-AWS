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

Route::group(['middleware' => 'api'], function(){
    Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
    Route::post('posts/create', 'App\Http\Controllers\Api\PostController@create');
    Route::post('post/edit', 'APP\Http\Controllers\Api\PostController@edit');
    Route::post('update', 'APP\Http\Controllers\Api\PostController@update');
});
