<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCredencialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credenciales', function (Blueprint $table) {
            $table->bigIncrements('id_credencial')->unsigned();
            $table->bigInteger('id_usuario_fk')->unsigned();
            $table->string('email', 50)->unique();
            $table->string('password', 22);
            $table->timestamps();
            $table->foreign('id_usuario_fk')->references('id_usuario')->on('usuario')->onDelete('cascade')->onUpdate('cascade');
        });
        DB::table('credenciales')->insert([
            'id_usuario_fk' => '1',
            'email' => 'srjej156@gmail.com',
            'password' => '12345678',            
            'created_at' => now(),
            'updated_at' => now(),


        ]);
        DB::table('credenciales')->insert([
            'id_usuario_fk' => '2',
            'email' => 'aroby@gmail.com',
            'password' => '12345678',
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
        Schema::dropIfExists('credenciales');
    }
}
