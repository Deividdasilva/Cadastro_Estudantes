<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\Input;

class RegisterController extends Controller
{
    public function create(Request $request){

        try{
           
           $insert['name_lastname'] = $request['name'];
           $insert['date_birth'] = $request['dateBirth'];
           $insert['series'] = $request['series'];
           $insert['cep'] = $request['cep'];
           $insert['rua'] = $request['rua'];
           $insert['numero'] = $request['numero'];
           $insert['complemento'] = $request['complemento'];
           $insert['bairro'] = $request['bairro'];
           $insert['city'] = $request['city'];
           $insert['estado'] = $request['estado'];
           $insert['name_mother'] = $request['nameMother'];
           $insert['cpf_mother'] = $request['cpfMother'];
           $insert['date_payment'] = $request['datePayment'];

           Register::insert($insert);

           $response['message'] = "Salvo com sucesso";
           $response['success'] = true;


        } catch(\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function list() {
        try {

            $data = Register::get();

            $response['data'] = $data;
            $response['message'] = "Salvo com sucesso";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function get($id){

        try{

            $data = Register::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Salvo com sucesso";
                $response["success"] = true;
            } else {
                $response['data'] = null;
                $response['message'] = "Dados nao encontrados id => $id";
                $response["success"] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function update(Request $request, $id){

        try {

            $data['name_lastname'] = $request['name'];
            $data['date_birth'] = $request['dateBirth'];
            $data['series'] = $request['series'];
            $data['cep'] = $request['cep'];
            $data['rua'] = $request['rua'];
            $data['numero'] = $request['numero'];
            $data['complemento'] = $request['complemento'];
            $data['bairro'] = $request['bairro'];
            $data['city'] = $request['city'];
            $data['estado'] = $request['estado'];
            $data['name_mother'] = $request['nameMother'];
            $data['cpf_mother'] = $request['cpfMother'];
            $data['date_payment'] = $request['datePayment'];

            $res = Register::where("id",$id)->update($data);

            $response['res'] = $res;
            $response['message'] = "Salvo com sucesso";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function delete($id){

        try {

            $res = Register::where("id",$id)->delete();

            $response['res'] = $res;
            $response['message'] = "Deletado com sucesso";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
    
}
