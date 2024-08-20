const { adicionarProp, removerProp, atualizarProp, spreed, comparar, } = require('../../src/obj/obj');

test('deve adicionar uma nova propriedade ao objeto', () => {
    const obj = { nome: 'João' };
    const resultado = adicionarProp(obj, 'idade', 30);
    expect(resultado).toEqual({ nome: 'João', idade: 30 });
});

test('deve remover uma propriedade do objeto', () => {
    const obj = { nome: 'João', idade: 30 };
    const resultado = removerProp(obj, 'idade');
    expect(resultado).toEqual({ nome: 'João' });
});

test('deve atualizar o valor de uma propriedade do objeto', () => {
    const obj = { nome: 'João', idade: 30 };
    const resultado = atualizarProp(obj, 'idade', 31);
    expect(resultado).toEqual({ nome: 'João', idade: 31 });
});

test('deve mesclar dois objetos', () => {
    const obj1 = { nome: 'João' };
    const obj2 = { idade: 30 };
    const resultado = spreed(obj1, obj2);
    expect(resultado).toEqual({ nome: 'João', idade: 30 });
});

test('deve comparar dois objetos quanto à igualdade', () => {
    const obj1 = { nome: 'João', idade: 30 };
    const obj2 = { nome: 'João', idade: 30 };
    const obj3 = { nome: 'Mateus', idade: 25 };

    expect(comparar(obj1, obj2)).toBe(true);
    expect(comparar(obj1, obj3)).toBe(false);
});
