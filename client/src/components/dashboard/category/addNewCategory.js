import React, { useContext } from 'react';
import DashboardHOC from '../DashboardHOC';
import { UserContext } from '../../../context/userState/userContext';
import CatForm from './catForm';

function AddNewCategory() {
  const { addUser } = useContext(UserContext);
  const onFinish = (values) => {
    console.log(values);
    // addUser(values);
  };
  return (
    <>
      <CatForm onFinish={onFinish} />
      {/* <div>dddd</div> */}
    </>
  );
}

export default DashboardHOC(AddNewCategory);