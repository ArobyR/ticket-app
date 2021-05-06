<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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

        DB::table('usuario')->insert([
            'id_estado_fk' =>'1',
            'id_rol_fk' =>'1',
            'nombre_usuario'=>'John' ,
            'apellido_usuario' =>'Javier',
            'cedula_usuario' =>'402300646269',
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        DB::table('usuario')->insert([
            'id_estado_fk' =>'1',
            'id_rol_fk' =>'1',
            'nombre_usuario'=>'Aroby' ,
            'apellido_usuario' =>'Rosario',
            'cedula_usuario' =>'001300642269',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
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
