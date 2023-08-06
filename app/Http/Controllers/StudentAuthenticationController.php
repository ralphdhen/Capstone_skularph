<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class StudentAuthenticationController extends Controller
{
    //
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string',
            'first_name' => 'required|string',
            'last_name'=> 'required|string',
            'dob'=>'required|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'school_graduated' => 'required|string',
            'year_graduated' => 'required|string',
            'school_address' => 'required|string',
        ]);

        if($validator->fails()) {
            return response(['error' => $validator->errors()->all()],422);

        }

        $password_hash = Hash::make($request->password);

        $user = User::create([
            'email' => $request->email,
            'password' => $password_hash,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'dob' => $request->dob,
            'address' => $request->address,
            'phone' => $request->phone,
            'school_graduated' => $request->school_graduated,
            'year_graduated' => $request->year_graduated,
            'school_address' => $request->school_address,
        ]);

        $token = $user->createToken('LaravelTokenPassword')->accessToken;

        $response = ['token'=>$token,
                'message'=>'Hi '. $user->first_name .'! You account has been sucessfully created!'];

        return $response;



    }


    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if($validator->fails()) {
            return response(['error' => $validator->errors()->all()],422);
        }

        $user = User::where('email', $request->email)->first();

        if ($user){
            $check_password = Hash::check($request->password, $user->password);
            if($check_password){
                $token = $user->createToken('LaravelTokenPassword')->accessToken;
                $reponse = ['token' => $token,
                'message' => 'Welcome '. $user->first_name.'! You have successfully logged in',
                'user' => $user];
                return $reponse;


            }else{
                return response(['error' => 'password is invalid'],422);

            }

        }else{
            return response([
                'error'=>'User does not exist!'],422);
        }

    }

    public function logout(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have successfully logged out!'];
        return $response;
    }
}
