import React, {useState} from 'react'
import '../style/Basic.css';

const Basic = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [race, setRace] = useState('Black')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userDetails = {username, email, race};

        setIsPending(true)

        fetch('http://localhost:8000/userDetails', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(userDetails)
        }).then(()=> {
            console.log('new user added')
            setIsPending(false)
        })
    }

  return (
    <div className='container'>
        <h2 style={{color:"#005792"}}>Basic Form</h2>
        <main >
            <form onSubmit={handleSubmit} className='basic'>
                <label>Username</label>
                <input
                    type={"text"}
                    required
                    value={username}
                    onChange={(e)  => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input
                    type={"text"}
                    required
                    value={email}
                    onChange={(e)  => setEmail(e.target.value)}
                />

                <label>Race</label>
                <select value={race}
                        onChange={(e)  => setRace(e.target.value)}
                    >
                    <option value="Black">Black</option>
                    <option value="Caucasian">Caucasian</option>
                    <option value="Asian">Asian</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                </select>

               {!isPending && <button type='submit' className='basic-btn'>Submit</button>} 
               {isPending && <p>Adding User</p>}
            </form>

            <div>
                <h4 style={{color:"#00204a"}}>Preview section</h4>
                <p><span className='p-text'>Username:</span> {username}</p>
                <p><span className='p-text'>Email Address:</span> {email}</p>
                <p><span className='p-text'>Race:</span> {race}</p>
            </div>
           

        </main>   
    </div>
  )
}

export default Basic