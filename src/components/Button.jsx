import React from 'react';
import classnames from 'classnames'

const Button = ({ symbol, onClick}) => {

    let cn = classnames({
        'btn': true,
        'num': [0,1,2,3,4,5,6,7,8,9,"."].includes(symbol),
        'operant': ["AC","±","%","÷","×","+","=","-"].includes(symbol),
        'zero': symbol === 0
    })

    return (
        <button className={cn} onClick={onClick}>
            {symbol}
        </button>
    )
}

export default Button;