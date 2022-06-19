import { createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()
//NOTE: Here You Have To Use your own personal token 
//otherwise it won't goona work
//You will not goona see any individual user Output!!!
const GITHUB_URLL = process.env.REACT_APP_GITHUB_URLL
const GITHUB_TOKENN = process.env.REACT_APP_GITHUB_TOKENN

export const GithubProvider =({children})=>{
   
  const initialState ={
    users:[],
    user:{},
    repos: [],
    loading:false
  }
  

const [state,dispatch] = useReducer(githubReducer, initialState)

//get search results

    const searchUsers = async(text)=>{

        setLoading()

        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URLL}/search/users?${params}`,
        {
            headers:{
                Authorization:`token ${GITHUB_TOKENN}`
            }
        })
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
     }



     //get single user

    const getUser = async(login)=>{

        setLoading()

        
        const response = await fetch(`${GITHUB_URLL}/users/${login}`,
        {
            headers:{
                Authorization:`token ${GITHUB_TOKENN}`
            }
        })

        if(response.status === 404){
            window.location = '/notfound'
        }else{
            const data = await response.json()
        dispatch({
            type: 'GET_USER',
            payload: data
        })
        }
       
     }
     
     const getUserRepos = async (login) => {
        setLoading()
    
        const params = new URLSearchParams({
          sort: 'created',
          per_page: 10,
        })
    
        const response = await fetch(
          `${GITHUB_URLL}/users/${login}/repos?${params}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKENN}`,
            },
          }
        )
    
        const data = await response.json()
    
        dispatch({
          type: 'GET_REPOS',
          payload: data,
        })
      }
       


     //clear user from state
     const clearUsers = ()=>dispatch({
        type:'CLEAR_USERS'
     })

     //set loading

     const setLoading = ()=>dispatch({
        type:'SET_LOADING'
     })


     return<GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
     }}>
        {children}
     </GithubContext.Provider>
}

export default GithubContext