const HeaderMain = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>The Application With A Calendar, Notes, Todo List</h1>
      <div style={{ display: 'inline-block', marginBottom: '20px' }}>
        <button
          style={{
            backgroundColor: '#6a0dad',
            color: '#020202ff',
            padding: '10px 20px',
            borderRadius: '25px',
            marginRight: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
        <button
          style={{
            backgroundColor: '#d3b4fc',
            color: '#000',
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <span style={{ color: '#d3b4fc' }}></span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <figure style={{ position: 'relative', width: '80%', maxWidth: '800px', paddingBottom: '50.37%', height: '0', margin: '0' }}>
          <img src='/mbp.svg' alt="MacBook Placeholder" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} />
          <img src='/place.png' alt="Phone Placeholder" style={{ position: 'absolute', top: '10.5%', left: '16.5%', width: '67.5%', height: '69.5%', objectFit: 'cover' }} />
        </figure>
      </div>
    </div>
  );
};

export default HeaderMain;