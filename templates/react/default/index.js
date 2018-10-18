import { Mount } from '@core'

const initialState = {
    users: {
        status: 'GUEST'
    }
}
const root = document.querySelector('#root')
root.style.display = 'none' // fouc prevention

Mount(root, initialState)
