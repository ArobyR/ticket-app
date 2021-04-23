<?php

namespace App\Http\Controllers;

use App\Models\CategoriaTicket;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\Json;
use App\Models\EstadoTicket;

class TicketController extends Controller
{
    public function GetCategory(){

        $request = new Request();
        $request->setMethod('POST');
        $request->request->add(['estado_ticket'=>'Atendidos', 'nombre_categoria'=>'muert','prioridad' => 'Media', 'codigo_ticket'=> 'sad']);
        $id = Ticket::insertTicket($request);
        EstadoTicket::insertEstadoTicket($request,$id); 
        $algo = Ticket::select('ticket.codigo_ticket','ticket.created_at')->join('categoria_ticket','ticket.id_categoria_fk','=','categoria_ticket.id_categoria')->get();
        return json_encode($algo); 
    }

    public function ListTicket(){
        return DB::select("Select * 
                                From ticket as t
                                Inner Join categoria_ticket as ct On ct.id_categoria = t.id_categoria_fk
                                order by prioridad; ");

    }
    public function UpdateStateTicket(){
        $request = new Request();
        $request->setMethod('POST');
        $request->request->add(['']);
    }

    public function TicketActivos(){
        return DB::select("select count(estado_ticket) as CantidadActivos
                            from estado_ticket
                            Where estado_ticket = 'Activo';");
    }

    public function AtendidosYCancelados(){
        return DB::select("select count(estado_ticket), estado_ticket 
                            from estado_ticket 
                            group by estado_ticket");
}
