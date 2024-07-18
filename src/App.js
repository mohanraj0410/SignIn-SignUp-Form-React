import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import DashBoard from './components/DashBoard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUserDetails } from './components/Store/userSlice';

function App() {
  // const storeUserData = useSelector((store) => store.user.user)

  // const dispatch = useDispatch()

  // let filterString = localStorage.getItem("signUpUsers") || "[]";
  // let filter = JSON.parse(filterString);


  // if (storeUserData.length === 0) {
  //   if (filter.length > 0) {
  //     dispatch(addUserDetails(filter))
  //   }
  // }



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUpPage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='dashboard' element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
