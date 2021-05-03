<?php

namespace App\Http\Controllers;

use App\Models\Credencial;
use App\Models\Direccion;
use App\Models\Estado;
use App\Models\Rol;
use App\Models\Telefono;
use App\Models\User;
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
        // Credencial::insertCredencial($request, $id);
        Telefono::insertTelefono($request, $id);
        return response()->json(null, '201');
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
     */
    public function edit($id)
    {
        Usuario::getUpdateUserById($id)->get();
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
        Usuario::getUpdateUserById($id)->get();
        Usuario::updateUser($request, $id);
        Rol::updateRol($request, $id);
        User::updateCredencial($request, $id);
        return response()->json(null, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Usuario::where('id_usuario','=',$id)->delete();
    }
}
