<?php

namespace App\Http\Controllers;

use App\Models\Oefening;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class OefeningController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
          ])->info('hier laten we een lijst zien met alle oefeningen');

          return Oefening::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een nieuwe oefening toevoegen');

        return Oefening::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function show(Oefening $oefening)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een oefening zien');

        return $oefening;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function edit(Oefening $oefening)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Oefening $oefening)
    {

        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een oefening updaten');

        $oefening->update($request->all());
        return $oefening;  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oefening $oefening)
    {

        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een oefening verwijderen');
        
        $oefening->delete(); 
    }
}
