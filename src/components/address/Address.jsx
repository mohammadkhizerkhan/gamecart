import React from 'react'

function Address({data}) {
    const {city,country,mobile,_id,zipCode,state,name,street}=data;
    return (
        <div className="address-select-cont">
            <label htmlFor="" className='address-label-radio'>
            <input type="radio" className="address-input" />
                <p>{name}</p>
            </label>
            <div className="address-details-cont text-left">
                <p>{street},&nbsp; {city},&nbsp; {state},&nbsp; {zipCode}</p>
                <p>{country}</p>
                <p>Phone Number:{mobile}</p>
            </div>
        </div>
    )
}

export default Address
