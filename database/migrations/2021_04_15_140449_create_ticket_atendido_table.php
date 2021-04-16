<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketAtendidoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_atendido', function (Blueprint $table) {
            $table->bigIncrements('id_caja')->unsigned();
            $table->bigInteger('id_ticket_fk')->unsigned();
            $table->bigInteger('id_usuario_fk')->unsigned();
            $table->string('numero_caja',22);
            $table->foreign('id_ticket_fk')->references('id_ticket')->on('ticket');
            $table->foreign('id_usuario_fk')->references('id_usuario')->on('usuario')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('ticket_atendido');
    }
}
