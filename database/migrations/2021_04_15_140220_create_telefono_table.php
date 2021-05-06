<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTelefonoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('telefono', function (Blueprint $table) {
            $table->bigIncrements('id_telefono')->unsigned();
		    $table->bigInteger('id_usuario_fk')->unsigned();
		    $table->string('telefono',22);
		    $table->string('tipo_telefono',22);
		    $table->foreign('id_usuario_fk')->references('id_usuario')->on('usuario')->onDelete('cascade')->onUpdate('cascade');
        });

        DB::table('telefono')->insert([
            'id_usuario_fk' => '1',
            'telefono' => '8294106826',
            'tipo_telefono' => 'celular',
        ]);
        DB::table('telefono')->insert([
            'id_usuario_fk'=> '2',
            'telefono'=>'8294106738',
            'tipo_telefono'=>'celular',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('telefono');
    }
}
