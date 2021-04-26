<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCategoriaTicketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria_ticket', function (Blueprint $table) {
            $table->bigIncrements('id_categoria')->unsigned();
            $table->string('nombre_categoria');
        });

        DB::table('categoria_ticket')->insert(['nombre_categoria' => 'Discapacitado/a']);
        DB::table('categoria_ticket')->insert(['nombre_categoria' => 'Normal']);
        DB::table('categoria_ticket')->insert(['nombre_categoria' => 'Embarazada']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categoria_ticket');
    }
}
