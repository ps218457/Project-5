<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
class PrestatiesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_prestaties_ophalen_Bij_User()
    {
        Sanctum::actingAs(User::factory()->create(),['*']);
        $response = $this->get('api/prestaties?User=1');

        $response->assertStatus(200);

    }

    public function test_prestaties_ophalen_Bij_Oefening()
    {
        Sanctum::actingAs(User::factory()->create(),['*']);
        $response = $this->get('api/prestaties?User=1&Oefening=4');

        $response->assertStatus(200);

    }
}
