import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading';

const MakeAdmin = () => { 
    const {data:users, isLoading, refetch} = useQuery('users', ()=> fetch('https://floating-chamber-93573.herokuapp.com/user',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    const role = users;
    console.log(role)
    if(isLoading){
        return <Loading/>
    }

    const makeAdmin =({email})=>{
        fetch(`https://floating-chamber-93573.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            refetch();
            toast.success('Successfully added admin')
        })
    }
    return (
        <div>
            <h2 className="text-5xl text-center">Make Admin</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role !== 'admin'&& <button onClick={()=>makeAdmin(user)} class="btn btn-xs btn-info">Make Admin</button>}</td>
                                    <td><button class="btn btn-xs btn-warning">Remove User</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;