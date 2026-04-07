<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    public function sendOtp(Request $req)
    {
        $otp = rand(100000, 999999);

        DB::table('recruiters')->updateOrInsert(
            ['email' => $req->email],
            ['otp' => $otp]
        );

        return response()->json([
            'message' => 'OTP sent',
            'otp' => $otp // ⚠️ remove in production
        ]);
    }

    public function register(Request $req)
    {
        $user = DB::table('recruiters')
            ->where('email', $req->email)
            ->where('otp', $req->otp)
            ->first();

        if (!$user) {
            return response()->json(['error' => 'Invalid OTP'], 400);
        }

        DB::table('recruiters')->where('email', $req->email)->update([
            'name' => $req->name,
            'designation' => $req->designation,
            'phone' => $req->phone,
            'alt_phone' => $req->alt_phone,
            'password' => Hash::make($req->password),
        ]);

        return response()->json(['message' => 'Registered']);
    }
}

