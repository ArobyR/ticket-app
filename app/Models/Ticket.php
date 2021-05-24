<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $initialletter = '';
        $i = $request->input('id_categoria');
        if ($i == 1) {
            $initialletter = 'E-';
        }
        
        else if ($i == 2) {
            $initialletter = 'D-';
        }

        else if ($i == 3) {
            $initialletter = 'N-';
        }   
        $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return $query->insertGetId([
            'id_categoria_fk' => $request->input('id_categoria'),
            'codigo_ticket' => $initialletter . substr(str_shuffle($chars), -strlen(str_shuffle($chars)), 5),
            'created_at' => now(),
            'updated_at' => now(),
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

    public function scopeListTicket($query)
    {
        return $query->join('categoria_ticket', 'id_categoria_fk', '=', 'id_categoria')->orderBy('prioridad')->get();
    }

    public function scopeCodigoTicket($query, $id = null)
    {
        return $query->select('ticket.codigo_ticket', 'ticket.created_at')->where('id_ticket', '=', $id)->get();
    }
}
