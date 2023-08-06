<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'dob' => $this->dob,
            'address' => $this->address,
            'email' => $this->email,
            'phone' => $this->phone,
            'school_graduated' => $this->school_graduated,
            'year_graduated' => $this->year_graduated,
            'school_address' => $this->school_address,
        ];
    }
}
