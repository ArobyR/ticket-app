<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Credencial extends Model
{
    use HasFactory;
    protected $table = 'credenciales';
    protected $fillable = [
        'id_usuario_fk',
        'email',
        'password',
    ];

    public function scopeInsertCredencial($query, Request $request = null,$id = null)
    {
        return $query->insert([
            'id_usuario_fk' => $id,
            'email' => 'srjej156@gmail.com'/*$request->input('email')*/,
            'password' =>'12345678' /*$request->input('password')*/,
        ]);
    }

    public function scopeUpdateCredencial($query, Request $request = null)
    {
        return $query->where('id_credencial', '=', $request->input('id'))->update([
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);
    }
}
