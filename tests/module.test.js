function addProduct(name, price) {
    const productNameRegexNoSpace = /^\S*$/g; // no white-space allowed
    if (!productNameRegexNoSpace.test(name)) {
        return false;
    }
    return typeof price === 'number';
}
test('When adding new valid product, get successful confirmation', () => {
    const name = 'Gran ite';
    const price = 'vvvv';
    expect(addProduct(name, price)).toBe(true);
});