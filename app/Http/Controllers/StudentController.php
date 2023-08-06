<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResources;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $student = User::all();
        $response = [
                    'code' => 200,
                    'message' => 'Successfully retrieved',
                    'Student Profile' => StudentResources::collection($student)
                ];

                return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $student = Student::create($input);
        $response = [
            'code' => 200,
            'message' => 'Successfully Created',
            'services' => new StudentResources($student)
        ];
        return $response;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $student = User::findOrFail($id);
        $response = [
            'code' => 200,
            'message' => 'Successfully Retrieved',
            'services' => new StudentResources($student)
        ];
        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $student = User::findOrFail($id);
        $student->update($input);
        $response = [
            'code' => 200,
            'message' => 'Successfully Updated',
            'services' => new StudentResources($student)
        ];
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $service = User::findOrFail($id);
        $service->delete();
        $response = [
            'code' => 200,
            'message' => 'Successfully Deleted!',
            'services' => new StudentResources($service)
        ];
        return $response;

    }
}
