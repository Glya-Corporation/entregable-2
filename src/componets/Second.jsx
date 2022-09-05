import coordinates from '../assets/img/coordinates.svg'
import humidity from '../assets/img/humidity.svg'
import pressure from '../assets/img/pressure.svg'
import windSpeed from '../assets/img/wind-speed.svg'

const Second = ({info}) => {
    return (
        <div>
            <div className='second'>
                <p className='latitude'><span><img className='icon-temp' src={coordinates} alt="" /></span> Latitude: {info.coord?.lat}</p>
                <p className='lenght'><span><img className='icon-temp' src={coordinates} alt="" /></span> Lenght: {info.coord?.lon}</p>
                <p className='humidity'><span><img className='icon-temp' src={humidity} alt="" /></span> Humidity: {info.main?.humidity} %</p>
                <p className='pressurization'><span><img className='icon-temp' src={pressure} alt="" /></span> Pressurization: {info.main?.pressure} hPa</p>
                <p className='wind-speed'><span><img className='icon-temp' src={windSpeed} alt="" /></span> Wind speed: {info.wind?.speed} m/s</p>
            </div>
        </div>
    );
};

export default Second;