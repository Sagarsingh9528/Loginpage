import React from "react";




export default function AccountSettings() {

   
    const user = JSON.parse(localStorage.getItem("user"));

    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       const updatedUser = { ...user, profileImage: reader.result };
    //       localStorage.setItem("user", JSON.stringify(updatedUser));
    //       window.location.reload();
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };


  return (
    <div className="bg-white p-2 shadow-md w-80 ">
      <h1 className="text-1xl ">Account Settings</h1>

      <div className="flex">
        <div className="mt-2">
        {user?.profileImage && (
          <img src={user?.profileImage} alt="profile" className="w-24 h-24 rounded-full object-cover" />
        )}
        </div>
        <div className="mt-3 ml-2">
            <h2 className="text-2xl font-bold">{user?.fullName}</h2>
            <p>{user?.email}</p>
        </div>
       
      </div>
      <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum itaque vel voluptatem obcaecati doloribus!</p>
        </div>
    </div>
  );
}
