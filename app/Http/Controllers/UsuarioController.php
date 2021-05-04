<?php

namespace App\Http\Controllers;

use App\Models\Credencial;
use App\Models\Direccion;
use App\Models\Estado;
use App\Models\Rol;
use App\Models\Telefono;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return  'hola';
        return Usuario::getUser()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = Usuario::insertUser($request);
        Direccion::insertDireccion($request, $id);
        Credencial::insertCredencial($request, $id);
        Telefono::insertTelefono($request, $id);

        // return '-- hello world';
        return response()->json(['response'=>'success','code'=>201], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Usuario::getUserById($id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Usuario::getUserById($id)->get();
        Usuario::updateUser($request, $id);
        Estado::updateEstado($request, $id);
        Rol::updateRol($request, $id);
        Telefono::updateTelefono($request, $id);
        Credencial::updateCredencial($request, $id);
        Direccion::updateDireccion($request, $id);
        return response()->json(null, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $id)
    {
        Usuario::where('id_usuario', $id->input('id'))->delete();

        // $response['message'] = 'usuario eliminado';
        // $response['success'] = true;

        // return $response;
        return response()->json(['response'=>'success','code'=>201], 201);

    }
}
