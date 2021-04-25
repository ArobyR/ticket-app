<?php

use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\RolController;
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

Route::get('users/', [UsuarioController::class,'index']);
Route::get('users.show/{id}', [UsuarioController::class,'show']);
Route::post('users.store/', [UsuarioController::class,'store']);
Route::put('users.update/{id}', [UsuarioController::class,'update']);
Route::delete('users.delete/{id}', [UsuarioController::class,'destroy']);

Route::get('ticket.insert/', [TicketController::class,"InsertTicket"]);
Route::get('ticket.list/', [TicketController::class,"ListTicket"]);
Route::put('ticket.update/', [TicketController::class,"UpdateEstadoTicket"]);
Route::get('ticket.atendidos/', [TicketController::class,"TicketAtendidos"]);
Route::get('ticket.ac/', [TicketController::class,'AtendidosCancelados']);

