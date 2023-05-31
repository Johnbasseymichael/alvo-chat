import React, { useState } from 'react'
import { Logo } from '../component/Logo'
import './styles/register.scss'
import { BsFillImageFill } from "react-icons/bs";
import Loader from '../assets/Loader'


import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";

import { useNavigate, Link } from 'react-router-dom'






const Register = () => {
    const [selectedPic, setSelectedPic] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)


            const storageRef = ref(storage, file.name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress < 100 ? setLoading(true) : setLoading(false);
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },

                (err) => {
                    setError(true)
                    console.error(err);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })

                        await setDoc(doc(db, 'users', res.user.uid), {
                            displayName,
                            email,
                            password,
                            photoURL: downloadURL,
                            uid: res.user.uid,
                            isOnline: false
                        })

                        await setDoc(doc(db, 'userChats', res.user.uid), {});
                        navigate('/')
                    });
                }
            );


        } catch (err) {
            setError(true)
            console.error(err);
        }

    }




    return (
        <div className="register-container">

            <div className='register'>
                <Logo />
                {error && <p style={{ color: 'red' }}>Something went wrong</p>}
                <span className='title'>Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display name' />
                    <input type="text" placeholder='Enter your email' />
                    <input type="password" placeholder='Create your password' />
                    <input onChange={(e) => setSelectedPic(e.target.files[0])} style={{ display: "none" }} type="file" id='profile-pic' />
                    <label htmlFor="profile-pic">{selectedPic ? `${selectedPic.name}` : <AddPic />}</label>
                    {loading ? <Loader /> : <button>Sign up</button>}

                </form>

                <p>You do have an account? <Link to="/login"><span className='login-page-link'>Login</span></Link></p>
            </div>
        </div>
    )
}

export default Register;


const AddPic = () => {
    return (
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <BsFillImageFill />
            <span style={{ fontSize: '1rem' }}>Add a photo</span>
        </div>
    )
}

