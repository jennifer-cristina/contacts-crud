<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    protected $table = 'tb_contact';
    protected $fillable = ['name', 'birth_date', 'email', 'profession', 'phone', 'cell_phone'];

    use HasFactory;
}
