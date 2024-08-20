function adicionarProp(obj, key, value) {
    return { ...obj, [key]: value };
}

function removerProp(obj, key) {
    const { [key]: _, ...newObj } = obj;
    return newObj;
}

function atualizarProp(obj, key, value) {
    return { ...obj, [key]: value };
}

function spreed(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function comparar(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

module.exports = {
    adicionarProp,
    removerProp,
    atualizarProp,
    spreed,
    comparar,
};
