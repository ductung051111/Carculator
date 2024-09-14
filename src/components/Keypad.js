import React from 'react';
import Button from './Button';

const Keypad = ({ handleClick }) => {
    return (
        <div className="keypad">
            <Button label="Clear" handleClick={() => handleClick('Clear')} />
            <Button label="Delete" handleClick={() => handleClick('Delete')} />
            <Button label="0" handleClick={() => handleClick("0")} />
            <Button label="1" handleClick={() => handleClick('1')} />
            <Button label="2" handleClick={() => handleClick('2')} />
            <Button label="3" handleClick={() => handleClick('3')} />
            <Button label="4" handleClick={() => handleClick('4')} />
            <Button label="5" handleClick={() => handleClick('5')} />
            <Button label="6" handleClick={() => handleClick('6')} />
            <Button label="7" handleClick={() => handleClick('7')} />
            <Button label="8" handleClick={() => handleClick('8')} />
            <Button label="9" handleClick={() => handleClick('9')} />
            <Button label="+" handleClick={() => handleClick('+')} />
            <Button label="-" handleClick={() => handleClick('-')} />
            <Button label="*" handleClick={() => handleClick('*')} />
            <Button label="/" handleClick={() => handleClick('/')} />
            <Button label="." handleClick={() => handleClick('.')} />
            <Button label="=" handleClick={() => handleClick('=')} />
        </div>
    )
}

export default Keypad;
