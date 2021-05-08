<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EstadoTicket extends Model
{
    use HasFactory;
    protected $table = 'estado_ticket';
    public $timestamps = false;
    protected $fillable = [
        'estado_ticket',
    ];

    public function scopeInsertEstadoTicket($query, Request $request = null, $id = null)
    {
        return $query->insertGetId([
            'id_ticket_fk' => $id,
            'estado_ticket' => $request->input('estado_ticket'),
        ]);
    }

    public function scopeUpdateEstadoTicket($query, Request $request = null, $id = null)
    {
        return $query->where('id_estado', '=', $id)->update([
            'estado_ticket' => $request->input('estado_ticket'),
        ]);
    }
    public function scopeTicketAtendidos($query)
    {
        return $query->select($query->raw('count(*) as cantidad, estado_ticket'))
        ->where('estado_ticket', '=', 'Atendido')
        ->groupBy('estado_ticket')->get();
    }

    public function scopeTicketCancelados($query)
    {
        return $query->select($query->raw('count(*) as cantidad, estado_ticket'))
        ->where('estado_ticket', '=', 'Cancelados')
        ->groupBy('estado_ticket')->get();
    }

    public function scopeAtendidosCancelados($query)
    {
        return $query->select($query->raw('count(*) as cantidad , estado_ticket'))
        ->where('estado_ticket', '=', 'Atendido')
        ->orWhere('estado_ticket', '=', 'Cancelado')
        ->groupBy('estado_ticket')->get();
    }

    public function scopeTicketAtendidosPorMes($query)
    {
        return $query->select($query->raw('count(*) as cantidad, estado_ticket, MONTH(created_at) as mes '))
        ->where('estado_ticket', '=', 'Atendido')
        ->groupBy('estado_ticket,mes')->get();
    }

    public function scopeTicketCanceladosPorMes($query)
    {
        return $query->select($query->raw('count(*) as cantidad, estado_ticket, MONTH(created_at) as mes'))
        ->where('estado_ticket', '=', 'Cancelados')
        ->groupBy('estado_ticket, mes')->get();
    }

    public function scopeAtendidosCanceladosPorMes($query)
    {
        return $query->select($query->raw('count(*) as cantidad , estado_ticket, MONTH(created_at) as mes'))
            ->where('estado_ticket', '=', 'Atendido')
            ->orWhere('estado_ticket', '=', 'Cancelado')
            ->groupBy('estado_ticket, mes')->get();
    }
}
