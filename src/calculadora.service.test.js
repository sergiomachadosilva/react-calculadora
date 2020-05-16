import React from 'react'
import ReactDOM from 'react-dom'

import CalculadoraService from './calculadora.service'

describe('Teste do CalculadoraService', () => {
    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

    it('Deve garantir que 1+4 = 5.', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    })

    it('Deve garantir que 1-4 = -3.', () => {
        let subtracao = calcular(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    })

    it('Deve garantir que 1/4 = 0.25', () => {
        let divisao = calcular(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25);
    })

    it('Deve garantir que 8*8 = 64', () => {
        let multiplicacao = calcular(8, 8, MULTIPLICACAO);
        expect(multiplicacao).toEqual(64);
    })

    it('Deve retornar 0 para operação inválida', () =>{
        let operacaoInvalida = calcular(1,4, '%');

        expect(operacaoInvalida).toEqual(0);

    })

})