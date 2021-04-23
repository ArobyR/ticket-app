<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use App\Models\User;
use App\Models\Direccion;
use Illuminate\Support\Facades\DB;
use App\Models\Credencial;
use App\Models\Usuario;
use App\Models\Estado;

class RolController extends Controller
{
    public function GetRol(){
        /*
        $request = new Request();
        $request->setMethod('Post');
        $request->request->add(['rol'=> 'agente','nombre_usuario' => 'walase',
                                  'apellido_usuario'=>'waly', 'cedula_usuario'=> '40212359775',
                                  'calle'=> 'principal','numero_casa'=>'01', 'pais'=>'RD',
                                  'ciudad' =>'Sant.Domin.Norte','codigo_area'=>'41025',
                                  'estado_usuario'=>'activo']);

        Rol::insertRol($request);
        Usuario::insertUser($request);
        Direccion::insert($request);
        Estado::insert($request);*/

        return DB::select("Select * 
                                From ticket as t
                                Inner Join categoria_ticket as ct On ct.id_categoria = t.id_categoria_fk
                                order by prioridad; ");
    }

    public function ListTicket(){

    }
}
