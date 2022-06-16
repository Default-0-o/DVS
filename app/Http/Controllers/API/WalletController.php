<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class WalletController extends Controller{

    public function getWallet(Request $request){
        $user_id = Auth::id();
        $wallet = DB::select("select * from wallet where user_id='$user_id'",);
        return response()
            ->json(['data' => $wallet,]);
    }
}