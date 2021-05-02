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

    public function GetCategory(Request $request)
    {
        $id = Ticket::insertTicket($request);
        EstadoTicket::insertEstadoTicket($request, $id);
        return Ticket::select('ticket.codigo_ticket','ticket.created_at')->post();
    }

    public function ListTicket()
    {
        return Ticket::listTicket();
    }

    public function UpdateStateTicket()
    {
    }

    public function TicketActivos()
    {
        return EstadoTicket::ticketActivos();
    }

    public function AtendidosCancelados()
    {
        return EstadoTicket::atendidosCancelados();
    }
}
