import React, {FC, useState} from 'react';
import s from './Image.module.css';
import Button from "../Button/Button";

interface ImageProps {
    images: any;
}

const Image: FC<ImageProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={s.imageContainer}>
            <img
                src={images[0]}
                className={s.image}
                onClick={toggleModal}
            />
            <div className={!isOpen ? s.modal : `${s.modal} ${s.open}`} onClick={toggleModal}>
                <div className={s.modalContent} onClick={stopPropagation}>
                    <img src={images[currentImageIndex]} className={s.modalImage} />
                    <div className={s.Navigation}>
                        <Button onClick={prevImage}>Previous</Button>
                        <Button onClick={nextImage}>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Image