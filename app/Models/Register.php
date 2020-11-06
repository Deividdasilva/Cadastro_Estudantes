<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $table = "cadastro";

    protected $fillable = [
        'name_lastname',
        'date_birth',
        'series',
        'cep',
        'rua',
        'numero',
        'complemento',
        'bairro',
        'city',
        'estado',
        'name_mother',
        'cpf_mother',
        'date_payment'
    ];
}
