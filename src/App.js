
import React, { useState } from 'react';
import { countries } from 'countries-list';
import Headerarea from './Headerarea';
import { Button, Spinner } from 'react-bootstrap';
import Showdata from './Showdata';
import Error from './Error';

const App = () => {
  const [data, setData] = useState(null);
  const [presentCurrency, setPresentCurrency] = useState('');
  const [convertedCurrency, setConvertedCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!presentCurrency || !convertedCurrency || !amount) {
      alert('Please fill all inputs');
      return;
    }

    setIsLoading(true);

    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${presentCurrency}&want=${convertedCurrency}&amount=${amount}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3fbaf0cd6cmshea82574903a86d0p124322jsn46a7ebc74e4e',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const countryNames = Object.keys(countries);

  return (
    <div>
      <Headerarea />

      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <label className='text-center fw-bolder'>Converting from</label>
        <select
          value={presentCurrency}
          onChange={(e) => setPresentCurrency(e.target.value)}
        >
          <option value="">Select Present Currency</option>
          {countryNames.map((countryCode, index) => (
            <option key={index} value={countries[countryCode].currency}>
              {countries[countryCode].name}
            </option>
          ))}
        </select>
        <label className='text-center fw-bolder'>Converting to</label>

        <select
          value={convertedCurrency}
          onChange={(e) => setConvertedCurrency(e.target.value)}
        >
          <option value="">Select Converted Currency</option>
          {countryNames.map((countryCode, index) => (
            <option key={index} value={countries[countryCode].currency}>
              {countries[countryCode].name}
            </option>
          ))}
        </select>
        <label className='text-center fw-bolder'>Enter the amount</label>

        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button type="submit" className='mt-1'>
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
      {isError && <Error setIsError={setIsError} />}
      <Showdata data={data} />
    </div>
  );
};

export default App;


