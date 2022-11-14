//this is an example for country list response
import CountryModel from "./models/CountryModel";

const countries = [
    {
        id: 1,
        name: 'Montenegro',
        code: 'mne',
    },
    {
        id: 2,
        name: 'USA',
        code: 'usa',
    },
    {
        id: 3,
        name: 'Serbia',
        code: 'srb',
    },
    {
        id: 4,
        name: 'Croatia',
        code: 'cro',
    },
    {
        id: 5,
        name: 'Bosnia and Herzegovina',
        code: 'bih',
    },

]

//TODO
// implement apis when we get to requests

class CountryService {
    //apis used for country requests
    api = {}

    //parameters used in apis
    params = {}

    //for now this returns list of countries
    getAll(){
        return countries.map(item => new CountryModel(item))
    }


}

export const countryService = new CountryService();