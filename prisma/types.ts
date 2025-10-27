export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  user: {
    id: 'number',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    description: 'string',
    password: 'string',
    imageUrl: 'string',
    refreshToken: 'string',
    isActive: 'boolean'
  },
  category: {
    id: 'number',
    title: 'string',
    slug: 'string',
    description: 'string'
  },  
  brand: {
    id: 'number',
    title: 'string',
    imageUrl: 'string'
  },  
  product: {
    id: 'number',
    name: 'string',
    slug: 'string',
    imageUrl: 'string',
    teaser: 'string',
    description: 'string',
    price: 'number',
    stock: 'number',
    categoryId: 'number',
    brandId: 'number',
    isActive: 'boolean',
    createdAt: 'date'
  },
  review: {
    id: 'number',
    title: 'string',
    comment: 'string',
    numStars: 'number',
    productId: 'number',
    userId: 'number',
    isActive: 'boolean',
    createdAt: 'date',
    updatedAt: 'date'
  },
  cart: {
    id: 'number',
    userId: 'number',
    productId: 'number',
    quantity: 'number',
    imageUrl: 'string',
    createdAt: 'date'
  },
  order: {
    id: 'number',
    userId: 'number',
    totalPrice: 'number',
    status: 'number',
    createdAt: 'date'
  },
  orderline: {
    id: 'number',
    orderId: 'number',
    productId: 'number',
    quantity: 'number',
    price: 'number'
  }
};