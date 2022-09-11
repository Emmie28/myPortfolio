import axios from 'axios';

const URL = 'https://currency-converter5.p.rapidapi.com/currency/list'

const options = {
    
    headers: {
      'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    }
  };

const converter_URL =  'https://currency-converter5.p.rapidapi.com/currency/convert';

export var options2 = {

    params: {format: 'json', from: '', to: '', amount: '1'},
    headers: {
      'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    }
  };
  
  // API call for currency converter
export const convertCurrency = async () => {
    try {
        const { data: {rates} } = await axios.get(converter_URL, options2);
            return rates;
    } catch (error) {
        console.log(error)
    }
}

// API call for available curriencies
export const getCurrencyData = async () => {
    try {
        const { data: {currencies} } = await axios.get(URL, options);
            return currencies;
    
        } catch (error) {
        console.log(error)
    }
}