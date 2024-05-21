import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrency from './hooks/useCurrency';
import InputBox from './components/InputBox';   // importing a customized component


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const CurrencyOptions = Object.keys(currencyInfo);

  console.log(typeof(amount))
  const convert = ()=>{

    setConvertedAmount(amount*currencyInfo[to])
  }

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/10628029/pexels-photo-10628029.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                label="from"
                amount={amount}
                currencyOptions={CurrencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}   // passing a setFrom function as a prop
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                />
              </div>

              <div className='relative w-full h-0.5'>
                <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-red-500 text-white px-2 py-0.5'
                onClick={swap}
                >Swap</button>
              </div>

              <div className='w-full mb-1'>
                <InputBox
                label="to"
                currencyOptions={CurrencyOptions}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                
                amountDisabled
                />
            </div>
            <button
            type='submit'
            className='w-full bg-red-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default App
