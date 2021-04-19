<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Estado extends Model
{
    use HasFactory;
    protected $table  = 'estado';
    protected $fillable = [
        'estado_usuario'
    ];

    public function scopeInsertEstado($query, Request $request = null)
    {
        return $query->insertGetId([
            'estado_usuario' => $request->input('estado_usuario'),
        ]);
    }

    public function scopeUpdateEstado($query, Request $request = null)
    {
        return $query->where('id_estado', '=', $request->input('id'))->update([
            'estado_usuario' => $request->input('estado_usuario'),
        ]);
    }
}
