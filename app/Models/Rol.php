<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Rol extends Model
{
    use HasFactory;
    protected $table = 'rol';
    protected $fillable = [
        'rol'
    ];
    public function scopeInsertRol($query, Request $request = null)
    {
        return $query->insertGetId([
            'rol' => 'agente'/*$request->input('rol')*/,
        ]);
    }

    public function scopeUpdateRol($query, Request $request = null)
    {
        return $query->where('id_rol', '=', $request->input('id'))->update([
            'rol' => $request->input('rol'),
        ]);
    }
}
