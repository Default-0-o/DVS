<?php

namespace App\Http\Controllers\Transaction;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    //
    public function deposit(request $request){
        $transaction = Transaction::create([
            'address' => $request->address,
            'amount' => $request->amount,
            'asset' => $request->asset,
            'network' => $request->network,
        ]);


        return response()
            ->json(['data' => "Sor Sihdir Riza",]);
    }

    
}
