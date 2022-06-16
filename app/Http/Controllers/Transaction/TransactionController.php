<?php

namespace App\Http\Controllers\Transaction;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;

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

        $user_id = Auth::id();
        $amount = $request->amount;
        $asset = $request->asset;
        $old_balance = DB::select("select balance from wallet where user_id='$user_id' AND asset='$asset",);
        $balance = $old_balance + $amount;
        $deposit = DB::update("update wallet set balance = '$balance' where user_id='$user_id' AND asset='$asset'",);

        return response()
            ->json(['data' => "Transaction Completed",]);
    }
  
}
