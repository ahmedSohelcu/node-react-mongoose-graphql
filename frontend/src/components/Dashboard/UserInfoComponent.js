import React from 'react'

export default function UserInfoComponent() {
  return (
    <div>
      <div className="container mx-auto bd-white row"> 
        {/* {user ? JSON.stringify(user) : ''} */}
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-header">
              Dashboard              
            </div>
            <div className="profile_picture">
                {/* <img src={props.user.picture}/> */}
            </div>
            {/* {props ? JSON.stringify(props.user) : '' } */}
            <ul className="list-group list-group-flush">              
              <li className="list-group-item"><strong>Name : </strong>Ahmed  ullah</li> 
              <li className="list-group-item"><strong>Given Name : </strong>  sfjs dafsadf s sf </li>
              <li className="list-group-item"><strong>Family Name : </strong> fdsaf sf sadfsa fsf</li>
              <li className="list-group-item"><strong>Nick Name : </strong> fdsfds fdsafsafdsafsa</li>
              <li className="list-group-item"><strong>Email : </strong>sf dsfs f dfs sf s</li>
              <li className="list-group-item"><strong>Email Verified: </strong>ds fsfdsfsd fdsfsf s</li>
            </ul>
          </div>
        </div>         
      </div>
    </div>
  )
}
