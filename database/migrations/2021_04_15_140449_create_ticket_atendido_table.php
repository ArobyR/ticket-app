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
            $table->bigInteger('id_caja_fk')->unsigned();
            $table->bigInteger('id_ticket_fk')->unsigned();
            $table->string('verificado',22);
            $table->foreign('id_ticket_fk')->references('id_ticket')->on('ticket')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_caja_fk')->references('id_caja')->on('caja')->onDelete('cascade')->onUpdate('cascade');
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
