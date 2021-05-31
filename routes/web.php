<?php

use App\Http\Controllers\UsuarioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/user.managers', function () {
    return Inertia::render('Managers');
})->name('user.managers');

Route::get('/user.admins', function () {
    return Inertia::render('Admins');
})->name('user.admins');

Route::get('/user.agents', function () {
    return Inertia::render('Agents');
})->name('user.agents');

Route::get('/user.list', function () {
    return Inertia::render('UserList');
})->name('user.list');

Route::get('/user.guest', function () {
    return Inertia::render('Guest');
})->name('user.guest');

Route::get('/prueba', function () {
    return view('index');
})->name('user.guest');


require __DIR__.'/auth.php';

