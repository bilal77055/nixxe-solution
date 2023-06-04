import React from 'react'

const Showdata = ({data}) => {
  return (
    <div className='mt-3 '>
         {data && (
        <div className='bg-primary rounded text-light text-center py-1 last-card'>
          <p>Present Currency Name: </p>
          <p className='p-0 m-0'>  <strong className=''>{data.old_currency}</strong> </p>
          <p>Converted Currency Name: </p>
          <p  className='p-0 m-0'>  <strong className=''>{data.new_currency}</strong> </p>

          <p>Entered Amount: </p>
          <p  className='p-0 m-0'>  <strong className=''>{data.old_amount}</strong> </p>

          <p>Converted Amount: </p>
          <p  className='p-0 m-0'>  <strong className=''>{data.new_amount}</strong> </p>

        </div>
      )}
    </div>
  )
}

export default Showdata
