/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
  onValue,
  signInWithEmailAndPassword,
  off,
} from "../firebase.js";
import { object } from "prop-types";

const AuthContext = createContext();

function Provider({ children }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const currentDataRef = useRef(null);
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const onsubmitSignUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user.uid));
        setUser(user);

        console.log("User created:", user.uid);
        alert("User created:", user.uid);
      })
      .catch((error) => {
        // Handle errors during user creation
        console.error("Error creating user:", error.message);
        alert("Error creating user:", error.message);
      });
  };
  const onSubmitlogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Login:", user.uid);
        alert("User Login:", user.uid);

        localStorage.setItem("user", JSON.stringify(user.uid));
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:", errorCode);
        console.log("errorMessage:", errorMessage);
      });
  };
  const db = database;
  const updatePresence = (userId, status) => {
    const userStatusRef = ref(db, `/waitingRoom/${userId}`);
    set(userStatusRef, { online: status });
  };

  const createQuizRoom = (user1, user2) => {
    // Implement logic to create a quiz room in the database

    const quizRoomKey = `${user1}-${user2}`;

    set(ref(database, `/quizRooms/${quizRoomKey}`), {
      users: {
        [user1]: { score: 0 },
        [user2]: { score: 0 },
      },
      // Add more quiz-related information as needed
    });
    // You can redirect users to the quiz room or perform other actions here
  };
  const removeUserFromWaitingRoom = (userId) => {
    const userStatusRef = ref(db, `/waitingRoom/${userId}`);
    set(userStatusRef, { online: false }); // Set online status to false to "remove" the user
  };

  const presenceRef = ref(database, "/waitingRoom");
  const quizRoomsRef = ref(database, "/quizRooms");
  const presenceListenerRef = useRef(null);
  useEffect(() => {
    const ref = onValue(quizRoomsRef, (snapshot) => {
      console.log("waiting", waiting);
      if (!waiting) return;
      console.log("snapshot");
      if (!snapshot?.val()) return;
      const rooms = snapshot.val();
      for (const [roomKey, users] of Object.entries(rooms)) {
        console.log("roomKey", roomKey);
        console.log("users", users);
        if (users.users === undefined) continue;
        const valid = Object.keys(users.users).includes(user);

        // Corrected the typo here
        Object.keys(users.users).forEach((currentUser) => {
          // Assuming you want to set the state based on the current user in the loop
          console.log("currentUser", currentUser);
          if (currentUser !== user) {
            setUser2(currentUser);
          } else {
            setUser1(user);
          }
        });

        console.log("valid", valid);
        if (valid) setWaiting(false);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      if (quizRoomsRef) {
        off(quizRoomsRef, ref);
      }
    };
  }, [waiting, user, user1, user2]); // Include user1 and user2 in the dependency array if they are state variables.

  useEffect(() => {
    presenceListenerRef.current = onValue(presenceRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);
      if (data) {
        currentDataRef.current = data;
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      if (presenceListenerRef.current) {
        off(presenceRef, presenceListenerRef.current);
      }
    };
  }, []);

  useEffect(() => {}, []);

  const searchPlayer = () => {
    updatePresence(user, true);
    const data = currentDataRef.current;
    if (!data) return;
    const onlineUsers = Object.keys(data).filter(
      (userId) => data[userId].online
    );
    setWaiting(true);

    if (onlineUsers.length >= 2) {
      const user1 = onlineUsers[0];
      const user2 = onlineUsers[1];

      // Create a quiz room for the paired users
      createQuizRoom(user1, user2);

      // Remove the paired users from the waiting room
      removeUserFromWaitingRoom(user1);
      removeUserFromWaitingRoom(user2);
    }
  };

  const handleAnswer = () => {
    console.log("answer");
    console.log(user);
    if (user === user1) {
      setScore1(score1 + 1);
    } else {
      setScore2(score2 + 1);
    }
    console.log("score1", score1);
    console.log("score", score2);
  };

  return (
    <AuthContext.Provider
      value={{
        password,
        setPassword,
        email,
        setEmail,
        user,
        setUser,
        onsubmitSignUp,
        searchPlayer,
        onSubmitlogin,
        waiting,
        user1,
        user2,
        handleAnswer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { Provider };
export default AuthContext;
