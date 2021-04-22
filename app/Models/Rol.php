<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Rol extends Model
{
    use HasFactory;
    protected $table = 'rol';
    public $timestamps = false;
    protected $fillable = [
        'rol'
    ];
    public function scopeInsertRol($query, Request $request = null)
    {
        return $query->insertGetId([
            'rol' => $request->input('rol'),
        ]);
    }

    public function scopeUpdateRol($query, Request $request = null, $id = null)
    {
        return $query->where('id_rol', '=', $id)->update([
            'rol' => $request->input('rol'),
        ]);
    }
}
