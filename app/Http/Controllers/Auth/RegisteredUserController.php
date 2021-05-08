<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Credencial;
use App\Models\Direccion;
use App\Models\Telefono;
use App\Models\User;
use App\Models\Usuario;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            // Usuario
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'cedula' => 'required|string|max:255',

            // // Telefono Usuario
            'telefono' => 'required|string|max:255',

            // Direccion
            'calle' => 'required|string|max:255',
            'numero_casa' => 'required|string|max:255',
            'pais' => 'required|string|max:255',
            'ciudad' => 'required|string|max:255',
            'codigo_area' => 'required|string|max:255',

            // Credencial
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        $id = Usuario::insertUser($request);
        Direccion::insertDireccion($request, $id);
        Telefono::insertTelefono($request, $id);
        $user = User::create([
            'id_usuario_fk' => $id,
            'name' => $request->nombre . " " . $request->apellido,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
