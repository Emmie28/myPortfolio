
import React, {useEffect, useState} from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Body from './components/Body/body';
import { LinearProgress } from '@material-ui/core';

import { getCurrencyData, convertCurrency, options2 } from './api';


const Currency = () => {
    const [isLoading, setIsloading] = useState(false);
    const [currency, setCurrency] = useState([]);

    useEffect(() =>{
        setIsloading(true);
        getCurrencyData()
            .then((data) => {
                console.log(data);
                setCurrency(data);
                setIsloading(false);
            });
        
        
        
    }, []);

    return (
        <div>

            <Header />
            
            <div>
                { isLoading !== false && (   
                    <div >
                        <LinearProgress />
                    </div>) 
                }
            </div>
            

            <Body 
                currency={currency} 
                options2={options2} 
                isLoading={isLoading}
                setIsloading={setIsloading}
                convertCurrency={convertCurrency} 
            />

            <Footer />

        </div>
    )
};

export default Currency;

