<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoriaTicket;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use PHPUnit\Util\Json;

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
        $request->request->add([ 'nombre_categoria'=>'muert','prioridad' => 'Media', 'codigo_ticket'=> 'sad']);
        

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

        /*
        for($i = 0;$i<sizeof();$i++){
            


        }
        */

    }

}
