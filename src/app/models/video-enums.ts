export enum Niveau {
  _1A = "1A", _2A = "2A", _3A = "3A", _4A = "4A", _5A = "5A"
}
export enum OptionEnum {
  ARCTIC = "ARCTIC",
  DATA_SCIENCE = "DATA_SCIENCE",
  SIM = "SIM",
  TWIN = "TWIN",
  SLEAM = "SLEAM",
  GAMIX = "GAMIX",
  GC = "GC",
  ELECTROMECANIQUE = "ELECTROMECANIQUE",
  TIC = "TIC",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT"
}

export enum Visible {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  EspritEtudiant = "EspritEtudiant",
  Community = "Community"
}

export enum videoTags {
  PROGRAMMING = "PROGRAMMING",
  SOFT_SKILLS = "SOFT_SKILLS",
  LANGUAGES = "LANGUAGES",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  MOBILE_DEVELOPMENT = "MOBILE_DEVELOPMENT",
  DESKTOP_DEVELOPMENT = "DESKTOP_DEVELOPMENT",
  DATABASES = "DATABASES",
  SECURITY = "SECURITY",
  NETWORKS = "NETWORKS",
  CLOUD = "CLOUD",
  DEVOPS = "DEVOPS",
  TESTING = "TESTING",
  AI = "AI",
  ML = "ML",
  IOT = "IOT",
  BLOCKCHAIN = "BLOCKCHAIN",
  AR = "AR",
  VR = "VR",
  GAME = "GAME",
  DESIGN = "DESIGN",
  PYTHON = "PYTHON",
  OTHER = "OTHER"
}
export interface Tag {
  id: number;
  tag: string;
}
