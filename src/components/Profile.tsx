import { FunctionComponent, useEffect, useState } from "react";
import { getUserByEmail } from "../services/usersService";
import User from "../interfaces/User";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  let [userInfo, setUserInfo] = useState<User>();
  useEffect(() => {
    getUserByEmail(sessionStorage.getItem("userEmail") as string)
      .then((res) => {
        if (res.data.length) {
          setUserInfo(res.data[0]);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="card">
        <div className="card-title">{userInfo?.name}</div>
        <div className="card-body">
          <div className="card-text">{userInfo?.email}</div>
          {userInfo?.isAdmin ? <p>This user is admin</p> : <p>Regular user</p>}
        </div>
      </div>
    </>
  );
};

export default Profile;
