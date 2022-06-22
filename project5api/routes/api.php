<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\OefeningController;
use App\Http\Controllers\PrestatieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('/oefeningen', OefeningController::class);

Route::post('/login', [AuthenticationController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('profile', function (Request $request) {
        auth()->user();
    });
    Route::delete('prestaties/delete/{id}', [PrestatieController::class, 'destroy']);
    Route::apiResource('/prestaties', PrestatieController::class);
    Route::post('/logout', [AuthenticationController::class, 'logout']);
    Route::put('/prestaties/update/{id}',[PrestatieController::class, 'update']);
    Route::post('/prestaties/store', [PrestatieController::class,'store']);
});

