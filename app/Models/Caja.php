<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Caja extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_usuario_fk',
        'numero_caja',
        'status',
    ];

    public function scopeInsertCaja($query, Request $request = null)
    {
        return $query->insert([
            'id_usuario_fk' => $request->input('id'),
            'numero_caja' => $request->input('numero_caja'),
            'status' => $request->input('status'),
        ]);
    }

    public function scopeUpdateCaja($query, Request $request = null)
    {
        return $query->where('id_caja', '=', $request->input('id'))->update([
            'id_usuario_fk' => $request->input('id_usuario'),
            'numero_caja' => $request->input('numero_caja'),
            'status' => $request->input('status'),
        ]);
    }
}
