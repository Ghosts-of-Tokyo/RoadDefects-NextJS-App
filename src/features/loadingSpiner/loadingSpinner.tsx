import './spinerAnimation.css'

const LoadingSpinner = () => {
    return (
        <div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <div className="arrow-centre">
            <div className="arrow"></div>
          </div>
          <span className='loadingText'>Загрузка<span className="loadingDots"></span></span>
        </div>
      );
  };
  export default LoadingSpinner;
  