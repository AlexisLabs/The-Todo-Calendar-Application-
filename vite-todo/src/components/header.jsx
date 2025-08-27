import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 className='App' style={{ marginBottom: '20px' }}>The Application With A Calendar, Notes, Todo List</h1>
      <div style={{ display: 'inline-block', marginBottom: '20px' }}>
        <Link className="sign-in-button"
          style={{
            color: '#000000ff',
            padding: '10px 20px',
            borderRadius: '25px',
            marginRight: '10px',
            border: 'none',
            cursor: 'pointer',
          }}to="SignIn">Sign In</Link>
      
        <Link className="sign-up-button"
          style={{
            color: '#000',
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
          }}to="SignUp">Sign Up</Link>
      </div>
      <div style={{ marginTop: '10px' }}>
        <span style={{ color: '#d3b4fc' }}></span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
  <figure
    style={{
      position: 'relative',
      width: '80%',
      maxWidth: '800px',
      paddingBottom: '50.37%',
      height: '0',
      margin: '0',
    }}
  >
    <img
      src="/mbp.svg"
      alt="MacBook Placeholder"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}
    />
    <img
      src="/place.png"
      alt="Phone Placeholder"
      style={{
        position: 'absolute',
        top: '11.3%',
        left: '10.3%',
        width: '79.4%',
        minWidth: '2%',
        height: '73.2%',
        // minHeight: '82%',
        objectFit: 'cover',
        borderRadius: 25,
      }}
    />
    </figure>
    </div>

    </div>
  );
};

export default HeaderMain;