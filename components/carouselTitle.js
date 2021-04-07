import React from 'react';

const CarouselTitle = (props) => {
    return (
        <div className='container border-bottom'>
            <h5 className="popcorn-red font-weight-bold mt-4">{props.text}</h5>
        </div>
    )
}

export default CarouselTitle;