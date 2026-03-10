import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setError("Erro ao carregar produtos."))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then(setProduct)
        .catch(() => setError("Erro ao carregar detalhes do produto."))
        .finally(() => setLoading(false));
    }, [id]);

  return { product, loading, error };
}
