<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Oefening;
use Laravel\Sanctum\Sanctum;
class OefeningenTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_oefeningen_ophalen()
    {
        $response = $this->get('api/oefeningen');

        $response->assertStatus(200);
    }

    public function test_oefeningen_ophalen_Bij_ID()
    {
        $response = $this->get('api/oefeningen?ID=1');

        $response->assertStatus(200);
    }
}
