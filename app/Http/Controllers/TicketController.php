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
     * Inserta y retorna el codigo y la fecha del ticket.
     */
    public function InsertTicket(Request $request)
    {
        $id = Ticket::insertTicket($request);
        EstadoTicket::insertEstadoTicket($request, $id);
        return [Ticket::select('ticket.codigo_ticket', 'ticket.created_at')->get(),response()->json(null, 200)];
    }

    /**
     * Retorna una lista de tickets.
     */
    public function ListTicket()
    {
        return Ticket::listTicket();
    }

    /**
     * Retorna la cantidad de tickets atendidos.
     */
    public function TicketAtendidos()
    {
        return EstadoTicket::ticketAtendidos();
    }

    /**
     * Retorna la cantidad de tickets atendidos y cancelados.
     */
    public function AtendidosCancelados()
    {
        return EstadoTicket::atendidosCancelados();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateEstadoTicket(Request $request, $id)
    {
        EstadoTicket::updateEstadoTicket($request, $id);
        return response()->json(null, 201);
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
