import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, code: 'PROD-0001', name: 'Blackmores Omega Double High Strength Fish Oil', category: 'Thực phẩm chức năng', quantity: 1000, price: 598000, importDate: '24/01/2022' },
    { id: 2, code: 'PROD-0002', name: 'Vitamin C Nature Way 1000mg', category: 'Thực phẩm chức năng', quantity: 500, price: 299000, importDate: '08/03/2024' },
    { id: 3, code: 'Sữa rửa mặt Cerave Foaming Facial Cleanser', category: 'Mỹ phẩm', quantity: 700, price: 380000, importDate: '12/05/2023' },
    { id: 4, code: 'Kem chống nắng Sunplay Skin Aqua SPF50+ PA++++', category: 'Mỹ phẩm', quantity: 200, price: 250000, importDate: '21/07/2024' },
    { id: 5, code: 'Bàn chải điện Oral B Pro 7000', category: 'Thiết bị chăm sóc sức khỏe', quantity: 300, price: 1299000, importDate: '10/09/2023' },
  ]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    code: '',
    name: '',
    category: '',
    quantity: '',
    price: '',
    importDate: '',
  });


  const handleSortByNameAsc = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProducts(sortedProducts);
  };

  const handleSortByNameDesc = () => {
    const sortedProducts = [...products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setProducts(sortedProducts);
  };

  const handleEditProduct = (product) => {
    setIsEditingProduct(true);
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map(p =>
      p.id === editingProduct.id ? editingProduct : p
    );
    setProducts(updatedProducts);
    setIsEditingProduct(false);
    setEditingProduct(null);
  };

  return (
    <div>
      {/* ... bảng sản phẩm */}
      {isEditingProduct && (
        <form onSubmit={handleSaveEdit}>
          {/* ... form chỉnh sửa sản phẩm */}
          <button type="submit">Lưu</button>
        </form>
      )}
      {/* ... các nút thêm, xóa sản phẩm */}
    </div>
  );
};

export default ProductList;