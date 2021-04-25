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

Route::post('ticket.insert/', [TicketController::class,"insertTicket"]);
Route::get('ticket.list/', [TicketController::class,"listTicket"]);
Route::get('ticket.codigo/', [TicketController::class,"codigoTicket"]);
Route::put('ticket.update/', [TicketController::class,"updateEstadoTicket"]);
Route::get('ticket.atendidos/', [TicketController::class,"ticketAtendidos"]);
Route::get('ticket.ac/', [TicketController::class,'atendidosCancelados']);
Route::delete('ticket.delete/{id}', [TicketController::class,'destroy']);

