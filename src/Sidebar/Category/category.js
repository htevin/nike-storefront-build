import React from 'react'
import './category.css'
import Input from '../../components/Input'

export default function category({handleChange}) {
  return (
<div>
<h2 className='sidebar-title'>Category</h2>

<div>
 <label className="sidebar-label-container">
  <input onChange={handleChange} type="radio" name="test" value='' />
  <span className="checkmark"></span>All
 </label>

 <Input
 handleChange={handleChange}
 value='sneakers'
 title='Sneakers'
 name='test'
 />

<Input
 handleChange={handleChange}
 value='flats'
 title='Flats'
 name='test'
 />

<Input
 handleChange={handleChange}
 value='sandals'
 title='Sandals'
 name='test'
 />

<Input
 handleChange={handleChange}
 value='heels'
 title='Heels'
 name='test'
 />

</div>
</div>
    )
}
