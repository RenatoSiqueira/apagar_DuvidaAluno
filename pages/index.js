
import React from 'react'
import getUser from '../utils/getUser'

import { FiUsers } from 'react-icons/fi'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GoGist, GoStar } from 'react-icons/go'
import { GrLanguage } from 'react-icons/gr'
import PageHead from '../components/pageHead'
import Hero from '../components/Hero/index'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>

                <PageHead />

                <Hero />

                <div className='bg-white rounded-lg shadow-lg py-10 px-8 mx-8 md:mx-0  md:px-12'>
                    <h3 className='text-4xl text-purple text-center'>WHAT I DO</h3>
                    <div className='py-2'>
                    <p className='text-2xl text-center shadow-lg rounded-sm'>FREELANCER </p>
                    <p className='text-2xl text-center shadow-lg rounded-sm'>STUDYING BACKEND DEVELOPER </p>
                    <p className='text-2xl text-center shadow-lg rounded-sm'>STUDYING FRONTEND DEVELOPER </p>
                    <p className='text-2xl text-center shadow-lg rounded-sm'>STUDYING FULLSTACK MASTER SITE COURSE</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>Work Experience</h3>
                    <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg mx-8 md:mx-0 py-6 md:py-12 px-8 md:px-16'>
                        <div className='shadow-lg rounded-lg py-2 px-2'>
                            <div className='font-bold mt-3 mb3'>
                            Present
                            DRIVER APPLICATIONS
                            Uber and 99 Applications
                            Driver's license in category AD
                            BRAZIL, CAMPINAS - S.P.
                            </div>

                            <div className='font-bold mt-3 mb3'>
                            PRESENT
                            PRIVATE SECURITY
                            Group CampSeg
                            Concierge and Vigilant
                            BRAZIL, VINHEDO - S.P.
                            </div>
                        </div>
                        <div className='shadow-lg rounded-lg py-4 px-4'>
                            <div className='font-bold mt-3 mb3'>
                            2010-2018
                            PRIVATE SECURITY
                            Treze listas Ltda and Hagana Ltda
                            Vigilant
                            BRAZIL, CAMPINAS - S.P.
                            </div>

                            <div className='font-bold mt-3 mb3'>
                            2004 - 2010
                            SALES, WHOLESALE
                            Lojas cem S/A
                            Seller and sub Manager
                            BRAZIL, VINHEDO - S.P.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
                    <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg mx-8 md:mx-0 py-6 md:py-12 px-8 md:px-16'>
                        <div className='shadow-lg rounded-lg py-4 px-4'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>School</h4>
                            <h5 className='font-bold text-base normal-case uppercase text-pink-500'>Graduation degree complete</h5>
                            <h5 className='font-bold text-base normal-case uppercase'>Schools names Integração and Patriarca</h5>
                            <h4 className='font-bold'>Elementary and Secondary education</h4>
                            <h4 className='font-bold'>Brazil, Vinhedo-S.P.</h4>
                        </div>
                        <div className='shadow-lg rounded-lg py-4 px-4'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>College</h4>
                            <h5 className='font-bold text-base normal-case uppercase text-pink-500'>Graduation degree present</h5>
                            <h5 className='font-bold text-base normal-case uppercase'>Univerty name Anhanguera</h5>
                            <h4 className='font-bold'>Analyse system development</h4>
                            <h4 className='font-bold'>Brazil, Valinhos-S.P.</h4>
                        </div>
                    </div>
                </div>
                
                {/*
                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
                    <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
                        {[1, 2].map(i => (
                        <div className='border-solid border-l-2  px-12'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>School</h4>
                            <p className='text-2xl uppercase'>
                            <span className='text-base'>Graduation degree complete</span><br/>
                            <span className='text-base normal-case'>Schools names Integração and Patriarca</span><br/>
                            <span className='text-lg normal-case font-bold'>Elementary and Secondary education</span><br/>
                            BRAZIL, VINHEDO - S.P.
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
                **/}

                {/*<div className='text-right'>{props.currentDate}</div>**/}

                {/*<pre>{JSON.stringify(user, null, 2)}</pre>**/}

                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mx-1 md:mx-0 mt-5 md:mt-10 mb-3 md:mb-6'>Tech contributions</h3>
                    <p className='text-center'>
                       GitHub Stats: public repositories: <RiGitRepositoryFill className='inline-block' /> {user.public_repos} / public_gists: <GoGist className='inline-block' /> {user.public_gists} / followers: <FiUsers className='inline-block' /> {user.followers}
                    </p>
                    <div className='md:grid md:grid-cols-3 md:gap-2 my-3 md:my-6'>
                        {repos.map(repo => {
                            return (
                                <div key={repo.id} className='rounded bg-white mx-4 md:mx-0 my-2 md:my-0 p-2 md:p-4 hover:shadow-md'>
                                    <h3 className='font-bold border-2 border-pink-200 rounded hover:border-purple'> <a href={'https://github.com/' + repo.full_name}> {repo.full_name} </a> </h3>
                                    <p>Language: <GrLanguage className='inline-block' /> {repo.language} / Stars:<GoStar className='inline-block' /> {repo.stargazers_count}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p className='text-center text-white font-bold mx-4 md:mx-0 my-4 md:my-8 py-2 md:py-4 border-t-2 border-purple'>
                        You can find the source-code of this website here: <br/>
                        <span className='font-bold text-purple'> <a href=''>https://github.com/RenatoDomingues</a> </span>
                    </p>
                </div>
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
