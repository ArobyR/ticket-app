<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Ticket extends Model
{
    use HasFactory;
    protected $table = 'ticket';
    protected $fillable = [
        'prioridad',
        'codigo_ticket',
        'id_categoria_fk',
    ];

    public function scopeInsertTicket($query, Request $request = null)
    {
        return $query->create([
            'id_categoria_fk' => CategoriaTicket::insertCategoriaTicket($request),
            'prioridad' => $request->input('prioridad'),
            'codigo_ticket' => $request->input('codigo_ticket'),
        ]);
    }

    public function scopeUpdateTicket($query, Request $request = null, $id = null)
    {
        return $query->where('id_ticket', '=', $id)->update([
            'id_categoria_fk' => CategoriaTicket::updateCategoriaTicket($request),
            'prioridad' => $request->input('prioridad'),
            'codigo_ticket' => $request->input('codigo_ticket'),
        ]);
    }
}
