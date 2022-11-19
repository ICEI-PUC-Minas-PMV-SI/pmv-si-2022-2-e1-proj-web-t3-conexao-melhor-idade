using System;

class MainClass {

    public static void Main (string[] args){

        int a = 2, b = 2;
        int res = funcao(a, b);

        Console.Writeline ($"Resultado = {res}")
 }
}

public static in funcao (int x, int y) {

    int resultado = 1;

    for(int i=0; i<y; i++){
        resultado*=x;
    }
    return resultado;

}

public static in funcao (int x, int y) {

    int resultado = 1;

    for(int i=0; i<x; i++){
        resultado *= y;
    }
    return resultado;


}

public static in funcao (int x, int y) {

    int resultado = 1;

        resultado * = x * y;

    return resultado;

}

