<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoriaTicket;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\Json;

class TicketController extends Controller
{
    public function GetCategory(){

        $request = new Request();
        $request->setMethod('POST');
        $request->request->add([ 'nombre_categoria'=>'muert','prioridad' => 'Embarazada', 'codigo_ticket'=> 'sad']);
        Ticket::insertTicket($request);
        $algo = Ticket::select('categoria_ticket.nombre_categoria','ticket.codigo_ticket','ticket.created_at')->join('categoria_ticket','ticket.id_categoria_fk','=','categoria_ticket.id_categoria')->get();
        return json_encode($algo);
        //return DB::select("CALL FinishToBack(?,?)",[$request->input('nombre_categoria'),$id]);
        //return DB::select("Call InsertCategoryTicket(?,?)",[$request,$id]);
        //return intval($id);
        

    }

}
