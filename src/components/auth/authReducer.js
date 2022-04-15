import { resistencia } from "../../data/mozos";

export const authReducer = (state = [], action) => {
    switch (action.type) {
        case 'r':

            return (action.i + 1 !== 7) ? resistencia[action.i + 1] : resistencia[0]
        case 'l':
            console.log(action.i - 1);
            return (action.i - 1 !== -1) ? resistencia[action.i - 1] : resistencia[6]

        default:
            break;
    }

}
