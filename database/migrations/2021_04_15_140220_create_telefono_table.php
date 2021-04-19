<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
