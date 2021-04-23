<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoriaTicket;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\Json;
use App\Models\EstadoTicket;

class TicketController extends Controller
{
    public $itemsMedia = [];
    public $itemsAlta = [];
    public $itemsNormal = [];
    //public $size = Ticket::select();
    public $listTicket = [];
    //$listTicket->setSize();
    public function GetCategory(){

        $request = new Request();
        $request->setMethod('POST');
        $request->request->add(['estado_ticket'=>'Activo', 'nombre_categoria'=>'muert','prioridad' => 'Media', 'codigo_ticket'=> 'sad']);
        

        /*foreach ($request->input('prioridad') as $key => $value) {
            if (empty($value) || $value == "") {
                if($value !== '0')
                //$request->request->remove($key);
            }
        }*/
        //return $request->validate(['prioridad' => 'Alta']);
       /* if($request->validate(['prioridad' => 'Alta'])){
                
        }*/   
            
        $id = Ticket::insertTicket($request);
        //$request->request->add(['id_ticket_fk'=>$id]);
        EstadoTicket::insertEstadoTicket($request,$id); 
                

        $algo = Ticket::select('ticket.codigo_ticket','ticket.created_at')->join('categoria_ticket','ticket.id_categoria_fk','=','categoria_ticket.id_categoria')->get();
        /*
        if($request->input('prioridad') == 'Alta'){
            array_push($itemsAlta,$id);
        }
        if($request->input('prioridad') == 'Media'){
            array_push($itemsMedia,$id);
        }
        if($request->input('prioridad') == 'Normal'){
            array_push($itemsNormal,$id);
        }
        */
        return json_encode($algo); 
        
        //Media, Alta, Normal  
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

}
