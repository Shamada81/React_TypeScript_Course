import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary,'

}

interface ICardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
}

const Card: FC<ICardProps> = ({
         width,
         height,
         variant,
         children
    }) => {

    const [state, setState ] = useState(0)

    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid gray': 'none',
            background: variant === CardVariant.primary ? 'lightgray': 'none'
        }}>
            {children}
        </div>
    );
};

export default Card;