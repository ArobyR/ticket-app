<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

class ArrayToRequest extends Request
{
    protected $array;
    public function __construct(array $array)
    {
        $this->$array = $array;
    }

    public function toRequest($array)
    {
        $request = new Request();
        $request->setMethod('POST');
        $request->request->add($this->$array);
        $request->request->add($array);
        return $request;
    }
}
