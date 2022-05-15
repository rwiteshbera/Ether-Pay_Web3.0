import React, {useContext} from 'react'

import {TransactionContext} from "../context/TransactionContext";

import dummyData from '../utils/dummyData';
import {shortenAddress} from "../utils/shortenAddress";

const TransactionCard = ({addressTo, addressFrom , timestamp, keyword, amount, url, message}) => {
  return (
      <>
      <div className='bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        flex-col p-3 rounded-md hover:shadow-2xl
      '>
        <div className='flex flex-col items-center w-full mt-3'>
          <div className=' w-full mb-6 p-2'>
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferrer'>
              <p className='text-white text-base'>From: {addressFrom}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
              <p className='text-white text-base'>To: {addressTo}</p>
            </a>
            <p className='text-white text-base'>Amount: {amount}</p>
            {(
              <>
              <br/>
              <p className='text-white text-base'>Keyword: {keyword}</p>
              <br/>
              </>
            ) }

            <div className='bg-black p-3 px-5 w-max rounded-3xl shadow-2xl'>
              <p className='text-[#37c7d8] font-bold'>{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

const Transactions = () => {
  const {connectedAccount, transactions} = useContext(TransactionContext);

  return (
    <div className='flx w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {connectedAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transaction</h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>Connect your account to see latest transactions</h3>
        )}

        <div className='flex flex-wrap justify-center items-center mt-10 text-white'>
          {transactions.reverse().map((transaction, i)=> (
            <TransactionCard key={i} {...transaction}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions