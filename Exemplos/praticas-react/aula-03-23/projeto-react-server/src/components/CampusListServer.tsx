async function CampusListServer() {
  const campuses = await fetch(
    "https://conectaifce-api.proflucasmendes.com.br/campuses",
  ).then((response) => response.json());

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

export default CampusListServer;
