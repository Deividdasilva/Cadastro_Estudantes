<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadastroTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadastro', function (Blueprint $table) {
            $table->id('id');
            $table->string('name_lastname', 100);
            $table->date('date_birth');
            $table->string('series');
            $table->string('cep');
            $table->string('rua', 120);
            $table->integer('numero');
            $table->string('complemento', 50);
            $table->string('bairro', 100);
            $table->string('city');
            $table->string('estado');
            $table->string('name_mother', 100);
            $table->string('cpf_mother');
            $table->date('date_payment');
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
        Schema::dropIfExists('cadastro');
    }
}
