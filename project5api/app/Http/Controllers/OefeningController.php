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
    public function index(Request $request)
    {
        try{
            Log::channel('APi')->info('hier laten we een lijst zien met alle oefeningen');
            $data = Oefening::all();
            $message = 'Lijst met alle oefeningen opgehaald';
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,
            ];
            return response()->json($content, 200);


        }
        catch(\Exception $e){

            Log::channel('APi')->error('Fout bij het ophalen van de oefeningen: ' . $e->getMessage());

            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het ophalen van de oefeningen',

            ];
            return response()->json($content, 500);

        }
      
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
        try {

            Log::channel('APi')->info('Maak een nieuwe Oefening aan');
            $data = Oefening::create($request->all());

            $message = "Oefening is aangemaakt";
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,
            ];
            return response()->json($content, 200);
        }
        catch (\Exception $e) {
            Log::channel('APi')->error('Fout bij het aanmaken van de Oefening: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het aanmaken van de Oefening'
            ];
            return response()->json($content, 500);
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function show(Oefening $oefening)
    {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oefening  $oefening
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oefening $oefening)
    {
//
    }
}
