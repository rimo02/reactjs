import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rimo02').
    //         then(response => response.json()).
    //         then(data => {
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="" className='w-50 h-auto m-auto my-2 rounded-3xl' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rimo02')
    return response.json()
}