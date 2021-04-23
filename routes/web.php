<?php

use App\Http\Controllers\UsuarioController;
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
    return view('index');
});

Route::get('users/', [UsuarioController::class,'index']);
Route::get('users.show/{id}', [UsuarioController::class,'show']);
Route::post('users.store/', [UsuarioController::class,'store']);
Route::put('users.update/{id}', [UsuarioController::class,'update']);
Route::delete('users.delete/{id}', [UsuarioController::class,'destroy']);
