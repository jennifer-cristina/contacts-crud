<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index() {

        $contacts = ContactModel::all();

        $contactsNotExist = sizeof($contacts) === 0;

        if($contactsNotExist) {

            return response()->json( [
                "message"=> "Nenhum contato foi encontrado",
                "data"=> []
            ], 404);
        }

        return [
            "message"=> "Contatos listados com sucesso",
            "data"=> $contacts
        ];

    }

    public function show($id) {

        $contact = ContactModel::find($id);

        if(!$contact) {

            return response()->json( [
                "message"=> "Contato não encontrado",
                "data"=> []
            ], 404);

        }

        return [
            "message"=> "Contato listado com sucesso",
            "data"=> $contact
        ];
    }

    public function store (Request $request) {

        $validated = Validator::make($request->all(),[
            'name'=> 'required|max:50|string',
            'birth_date'=> 'required|date',
            'email'=> 'required|max:150|email',
            'profession'=> 'required|max:50|string',
            'phone'=> 'required|max:15|min:10|regex:/^[0-9]*$/',
            'cell_phone'=> 'required|max:15|min:10|regex:/^[0-9]*$/',
            'has_whatsapp'=> 'boolean',
            'sms_notification'=> 'boolean',
            'email_notification'=> 'boolean',
        ]);

        if($validated->fails()) {

            return response()->json( [
                "message"=> "Ocorreram alguns erros de validação",
                "data"=> [],
                "errors"=> $validated->errors()
            ], 400);

        }

        $contact = ContactModel::create($request->all());

        return [
            "message" => "Contato cadastrado com sucesso",
            "data" => $contact
        ];
    }

    public function update (Request $request, $id) {

        $contact = ContactModel::find($id);

        if(!$contact) {

            return response()->json( [
                "message"=> "Contato não encontrado",
                "data"=> []
            ], 404);

        }

        $validated = Validator::make($request->all(), [
            'name'=> 'required|max:50|string',
            'birth_date'=> 'required|date',
            'email'=> 'required|max:150|email',
            'profession'=> 'required|max:50|string',
            'phone'=> 'required|max:15|min:10|regex:/^[0-9]*$/',
            'cell_phone'=> 'required|max:15|min:10|regex:/^[0-9]*$/'
        ]);

        if($validated->fails()) {

            return response()->json( [
                "message"=> "Ocorreram alguns erros de validação",
                "data"=> [],
                "errors"=> $validated->errors()
            ], 400);
        }

        $contact->update($request->all());

        return [
            "message"=> "Contato atualizado com sucesso",
            "data"=> $contact
        ];
    }

    public function delete ($id) {

        $contact = ContactModel::find($id);

        if(!$contact) {

            return response()->json( [
                "message"=> "Contato não encontrado",
                "data"=> []
            ], 404);

        }

        $contact = ContactModel::destroy($id);

        return [
            "message"=> "Contato deletado com sucesso",
            "data"=> []
        ];
    }


}
