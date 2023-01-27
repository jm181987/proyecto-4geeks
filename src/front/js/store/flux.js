const getState = ({ getStore, getActions, setStore }) => {
  const apiURL = process.env.BACKEND_URL + "/api";
  return {
    store: {
      artists: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: "",
      refreshToken: "",
      profilePic: "",
      status: "",
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      signUp: async (email, password, phoneNumber = "") => {
        const params = {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(`${apiURL}/signup`, params);
        if (resp.status !== 201) {
          return { code: resp.status, msg: resp.statusText };
        }

        return { code: 201, msg: "Usuario registrado" };
      },

      login: async (email, password) => {
        const params = {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(`${apiURL}/login`, params);
        if (resp.status !== 200) {
          return { code: resp.status, msg: resp.statusText };
        }
        const data = await resp.json();
        console.log(data);
        const token = data.token;
        const refreshToken = data.refreshToken;

        setStore({ token, refreshToken });
        setStore({ status: true });
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        let picResponse = await fetch(`${apiURL}/getphoto`, {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        });
        let profilePic = (await picResponse.json()).pictureUrl;
        setStore({ token: token, profilePic }); //reseteo todo el store
        return { code: 200, msg: "Usuario registrado" };
      },

      logout: async () => {
        const store = getStore();
        console.log(store);
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
        };
        const resp = await fetch(`${apiURL}/logout`, params);
        if (resp.status !== 200) {
          return { code: resp.status, msg: resp.statusText };
        }

        setStore({ token: "" });
        localStorage.removeItem("token");
        return { code: 200, msg: "Sesion cerrada" };
      },

      profiledata: async () => {
        const store = getStore();
        console.log(store);
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
        };
        const resp = await fetch(`${apiURL}/profiledata`, params);
        if (resp.status !== 200) {
          return { code: resp.status, msg: resp.statusText };
        }

        setStore({ token: "" });
        localStorage.removeItem("token");
        return { code: 200, msg: "Sesion cerrada" };
      },

      getArtists: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}

				const request = await fetch(`${apiURL}/artists`, settings)
				const json = await request.json()
				const data = json
				setStore({ artists: data.results })
			},
    },
  };
};

export default getState;
