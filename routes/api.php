<?php

use App\Http\Controllers\StudentAuthenticationController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// route::middleware('auth:sanctum')->get('/user', function (request $request) {
//     return $request->user();
// });

Route::post('/register', [StudentAuthenticationController::class, 'register']);
Route::post('/login', [StudentAuthenticationController::class, 'login']);


Route::middleware('auth:api')->group(function (){
    Route::resource('/profile', StudentController::class);
    Route::post('/logout', [StudentAuthenticationController::class, 'logout']);
});
