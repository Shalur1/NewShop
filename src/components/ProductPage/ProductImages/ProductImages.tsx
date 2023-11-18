import React, { useState } from 'react';
import s from './ProductImages.module.css';

interface ProductImagesProps {
    gallery: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ gallery }) => {
    const [chosenImageNumber, setChosenImageNumber] = useState(0);

    const setChosenImage = (number: number) => {
        setChosenImageNumber(number);
    };

    return (
        <div className={s.ProductImages}>
            {gallery && (
                <div className={s.Images}>
                    <div className={s.ChooseImages}>
                        {gallery.length > 1 &&
                            gallery.map((elem, index) => (
                                <img
                                    key={index}
                                    onClick={() => setChosenImage(index)}
                                    src={elem}
                                    alt=""
                                />
                            ))}
                    </div>
                    <div className={s.ChosenImage}>
                        <img src={gallery[chosenImageNumber]} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductImages;
