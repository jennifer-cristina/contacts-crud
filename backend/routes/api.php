<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/contacts', [ContactController::class, 'index']);

Route::get('/contacts/{id}', [ContactController::class, 'show']);

Route::post('/contacts', [ContactController::class, 'store']);

Route::put('/contacts/{id}', [ContactController::class, 'update']);

Route::delete('/contacts/{id}', [ContactController::class, 'delete']);
