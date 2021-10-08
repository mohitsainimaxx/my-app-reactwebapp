import Loader from "react-loader-spinner";

function Home() {
  return (
  <>
   <Loader
        type="Puff"
        color="#00BFFF"
        height={'100vh'}
        width={'100vw'}
        timeout={1500} //3 secs
      />
  <img style={{width:'100vw',margin:'auto'}} src={process.env.PUBLIC_URL+'/psd.png'} />
  </>
  );
}

export default Home;
