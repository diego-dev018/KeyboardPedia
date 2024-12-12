const owner = 'diego-dev018'; // Cambia esto por el propietario del repositorio
const repo = 'KeyboardPedia';  // Cambia esto por el nombre del repositorio
const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;

export async function getContributors() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener los contribuidores: ${response.status}`);
      }
      const contributors = await response.json();
      return contributors.sort((a, b) => b.contributions - a.contributions).slice(0, 10);
    } catch (error) {
      console.error(error);
      return [];
    }
}

/* 
.then(contributors => {
contributors.forEach(contributor => {
    console.log(`Nombre: ${contributor.login}, Contribuciones: ${contributor.contributions}, Avatar: ${contributor.avatar_url}`);
});
*/