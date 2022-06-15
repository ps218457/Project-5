<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Prestatie extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestatie', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('User_id');
            $table->bigInteger('oefening_id');
            $table->date('Datum');
            $table->date('Starttijd');
            $table->date('Eindtijd');
            $table->timestamps();
            $table->bigInteger('aantal');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
