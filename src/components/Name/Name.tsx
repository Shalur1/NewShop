import React, {FC} from 'react';

interface NameProps{
    name: string,
    brand: string
}

const Name:FC<NameProps> = ({name, brand}) => {
    return (
        <div>
            <p>{brand + " " + name}</p>
        </div>
    );
};

export default Name;