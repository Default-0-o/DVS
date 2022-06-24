<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class DbController extends Controller{

    public function networkData(Request $request){
        $network = DB::table('Networks')->get();
        $query = "SELECT * FROM `Networks` WHERE 1";
        return response()
            ->json(['data' => $network, 'query' => $query,]);
    }

    public function assetData(Request $request){
        $asset = DB::table('assets')->get();
        $query = "SELECT * FROM `assets` WHERE 1";
        return response()
            ->json(['data' => $asset, 'query' => $query,]);
    }

    public function addressData(Request $request){
        $address = DB::table('addresses')->get();
        $query = "SELECT * FROM `addresses` WHERE 1";
        return response()
            ->json(['data' => $address, 'query' => $query,]);
    }

    public function transactionData(Request $request){
        $transaction = DB::table('transactions')->select('id', 'user_id', 'network', 'transaction_id', 'address', 'direction', 'status', 'asset', 'amount', 'time_stamp', 'updated_at', 'created_at')->get();
        $query = "SELECT * FROM `transactions` WHERE 1";
        return response()
            ->json(['data' => $transaction, 'query' => $query,]);
    }

    public function userData(Request $request){
        $user = DB::table('users')->select('id', 'name', 'email', 'created_at', 'updated_at')->get();
        $query = "SELECT * FROM `users` WHERE 1";
        return response()
            ->json(['data' => $user, 'query' => $query,]);
    }
    public function walletData(Request $request){
        $wallet = DB::table('wallet')->where('balance', '!=', 0)->get();
        $query = "SELECT * FROM `wallet` WHERE 1";
        return response()
            ->json(['data' => $wallet, 'query' => $query,]);
    }
}