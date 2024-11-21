import { UsersApi, createApiClient } from "./api/users";

const api = createApiClient("blackboard")

api.getLearnapipublicv1users({
    auth: {
        username: "admin",
        password: "admin"
    },
    queries: {
        "availability.available": "Yes",
        lastLogin: "2021-01-01T00:00:00Z",
    }
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    })