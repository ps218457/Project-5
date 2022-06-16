<?php

namespace App\Http\Controllers;

use App\Models\Prestatie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class PrestatieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
          ])->info('hier laten we een lijst zien met alle prestaties');

          return Prestatie::where('user_id', $request->User)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
        ])->info('hier laten we een nieuwe prestatie toevoegen');

        return Prestatie::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function show(Prestatie $prestatie)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een prestatie zien');

        return $prestatie;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function edit(Prestatie $prestatie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prestatie $prestatie)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een prestatie updaten');

        $prestatie->update($request->all());
        return $prestatie; 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prestatie $prestatie)
    {
        Log::build([
            'driver' => 'single',
            'path' => storage_path('logs/api.log'),
        ])->info('hier laten we een prestatie verwijderen');
        
        $prestatie->delete(); 
    }
}
