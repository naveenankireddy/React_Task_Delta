import React from 'react'
import BasicTable from './BasicTable'

export default function Home(props) {
  return (
    <div className='home_table'>
        <BasicTable products={props.products} />
    </div>
  )
}
