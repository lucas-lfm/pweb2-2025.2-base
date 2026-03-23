import { useEffect, useState } from "react";

function CampusList() {
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://conectaifce-api.proflucasmendes.com.br/campuses")
      .then((response) => response.json())
      .then((data) => {
        setCampuses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar campi:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao buscar campi: {error.message}</div>;
  }

  return (
    <div>
      <h2>Lista de Campi do IFCE</h2>
      <ul>
        {campuses.map((campus) => (
          <li key={campus.id}>{campus.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CampusList;
