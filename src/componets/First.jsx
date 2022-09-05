const First = ({ info, temp, und, functions }) => {

    
    let today = new Date().toDateString()


    return (
        <div>
            <div className='first'>
                <div className="one">
                    <h1 className='location'><span className='city'>{info?.name}</span>, <span className='contry'>{info.sys?.country}.</span></h1>
                    <p>{today}</p>
                </div>
                <div className="two">
                    <img src={`http://openweathermap.org/img/wn/${info.weather?.[0].icon}.png`} alt="icon of climate" />
                    <p className='description'>{info.weather?.[0].description}</p>
                </div>
                <div className="three">
                    <p className='temperature'>{temp} {und}</p>
                    <button className="changeUnd" onClick={functions}>Change to {und === '°C' ? "°F" : "°C"}</button>
                </div>
            </div>
        </div>
    );
};

export default First;