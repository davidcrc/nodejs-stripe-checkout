import { faker } from '@faker-js/faker';

export const createProducts = (size = 1) => {

  const products: any[] = []

  for (let i = 0; i < size; i++) {
    const productName = faker.commerce.productName();
    const productPrice = Number(faker.commerce.price());
    const description = faker.commerce.productDescription()

    products.push({
      name: productName,
      price: productPrice,
      description
    })
  }

  return products
}
