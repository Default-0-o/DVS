<?php

namespace App\Http\Controllers\Transaction;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    //
    public function deposit(request $request){
        $transaction = Transaction::create([
            'address' => $request->address,
            'amount' => $request->amount,
            'asset' => $request->asset,
            'network' => $request->network,
            'transaction_id' => Hash::make('123456'),
            'status' => 'completed',
            'direction' => 'deposit',
            'user_id' => '1',
        ]);

        // echo auth()->check();
        // $user_id = Auth::id();
        $amount = $request->amount;
        $asset = $request->asset;
        $old_balance = DB::table('wallet')->select('balance')->where('asset', $asset)->first();
        // select("select balance from wallet where user_id='$user_id' AND asset='$asset",);
        // var_dump($user_id);
        // var_dump($old_balance->balance);
        
        $balance = $old_balance->balance + $request->amount;
        $deposit = DB::update("update wallet set balance = '$balance' where asset='$asset'",);

        return response()
            ->json(['data' => "Transaction Completed",]);
    }
  
}
