<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol', function (Blueprint $table) {
            $table->bigIncrements('id_rol')->unsigned();
            $table->string('rol', 22);
        });

        DB::table('rol')->insert([
            'rol' => 'Admin',
        ]);
        DB::table('rol')->insert([
            'rol' => 'Agente',
        ]);
        DB::table('rol')->insert([
            'rol' => 'Encargado',
        ]);
        DB::table('rol')->insert([
            'rol' => 'Usuario'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rol');
    }
}
