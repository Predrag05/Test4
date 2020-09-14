import axios from 'axios'

export const setAllCountries = () => {
    return axios.get('https://restcountries.eu/rest/v2/all')
}

export const setAllRegions = (region) => {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
}