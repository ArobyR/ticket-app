<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDireccionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direccion', function (Blueprint $table) {
            $table->bigIncrements('id_direccion')->unsigned();
		    $table->bigInteger('id_usuario_fk')->unsigned();
            $table->string('calle',30);
            $table->string('numero_casa',11);
            $table->string('pais',30);
            $table->string('ciudad',30);
            $table->string('codigo_area',30);
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
        Schema::dropIfExists('direccion');
    }
}
