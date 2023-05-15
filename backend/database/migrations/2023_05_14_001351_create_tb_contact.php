<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbContact extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_contact', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->nullable(false);
            $table->date('birth_date')->nullable(false);
            $table->string('email', 100)->nullable(false);
            $table->string('profession', 50)->nullable(false);
            $table->string('phone', 15)->nullable(false);
            $table->string('cell_phone', 15)->nullable(false);
            $table->boolean('has_whatsapp')->default(false);
            $table->boolean('sms_notification')->default(false);
            $table->boolean('email_notification')->default(false);
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
        Schema::dropIfExists('tb_contact');
    }
}
