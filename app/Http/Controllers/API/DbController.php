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
        return response()
            ->json(['data' => $asset,]);
    }

    public function addressData(Request $request){
        $address = DB::table('addresses')->get();
        return response()
            ->json(['data' => $address,]);
    }

    public function transactionData(Request $request){
        $transaction = DB::table('transactions')->get();
        return response()
            ->json(['data' => $transaction,]);
    }

    public function userData(Request $request){
        $user = DB::table('users')->get(['id', 'name', 'email', 'created_at', 'updated_at']);
        return response()
            ->json(['data' => $user,]);
    }
}