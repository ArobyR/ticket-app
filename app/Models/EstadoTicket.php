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
    public function scopeTicketActivos()
    {
        return DB::select("select count(estado_ticket) as CantidadActivos
                            from estado_ticket
                            Where estado_ticket = 'Activo';");
    }

    public function scopeAtendidosCancelados()
    {
        return DB::select("select count(estado_ticket) as cantidad, estado_ticket
        from estado_ticket
        group by estado_ticket");
    }
}
