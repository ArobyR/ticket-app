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
        'id_caja_fk',
        'id_ticket_fk',
        'verificado',
    ];

    public function scopeInsertAtendidoTicket($query, Request $request = null)
    {
        return $query->insert([
            'id_caja_fk'=>$request->input('id_caja'),
            'id_ticket_fk'=>$request->input('id_ticket'),
            'verificado' => $request->input('verificado'),
        ]);
    }

    public function scopeUpdateAtendidoTicket($query, Request $request = null)
    {
        return $query->where('id_caja', '=', $request->input('id'))->update([
            'numero_caja' => $request->input('numero_caja'),
        ]);
    }
}
