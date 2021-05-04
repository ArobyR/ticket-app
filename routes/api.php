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
Route::post('users.insert/', [UsuarioController::class,'store']);
Route::put('users.update/{id}', [UsuarioController::class,'update']);
Route::post('users.delete/{id}', [UsuarioController::class,'destroy']);

Route::get('ticket.list/', [TicketController::class,"listTicket"]);
Route::get('ticket.codigo/', [TicketController::class,"codigoTicket"]);
Route::get('ticket.atendidos/', [TicketController::class,"ticketAtendidos"]);
Route::get('ticket.atendidos-cancelados/', [TicketController::class,'atendidosCancelados']);
Route::post('ticket.insert/', [TicketController::class,"insertTicket"]);
Route::put('ticket.update-estado/{id}', [TicketController::class,"updateEstadoTicket"]);
Route::delete('ticket.delete/{id}', [TicketController::class,'destroy']);
Route::post('caja.insert/', [TicketController::class,"insertCaja"]);