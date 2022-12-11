import { db, fb, auth, storage } from '../../config/firebase';
import { clearUser, loginFailed, loginSuccess, logoutFxn, signupFailed } from '../reducers/auth.slice';
import { v4 as uuidv4 } from 'uuid';
import { clearCandidateSlice } from '../reducers/candidate.slice';
import { clearJobSlice } from '../reducers/job.slice';

  export const signin = (user, history, setLoading) => async (dispatch) => {
    fb.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Signed In user is: ', user.email);
      dispatch(loginSuccess({ user }));
      history.push('/');
    })
    .catch((error) => {
      setLoading(false);
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error Code is: ', errorCode, + ' Msg is: ', errorMessage);
      dispatch(loginFailed(errorMessage));
    });

};


export const signup = (user, file, history, setLoading, url) => async (dispatch) => {
  console.log(user);
    fb.auth().createUserWithEmailAndPassword(
      user.email,
      user.password
  ).then((res)=>{
    return db.collection('Candidates').doc(res.user.uid).set({
      uid: res.user.uid,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      logo: url,
    })
  }).then(() => {
    alert('Registered Successfully✔😊')
    history.push("/");
  }).catch((err) => {
    console.error("Error signing up: ", err);
    var errorMessage = err.message;
    dispatch(signupFailed({ errorMessage }));
    setLoading(false);
  })
}


export const uploadImage = (user, file, history, setLoading) => async (dispatch) => {
  const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
  console.log('File Name: ', imageName);
  const uploadTask = storage.ref(`logo_images/${imageName}`).put(file);
  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setProgress(progress);
    },
    error => {
      console.log(error);
    },
    () => {
      storage
        .ref("logo_images")
        .child(imageName)
        .getDownloadURL()
        .then(url => {
          console.log('Image URL: ', url);
          dispatch(signup(user, file, history, setLoading, url));
        });
    }
  );
}

export const logout = (history) => async (dispatch) => {
  fb.auth().signOut().then(() => {
    dispatch(logoutFxn());
    console.log('logout successful!');
    dispatch(clearUser());
    dispatch(clearCandidateSlice());
    dispatch(clearJobSlice());
    history.push('/company/signin');
  }).catch((error) => {
    // An error happened.
    console.log('logout failed response: ', error.message);
  });
  
}