<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateEstadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado', function (Blueprint $table) {
            $table->bigIncrements('id_estado')->unsigned();
            $table->string('estado_usuario',22);
        });
        DB::table('estado')->insert([
            'estado_usuario' => 'activo',
        ]);
        DB::table('estado')->insert([
            'estado_usuario' => 'inactivo',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estado');
    }
}
