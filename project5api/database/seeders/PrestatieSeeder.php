<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PrestatieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('prestatie')->insert([
            'user_id' => "1",
            'oefening_id' => "1",
            'Datum' => "2004-03-29",
            'Starttijd' => "18:00",
            'Eindtijd' => "20:00",
            'aantal' => "50",
        ]);
    }
}
