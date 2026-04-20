import React from 'react'
import "./Pricing.css";




const Pricing = () => {


    const plans = [
  { name: 'BASIC', price: '$20 per m2', term: '10 days', values: ['✓','✓','✓','✓','✓','✓','simplified','','10 days'] },
  { name: 'STANDARD', price: '$30 per m2', term: '20 days', values: ['✓','✓','✓','✓','✓','✓','✓','','20 days'] },
  { name: 'BUSINESS', price: '$40 per m2', term: '30 days', values: ['✓','✓','✓','✓','✓','✓','✓','✓','30 days'] },
];

const rows = [
  'Installation plan',
  'Planning solutions (2-3 options)',
  'Lighting plan',
  'Flooring plan',
  'Heating floor laying scheme',
  'Air conditioner zones layout',
  '3D visualization of all rooms',
  'Visualization of each room (3-4 angles)',
  'Terms'
];
  return (
    <div>
        <div className='pricing-page'>
      <h1>Pricing</h1>
      <p className='subtitle'>We offer you three categories of construction.</p>
      <div className='table-wrap'>
        <table className='pricing-table'>
          <thead>
            <tr>
              <th>Items</th>
              {plans.map(p => <th key={p.name}>{p.name}<span>{p.price}</span></th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row,i)=>(
              <tr key={i}>
                <td>{row}</td>
                {plans.map(p => <td key={p.name+i} className='mark'>{p.values[i]}</td>)}
              </tr>
            ))}
            <tr>
              <td></td>
              {plans.map(p => <td key={p.name}><button>SEND REQUEST</button></td>)}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Supported by 12+ partners</h2>
      <div className='logos'>
        <img src='https://via.placeholder.com/90x30?text=Logo1' alt='' />
        <img src='https://via.placeholder.com/90x30?text=Logo2' alt='' />
        <img src='https://via.placeholder.com/90x30?text=Logo3' alt='' />
        <img src='https://via.placeholder.com/90x30?text=Logo4' alt='' />
        <img src='https://via.placeholder.com/90x30?text=Logo5' alt='' />
        <img src='https://via.placeholder.com/90x30?text=Logo6' alt='' />
      </div>
    </div>
   
    </div>
  )
}

export default Pricing
