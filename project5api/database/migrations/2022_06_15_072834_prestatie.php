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
            $table->Integer('User_id');
            $table->Integer('oefening_id');
            $table->date('Datum');
            $table->time('Starttijd');
            $table->time('Eindtijd');
            $table->timestamps();
            $table->Integer('aantal');
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
