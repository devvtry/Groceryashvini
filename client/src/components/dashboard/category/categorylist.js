import React, { useContext } from 'react';
import DashboardHOC from '../DashboardHOC';
import UserTable from '../table/UserTable';
import { UserContext } from '../../../context/userState/userContext';
import { Link } from 'react-router-dom';
import CustomLoader from '../../common/CustomLoader';

const index = '2';
function CateListPage() {
  const { users, loading } = useContext(UserContext).state;

  return (
    <div>
      <Link
        to="/dashboard/add-new-category"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new category
      </Link>
      {!loading ? (
        <UserTable data={users} />
      ) : (
        <CustomLoader text={'Getting categories from DB! Hold on gee...'} />
      )}
    </div>
  );
}

export default DashboardHOC(CateListPage, index);
