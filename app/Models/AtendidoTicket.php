<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class AtendidoTicket extends Model
{
    use HasFactory;
    protected $table = 'ticket_atendido';
    protected $fillable = [
        'numero_caja',
    ];

    public function scopeInsertAtendidoTicket($query, Request $request = null)
    {
        return $query->insert([
            'numero_caja' => $request->input('numero_caja'),
        ]);
    }

    public function scopeUpdateAtendidoTicket($query, Request $request = null)
    {
        return $query->where('id_caja', '=', $request->input('id'))->update([
            'numero_caja' => $request->input('numero_caja'),
        ]);
    }
}
