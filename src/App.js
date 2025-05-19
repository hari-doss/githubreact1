import { useState } from "react";
import UserTable from "./tables/Userfile";
import AddUserForm from "./forms/AddUserform";
import EditUserForm from "./forms/EditUserForm";

function App() {

const UserData = [
  { id: 1, name: 'Logesh', username: 'jvlogesh' },
  { id: 2, name: 'Guru', username: 'jvguru' },
  { id: 3, name: 'Murugan', username: 'jvmurugan'}  
];
const addUser = (user)=>{
  user.id = users.length +1;
  setUsers([...users,user])
}
const deleteUser = (id)=>{
  setUsers(users.filter((user)=>user.id!==id))
}

const [users, setUsers] = useState(UserData);
const [editing,setEditing] = useState(false)


const initialFormState = { id: null, name: '', username: '' }; 
const [currentUser,setcurrentUser]=useState(initialFormState);
const editRow = (user)=>{
  setEditing(true);
  setcurrentUser({id:user.id,name:user.name,username:user.username});
}
const updateUser = (id,updateUser)=>{
setEditing(false);
setUsers(users.map((user)=>(user.id===id?updateUser:user)))
}
return (
  <div className="continer">
    <h1>Crud App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
       { editing?(<div><h2>Edit User</h2>
       <EditUserForm 
  setEditing={setEditing}
  currentUser={currentUser}
  updateUser={updateUser}  
/> 
          </div>):(<div>
          <h2>Add user</h2>
          <AddUserForm addUser = {addUser}/>          
          </div>          
          )}
      </div>
      <div className="flex-large">
        <h2>View Users</h2>
        <UserTable  editRow = {editRow} deleteUser = {deleteUser} users={users}/>
      </div>
    </div>
  </div>
);
}
export default App; 
