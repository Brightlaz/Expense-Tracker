import React from 'react'

const TotalBalance = () => {
    return (
        < div className='p-4' >
            {/* Balance */}
            <div className='bg-primary flex flex-col px-3.5 leading-none text-white rounded-2xl'>
                <p className='text-sm mt-4'>
                    Total Balance:
                </p>
                <p className='text-2xl font-bold mt-1 mb-3'>
                    #150,000
                </p>
            </div>
        </div >
    )
}

export default TotalBalance