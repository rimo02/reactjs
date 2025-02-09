import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
    return (
        <div>User: {userId}</div>
        // iske baad apne upar se dstabase call kari ya kuch aur
    )
}

export default User