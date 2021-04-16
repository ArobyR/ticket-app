<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
            'id_estado_fk' => Estado::insertEstado(),
            'id_rol_fk' => Rol::insertRol(),
            'nombre_usuario' => $request->input('nombre'),
            'apellido_usuario' => $request->input('apellido'),
            'cedula_usuario' => $request->input('cedula'),
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
}
