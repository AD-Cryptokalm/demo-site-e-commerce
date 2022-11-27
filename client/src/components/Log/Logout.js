import axios from "axios";

const Logout = () => {

  const logout = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:3000/api/user/logout`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        localStorage.clear()
        window.location.href = "http://localhost:3001/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div onClick={logout}>
      <i
        className="fa-solid fa-right-from-bracket btn-logout"
        alt="se déconnecter"
      ></i>
    </div>
  );
};

export default Logout;
