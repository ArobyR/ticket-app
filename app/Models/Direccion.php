<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Direccion extends Model
{
    use HasFactory;
    protected $table = 'direccion';
    public $timestamps = false;
    protected $fillable = [
        'id_usuario_fk',
        'calle',
        'numero_casa',
        'pais',
        'ciudad',
        'codigo_area',
    ];

    public function scopeInsertDireccion($query, Request $request = null, $id = null)
    {
        return $query->create([
            'id_usuario_fk' => $id,
            'calle' => $request->input('calle'),
            'numero_casa' => $request->input('numero_casa'),
            'pais' => $request->input('pais'),
            'ciudad' => $request->input('ciudad'),
            'codigo_area' => $request->input('codigo_area'),
        ]);
    }

    public function scopeUpdateDireccion($query, Request $request = null, $id = null)
    {
        return $query->where('id_direccion', '=', $id)->update([
            'calle' => $request->input('calle'),
            'numero_casa' => $request->input('numero_casa'),
            'pais' => $request->input('pais'),
            'ciudad' => $request->input('ciudad'),
            'codigo_area' => $request->input('codigo_area'),
        ]);
    }
}
