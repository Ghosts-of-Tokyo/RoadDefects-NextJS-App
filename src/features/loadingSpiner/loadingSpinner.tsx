import './spinerAnimation.css';

const LoadingSpinner = () => {
  return (
    <div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <div className='arrow-centre'>
        <div className='arrow' />
      </div>
      <span className='loadingText'>
        Загрузка
        <span className='loadingDots' />
      </span>
    </div>
  );
};
export default LoadingSpinner;
