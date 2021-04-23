<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Telefono extends Model
{
    use HasFactory;

    protected $table = 'telefono';
    public $timestamps = false;
    protected $fillable = [
        'id_usuario_fk',
        'telefono',
        'tipo_telefono',
    ];

    public function scopeInsertTelefono($query, Request $request = null, $id = null)
    {
        return $query->create([
            'id_usuario_fk' => $id,
            'telefono' => $request->input('telefono'),
            'tipo_telefono' => $request->input('tipo_telefono'),
        ]);
    }
  
    public function scopeUpdateTelefono($query, Request $request = null, $id = null)
    {
        return $query->where('id_telefono', '=', $id)->update([
            'telefono' => $request->input('telefono'),
            'tipo_telefono' => $request->input('tipo_telefono'),
        ]);
    }
}
