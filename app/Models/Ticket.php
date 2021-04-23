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
        $category = $request->input('nombre_categoria');
        $initialletter = substr($category,-strlen($category),1);
        $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return $query->insertGetId([
            'id_categoria_fk' => CategoriaTicket::insertCategoriaTicket($request),
            'prioridad' => $request->input('prioridad'),
            'codigo_ticket' => $initialletter .substr(str_shuffle($chars),-strlen(str_shuffle($chars)),5) ,
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
        return DB::select('Select * From ticket as t Inner Join categoria_ticket as ct On ct.id_categoria = t.id_categoria_fk order by prioridad;');
    }
}
