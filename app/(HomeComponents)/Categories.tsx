import React from 'react'

const Categories = () => {
  return (
    <section>
        <h3 className='paint-green inline-block mt-14 mb-11'>Categories</h3>
        {categories.map(cat => (
            <div className='flex justify-between border-b border-dotted pb-3 mb-3'>
                <h6>{cat.name}</h6>
                <h6>{cat.number}</h6>
            </div>
        ))}
    </section>
  )
}

export default Categories

const categories = [
    {
        name: 'Lifestyle',
        number: '09'
    },
    {
        name: 'Travel',
        number: '14'
    },
    {
        name: 'Food',
        number: '08'
    },
    {
        name: 'Healthcare',
        number: '12'
    },
    {
        name: 'Technology',
        number: '19'
    },
]