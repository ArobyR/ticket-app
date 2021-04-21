<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $fillable = [
        'id_estado_fk',
        'id_rol_fk',
        'nombre_usuario',
        'apellido_usuario',
        'cedula_usuario',
    ];

    public function scopeInsertUser($query, Request $request = null)
    {
        return $query->insertGetId([
            'id_estado_fk' => Estado::insertEstado($request),
            'id_rol_fk' => Rol::insertRol($request),
            'nombre_usuario' => $request->input('nombre'),
            'apellido_usuario' => $request->input('apellido'),
            'cedula_usuario' => $request->input('cedula'),
        ]);
    }

    public function scopeUpdateUser($query, Request $request = null)
    {   /*
        return $query->where('id_usuario', '=', $request->input('id'))->update([
            'nombre_usuario' => $request->input('nombre'),
            'apellido_usuario' => $request->input('apellido'),
            'cedula_usuario' => $request->input('cedula'),

        ]);
        */

        return $query->where('usuario.id_usuario', '=', $request->input('id'))->update([
            'usuario.nombre_usuario' => $request->input('nombre'),
            'usuario.apellido_usuario' => $request->input('apellido'),
            'usuario.cedula_usuario' => $request->input('cedula'),
            'rol.rol' => $request->input('rol'),
            'estado.estado_usuario' => $request->input('estado_usuario'),
            'telefono.telefono' => $request->input('telefono'),
            'telefono.tipo_telefono' => $request->input('tipo_telefono'),
            'direccion.calle' => $request->input('calle'),
            'direccion.numero_casa' => $request->input('numero_casa'),
            'direccion.pais' => $request->input('pais'),
            'direccion.ciudad' => $request->input('ciudad'),
            'direccion.codigo_area' => $request->input('codigo_area'),
            'credenciales.email' => $request->input('email'),
            'credenciales.password' => $request->input('password'),
        ])->join('rol', 'usuario.id_rol_fk', '=', 'rol.id_rol')
            ->join('estado', 'usuario.id_estado_fk', '=', 'estado.id_estado')
            ->join('telefono', 'usuario.id_usuario', '=', 'telefono.id_usuario_fk')
            ->join('direccion', 'usuario.id_usuario', '=', 'direccion.id_usuario_fk')
            ->join('credenciales', 'usuario.id_usuario', '=', 'credenciales.id_usuario_fk');;
    }
}
