import { getProductData } from '../product.page';

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn(() => Promise.resolve('{"id": 1, "name": "Product 1", "price": 10}')),
    },
}));

describe('getProductData', () => {
    it('should return product data from JSON file', async () => {
        const productData = await getProductData();

        const expectedData = { id: 1, name: 'Product 1', price: 10 };
        expect(productData).toEqual(expectedData);
    });
});
