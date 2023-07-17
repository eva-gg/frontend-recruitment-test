export type Route = {
  id: number,
  title: string,
  route: string,
}

export type Season = {
  id: number,
  from: Date,
  to: Date,
  seasonNumber: number,
  active: boolean,
  status: string,
}

export type User = {
  username: string,
  displayName: string,
  email: string,
  seasonXp: {
    level: number,
    levelProgressionPercentage: number,
    experience: number,
    experienceForNextLevel: number,
    experienceForCurrentLevel: number,
    seasonId: number,
  }
}