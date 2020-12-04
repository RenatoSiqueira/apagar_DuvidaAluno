

import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto'>
            
            {/*<div className='text-right'>{props.currentDate}</div>**/}

            <h1 className='text-5xl text-center'>Now, you are page two</h1>
            <h3 className='text-5xl text-center'>Hello, I am Renato Domingues</h3>
            <h2 className='font-bold text-3xl'>My repositories on GitHub</h2>

            <p>GitHub stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>


            {/*<pre>{JSON.stringify(user, null, 2)}</pre>**/}

            {repos.map(repo => {
                return (
                    <div className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md' key={repo.id}>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} /Stars: {repo.stargazers_count}</p>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context){

    const { repos, user } = await getUser('renatodomingues')

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user 
        }
    }
}

export default Index 
