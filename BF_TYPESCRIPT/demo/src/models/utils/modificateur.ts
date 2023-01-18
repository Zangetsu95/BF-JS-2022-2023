const modificateur = (stats: number) =>
  stats < 5 ? -1 : stats < 10 ? 0 : stats < 15 ? 1 : 2;

export default modificateur;
