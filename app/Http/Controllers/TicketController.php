<?php

namespace App\Http\Controllers;

use App\Models\Caja;
use App\Models\CategoriaTicket;
use App\Models\Ticket;
use App\Models\EstadoTicket;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    /**
     * Retorna una lista de tickets.
     */
    public function codigoTicket($id)
    {
        return Ticket::codigoTicket($id);
    }

    /**
     * Retorna una lista de tickets.
     */
    public function listTicket()
    {
        return Ticket::listTicket();
    }

    /**
     * Retorna la cantidad de tickets cancelados.
     */
    public function ticketCancelados()
    {
        return EstadoTicket::ticketCancelados();
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
     * Retorna la cantidad de tickets cancelados por mes.
     */
    public function ticketCanceladosPorMes()
    {
        return EstadoTicket::ticketCanceladosPorMes();
    }

    /**
     * Retorna la cantidad de tickets atendidos por mes.
     */
    public function ticketAtendidosPorMes()
    {
        return EstadoTicket::ticketAtendidosPorMes();
    }

    /**
     * Retorna la cantidad de tickets atendidos y cancelados por mes.
     */
    public function atendidosCanceladosPorMes()
    {
        return EstadoTicket::atendidosCanceladosPorMes();
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
     * Inserta el usuario en la caja.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function insertCaja(Request $request)
    {
        $Caja = Caja::insertCaja($request);
        return response()->json($Caja, 201);
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
        $Ticket = Ticket::where('id_ticket', '=', $id)->delete();;
        return response()->json($Ticket, 204);
    }
}
