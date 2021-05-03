<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class Credencial extends Model
{
    use HasFactory;
    protected $table = 'credenciales';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_usuario_fk',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function scopeInsertCredencial($query, Request $request = null, $id = null)
    {
        return $query->create([
            'id_usuario_fk' => $id,
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
    }
    public function scopeUpdateCredencial($query, Request $request = null, $id = null)
    {
        return $query->where('id_credencial', '=', $id)->update([
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
    }
}
