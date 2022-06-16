<?php

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

//API route for register new user
Route::post('/register', [App\Http\Controllers\API\AuthController::class, 'register']);
//API route for login user
Route::post('/login', [App\Http\Controllers\API\AuthController::class, 'login']);

//Protecting Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });

    // API route for logout user
    Route::post('/logout', [App\Http\Controllers\API\AuthController::class, 'logout']);
});

    // API route for network table data
    Route::get('/networkData', [App\Http\Controllers\API\DbController::class, 'networkData']);

    // API route for asset table data
    Route::get('/assetData', [App\Http\Controllers\API\DbController::class, 'assetData']);

    // API route for address table data
    Route::get('/addressData', [App\Http\Controllers\API\DbController::class, 'addressData']);

    // API route for transaction table data
    Route::get('/transactionData', [App\Http\Controllers\API\DbController::class, 'transactionData']);

    // API route for user table data
    Route::get('/userData', [App\Http\Controllers\API\DbController::class, 'userData']);
    
    //API route for deposit transaction
    Route::post('/deposit', [App\Http\Controllers\Transaction\TransactionController::class, 'deposit']);

    //API route for wallet table data
    Route::get('/walletData', [App\Http\Controllers\API\DbController::class, 'walletData']);