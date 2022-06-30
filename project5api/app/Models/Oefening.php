<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oefening extends Model
{
    use HasFactory;

    protected $table = "oefening";
    public $timestaps = false;
    protected $fillable = [
        'naam','beschrijving', 'foto',
    ];
}
