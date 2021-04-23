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
    public function GetCategory()
    {


        /*
        $request = new Request();
        $request->setMethod('POST');
        $request->request->add(['estado_ticket' => 'Atendidos', 'nombre_categoria' => 'muert', 'prioridad' => 'Media', 'codigo_ticket' => 'sad']);
        $id = Ticket::insertTicket($request);
        EstadoTicket::insertEstadoTicket($request, $id);
        $algo = Ticket::select('ticket.codigo_ticket', 'ticket.created_at')->join('categoria_ticket', 'ticket.id_categoria_fk', '=', 'categoria_ticket.id_categoria')->get();
        return json_encode($algo);*/
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
