<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class CategoriaTicket extends Model
{
    use HasFactory;
    protected $table  = 'categoria_ticket';
    protected $fillable = [
        'nombre_categoria',
    ];

    public function scopeInsertCategoriaTicket($query, Request $request = null)
    {
        return $query->insertGetId([
            'nombre_categoria' => $request->input('nombre_categoria'),
        ]);
    }

    public function scopeUpdateCategoriaTicket($query, Request $request = null)
    {
        return $query->where('id_categoria', '=', $request->input('id'))->update([
            'nombre_categoria' => $request->input('nombre_categoria'),
        ]);
    }

}
