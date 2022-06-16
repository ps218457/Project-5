<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Oefening;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(OefeningSeeder::class);
        $this->call(PrestatieSeeder::class);
    }
}
