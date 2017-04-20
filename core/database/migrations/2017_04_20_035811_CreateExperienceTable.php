<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperienceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('experiences', function (Blueprint $table) {
            $table->increments('id');
            $table->text('title');
            $table->text('workingAt');
            $table->text('thumbnail');
            $table->text('description');
            $table->text('startedAt');
            $table->text('endedAt');
            //
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
