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
            'id_estado_fk' => $request->input('id_estado'),
            'id_rol_fk' => $request->input('id_rol'),
            'nombre_usuario' => $request->input('nombre'),
            'apellido_usuario' => $request->input('apellido'),
            'cedula_usuario' => $request->input('cedula'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function scopeUpdateUser($query, Request $request = null)
    {
        return $query->where('id_usuario', '=', $request->input('id'))->update([
            'nombre_usuario' => $request->input('nombre'),
            'apellido_usuario' => $request->input('apellido'),
            'cedula_usuario' => $request->input('cedula'),
        ]);
    }
    public function scopeGetUser($query)
    {
        return $query->select(
            'usuario.nombre_usuario',
            'usuario.apellido_usuario',
            'usuario.cedula_usuario',
            'rol.rol',
            'estado.estado_usuario',
            'telefono.telefono',
            'telefono.tipo_telefono',
            'direccion.calle',
            'direccion.numero_casa',
            'direccion.pais',
            'direccion.ciudad',
            'direccion.codigo_area',
            'users.email',
            'users.password'
        )
            ->join('rol', 'usuario.id_rol_fk', '=', 'rol.id_rol')
            ->join('estado', 'usuario.id_estado_fk', '=', 'estado.id_estado')
            ->join('telefono', 'usuario.id_usuario', '=', 'telefono.id_usuario_fk')
            ->join('direccion', 'usuario.id_usuario', '=', 'direccion.id_usuario_fk')
            ->join('users', 'usuario.id_usuario', '=', 'users.id_usuario_fk');
    }
    public function scopeGetUserById($query, $id = null)
    {
        return $query->select(
            'usuario.nombre_usuario',
            'usuario.apellido_usuario',
            'usuario.cedula_usuario',
            'rol.rol',
            'estado.estado_usuario',
            'telefono.telefono',
            'telefono.tipo_telefono',
            'direccion.calle',
            'direccion.numero_casa',
            'direccion.pais',
            'direccion.ciudad',
            'direccion.codigo_area',
            'users.email',
            'users.password'
        )
            ->join('rol', 'usuario.id_rol_fk', '=', 'rol.id_rol')
            ->join('estado', 'usuario.id_estado_fk', '=', 'estado.id_estado')
            ->join('telefono', 'usuario.id_usuario', '=', 'telefono.id_usuario_fk')
            ->join('direccion', 'usuario.id_usuario', '=', 'direccion.id_usuario_fk')
            ->join('users', 'usuario.id_usuario', '=', 'users.id_usuario_fk')->where('id_usuario', '=', $id);
    }

    public function scopeGetUpdateUserById($query, $id = null)
    {
        return $query->select(
            'usuario.nombre_usuario',
            'usuario.apellido_usuario',
            'usuario.cedula_usuario',
            'rol.rol',
            'users.email',
            'users.password'
        )
            ->join('rol', 'usuario.id_rol_fk', '=', 'rol.id_rol')
            ->join('users', 'usuario.id_usuario', '=', 'users.id_usuario_fk')->where('id_usuario', '=', $id);
    }
}
