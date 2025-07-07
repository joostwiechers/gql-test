export interface ICountryLanguage {
  code: string
  name: string
}

export interface IContinent {
  name: string
  code: string
}

export interface ICountry {
  name: string
  native: string
  capital: string
  emoji: string
  currency: string
  code: string
  continent: IContinent

  languages: ICountryLanguage[]
}
