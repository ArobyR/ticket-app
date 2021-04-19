<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

class ArrayToRequest extends Request
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function toRequest($array)
    {
        $request = new Request();
        $request->setMethod('POST');
        $request->request->add($array);
        return $request;
    }
}
