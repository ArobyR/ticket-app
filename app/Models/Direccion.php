<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Direccion extends Model
{
    use HasFactory;
    protected $table = 'direccion';
    protected $fillable = [
        'id_usuario_fk',
        'calle',
        'numero_casa',
        'pais',
        'ciudad',
        'codigo_area',
    ];

    public function scopeInsertDireccion($query, Request $request = null,$id = null)
    {
        return $query->insert([
            'id_usuario_fk' => $id,
            'calle' => 'Esperanza'/* $request->input('calle')*/,
            'numero_casa' => '# 23'/*$request->input('numero_casa')*/,
            'pais' =>'Republica Dominicana' /*$request->input('pais')*/,
            'ciudad' =>'Santo Domingo'/* $request->input('ciudad')*/,
            'codigo_area' => '10404'/*$request->input('codigo_area')*/,
        ]);
    }

    public function scopeUpdateDireccion($query, Request $request = null)
    {
        return $query->where('id_direccion', '=', $request->input('id'))->update([
            'calle' => $request->input('calle'),
            'numero_casa' => $request->input('numero_casa'),
            'pais' => $request->input('pais'),
            'ciudad' => $request->input('ciudad'),
            'codigo_area' => $request->input('codigo_area'),
        ]);
    }
}
