import { NextResponse } from "next/server";
//Importando o NextResponse da pasta Next/Server

export async function GET() {
    return NextResponse.json({mensagem : "Olá Mundo!!!"})
}
//Função com o método GET, e retornando um arquivo json com a mensagem dentro
//GET, POST, PUT, DELETE Métodos
//async é um parâmetro para fazer com que a função ocorra de tempo diferente, com um "delei", dando um tempo para ocorrer.
