import './Tariff.scss';

export default function Tariff({ name, price, speed, text, classData }) {
    return (
        <div className='card'>
            <div className={classData}>{name}</div>
            <div>{price}</div>
            <div>{speed}</div>
            <p>{text}</p>
        </div>
    )
}
