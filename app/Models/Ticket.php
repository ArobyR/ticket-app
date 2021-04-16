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
    ];

    public function scopeInsertTicket($query, Request $request = null)
    {
        return $query->insert([
            'prioridad' => $request->input('prioridad'),
            'codigo_ticket' => $request->input('codigo_ticket'),
        ]);
    }

    public function scopeUpdateTicket($query, Request $request = null)
    {
        return $query->where('id_ticket', '=', $request->input('id'))->update([
            'prioridad' => $request->input('prioridad'),
            'codigo_ticket' => $request->input('codigo_ticket'),
        ]);
    }
}
