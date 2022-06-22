<?php

namespace App\Http\Controllers;

use App\Models\Prestatie;
use GuzzleHttp\Handler\Proxy;
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
        try {
            if ($request->has('User')) {
                Log::channel('APi')->info('Haal Prestatie op van gebruiker met ID: ' . $request->User);
                $data =  Prestatie::where('user_id', $request->User)->get();
                $message = 'Prestatie van de gebruiker met ID: ' . $request->User . 'opgehaald';
            } else if ($request->has('User') && $request->has('Oefening')) {
                Log::channel('APi')->info('Haal Prestatie op van gebruiker met ID: ' . $request->User . ' en oefening met ID: ' . $request->Oefening);
                $data = Prestatie::where('user_id', $request->User)->where('oefening_id', $request->Oefening)->get();
                $message = 'Prestatie van de gebruiker met ID: ' . $request->User . ' en oefening met ID: ' . $request->Oefening . 'opgehaald';
            }
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,
            ];
            return response()->json($content, 200);
        } catch (\Exception $e) {
            Log::channel('APi')->error('Fout bij het ophalen van Prestatie: ' . $e->getMessage());

            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het ophalen van u Prestatie',

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
            Log::channel('APi')->info('hier laten we een nieuwe prestatie toevoegen');
            $request->validate([
                'Datum' => 'required',
                'Starttijd' => 'required',
                'Eindtijd' => 'required',
                'aantal' => 'required',
                'oefening_id' => 'required'
            ]);

            $data = Prestatie::create([
                'Datum' => $request->Datum,
                'Starttijd' => $request->Starttijd,
                'Eindtijd' => $request->Eindtijd,
                'aantal' => $request->aantal,
                'oefening_id' => $request->oefening_id,
                'User_id' => $request->user()->id
            ]);

            $message = "prestatie is toegevoegd";
            $code = 200;
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message
            ];
            return response()->json($content, $code);
        } catch (\Exception $e) {
            Log::channel('APi')->error('Fout bij het toevoegen van Prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het toevoegen van Prestatie'

            ];
            return response()->json($content, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function show(Prestatie $prestatie)
    {
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
    public function update(Request $request, Prestatie $prestatie, $id)
    {
        try {
            Log::channel('APi')->info('hier laten we een prestatie updaten');
            $prestatie = Prestatie::find($id);
            $prestatie->update($request->all());
            return $prestatie;
            $message = "prestatie is geupdate";
            $content = [
                'success' => true,
                'data'    => $prestatie,
                'message' => $message
            ];
            return response()->json($content, 300);
        } catch (\Exception $e) {
            Log::channel('APi')->error('Fout bij het updaten van Prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het updaten van Prestatie'

            ];
            return response()->json($content, 500);
        }



        $prestatie->update($request->all());
        return $prestatie;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prestatie  $prestatie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Log::channel('APi')->info('hier laten we een prestatie verwijderen');
            $data = Prestatie::where('id', $id)->delete();
            $message = "prestatie is verwijderd";
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message
            ];
            return response()->json($content, 200);
        } catch (\Exception $e) {
            Log::channel('APi')->error('Fout bij het verwijderen van Prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het verwijderen van Prestatie'

            ];
            return response()->json($content, 500);
        }
    }
}
