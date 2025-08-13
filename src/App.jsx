import './App.css'
// import { Routes, Route } from "react-router";
// import { HomePage } from './pages/HomePage';
import Navbar from './components/shared/Navbar';

function App(){

const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") || "dark");
  const { loading, isAuthenticated } = useSelector(state => state.authSlice);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  const  handleThemeChange = useCallback(() => {  
      const theme = darkTheme ? "light" : "dark";
      localStorage.setItem("theme", theme);
      setDarkTheme(!darkTheme);
  }, [darkTheme]);

  return(
    // <>
    // <Toaster position="top-right" />
    
    // <div className={`${darkTheme? "dark": ""} flex flex-col min-h-screen bg-white dark:bg-gray-900`}> 
    //   {loading ? 
    //     <LoadingPage />
    //     : 
    //     <Routes>
    //       <Route path="/" element={<Layout darkTheme={darkTheme} handleThemeChange={handleThemeChange} />} ></Route>
    //       <Route index element={ <HomePage /> }/>


    //     </Routes>
    //   }
    // </div>
    // </>
    <>
    <Navbar/>
    </>
  )




}

export default App;