class ProductManager {
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.error('Error: Todos los campos son obligatorios');
      return;
    }

    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      console.error('Error: Ya existe un producto con el mismo código');
      return;
    }

    this.lastId++;
    this.products.push({
      id: this.lastId,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
    });

    console.log(`Producto agregado: ${product.title} (id: ${this.lastId})`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error('Error: Producto no encontrado');
      return null;
    }
    return product;
  }
}

const pm = new ProductManager();

console.log(pm.getProducts());

pm.addProduct({
  title: 'Samsung Galaxy S21 Ultra 5G',
  description: 'Samsung Galaxy S21 Ultra 5G | Desbloqueado de fábrica | 256 GB | Phantom Black',
  price: 1299.99,
  thumbnail: 'https://m.media-amazon.com/images/I/81-lBbJM42L._AC_UL480_FMwebp_QL65_.jpg',
  code: 'B08P8VZNBK',
  stock: 10,
});

console.log(pm.getProducts());

pm.addProduct({
  title: 'Apple iPhone 13 Pro Max',
  description: 'Apple iPhone 13 Pro Max | Desbloqueado de fábrica | 1 TB | Sierra Blue',
  price: 1699.00,
  thumbnail: 'https://m.media-amazon.com/images/I/71cXTDNj8-L._AC_UL480_FMwebp_QL65_.jpg',
  code: 'B08P8VZNBK',
  stock: 5,
});

console.log(pm.getProductById(2));

console.log(pm.getProductById(1));
