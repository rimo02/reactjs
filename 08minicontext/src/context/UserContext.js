import React from 'react'

const UserContext = React.createContext()
export default UserContext;

// context ye samjho ek global variable so  that suppose 
// context apne aap ek provider hai so sabko iske andar wrap kardo, haar andar ke components ko andar harr components ko usercontexts ke through variable ka acess milega
{/* <UserContext>
    <Login>
        <Card></Card>
    </Login>
</UserContext> */}

