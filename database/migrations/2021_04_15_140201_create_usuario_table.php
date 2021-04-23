<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->bigIncrements('id_usuario')->unsigned();
            $table->bigInteger('id_estado_fk')->unsigned();
            $table->bigInteger('id_rol_fk')->unsigned();
            $table->string('nombre_usuario',22);
            $table->string('apellido_usuario',22);
            $table->string('cedula_usuario',22);
            $table->foreign('id_estado_fk')->references('id_estado')->on('estado')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_rol_fk')->references('id_rol')->on('rol')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}
