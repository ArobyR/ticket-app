<?php

namespace App\Http\Controllers;

use App\Models\CategoriaTicket;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\Json;
use App\Models\EstadoTicket;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    /**
     * Retorna una lista de tickets.
     */
    public function codigoTicket()
    {
        return Ticket::codigoTicket();
    }

    /**
     * Retorna una lista de tickets.
     */
    public function listTicket()
    {
        return Ticket::listTicket();
    }

    /**
     * Retorna la cantidad de tickets atendidos.
     */
    public function ticketAtendidos()
    {
        return EstadoTicket::ticketAtendidos();
    }

    /**
     * Retorna la cantidad de tickets atendidos y cancelados.
     */
    public function atendidosCancelados()
    {
        return EstadoTicket::atendidosCancelados();
    }

    /**
     * Inserta el ticket.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function insertTicket(Request $request)
    {
        $Ticket = Ticket::insertTicket($request);
        EstadoTicket::insertEstadoTicket($request, $Ticket);
        return response()->json($Ticket, 201);
    }

    /**
     * Actualiza el estado del ticket.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateEstadoTicket(Request $request, $id)
    {
        EstadoTicket::findOrFail($id);
        $EstadoTicket = EstadoTicket::updateEstadoTicket($request, $id);
        return response()->json($EstadoTicket, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Ticket::destroy($id);
        return response()->json(null, 204);
    }
}
