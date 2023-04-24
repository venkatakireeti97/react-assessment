export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
  }

  export interface ModalProps {
    onClose: any;
    type: string;
    onSave: Function;
    editId: number;
  }

  export interface sidebarDataObj {
    name: string;
    path: string;
    icon: any;
    className: string;
  }
  
  export interface CountryObj  {
    updated: number;
    country: string;
    countryInfo: {
      _id: number;
      iso2: string;
      iso3: string;
      lat: number;
      long: number;
      flag: string;
    };
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
  };