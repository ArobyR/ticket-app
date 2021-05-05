<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadoTicketTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado_ticket', function (Blueprint $table) {
            $table->bigIncrements('id_estado')->unsigned();
            $table->bigInteger('id_ticket_fk')->unsigned();
            $table->string('estado_ticket',22);
            $table->foreign('id_ticket_fk')->references('id_ticket')->on('ticket')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('estado_ticket');
    }
}
