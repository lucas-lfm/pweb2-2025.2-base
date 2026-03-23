export default async function CampusList() {
  // delay de teste
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const campuses: { id: string; name: string }[] = await fetch(
    "https://conectaifce-api.proflucasmendes.com.br/campuses",
    {
      cache: "force-cache",
    },
  ).then((response) => response.json());

  return (
    <div>
      <h2 className='text-2xl font-bold'>Lista de Campi do IFCE</h2>
      <ul>
        {campuses.map((campus) => (
          <li key={campus.id}>{campus.name}</li>
        ))}
      </ul>
    </div>
  );
}
