<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestatie extends Model
{
    use HasFactory;

    protected $table = "prestatie";
    public $timestaps = false;
    protected $fillable = [
        'Datum','Starttijd', 'Eindtijd', 'aantal', 'User_id', 'oefening_id'
    ];
}
