const initialState = {
    fistname: '',
    lastname: '',
    gender: '',
    haircolor: '',
    eyecolor: '',
    hobby: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    img: ''
}

//43E
//action types
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_GENDER = 'UPDATE_GENDER';
const UPDATE_HAIRCOLOR = 'UPDATE_HAIRCOLOR';
const UPDATE_EYECOLOR = 'UPDATE_EYECOLOR';
const UPDATE_HOBBY = 'UPDATE_HOBBY';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const UPDATE_BIRTHDAY_MONTH = 'UPDATE_BIRTHDAY_MONTH';
const UPDATE_BIRTHDAY_YEAR = 'UPDATE_BIRTHDAY_YEAR';
const UPDATE_IMAGE = 'UPDATE_IMAGE';

//43F
//action builders
export function updateFirstName(){
    return{
        type: UPDATE_FIRST_NAME,
        payload: firstname
    }
}
export function updateLastName(){
    return{
        type: UPDATE_LAST_NAME,
        payload: lastname
    }
}
export function gender(){
    return{
        type: UPDATE_GENDER,
        payload: gender
    }
}
export function hairColor(){
    return{
        type: UPDATE_HAIRCOLOR,
        payload: haircolor
    }
}
export function eyeColor(){
    return{
        type: UPDATE_EYECOLOR,
        payload: eyecolor
    }
}
export function hobby(){
    return{
        type: UPDATE_HOBBY,
        payload: hobby
    }
}
export function birthDay(){
    return{
        type: UPDATE_BIRTHDAY,
        payload: birthdayDay
    }
}
export function birthdayMonth(){
    return{
        type: UPDATE_BIRTHDAY_MONTH,
        payload: birthdayMonth
    }
}
export function birthDayYear(){
    return{
        type: UPDATE_BIRTHDAY_YEAR,
        payload: birthDayYear
    }
}
export function updateImage(){
    return{
        type: UPDATE_IMAGE,
        payload: img
    }
}

//43D
//reducer switch
export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_FIRST_NAME:
        return Object.assign({}, state, {firstname: action.payload})

        case UPDATE_LAST_NAME:
        return Object.assign({}, state, {lastname: action.payload})

        case UPDATE_GENDER:
        return Object.assign({}, state, {gender: action.payload})
        
        case UPDATE_HAIRCOLOR:
        return Object.assign({}, state, {haircolor: action.payload})
        
        case UPDATE_EYECOLOR:
        return Object.assign({}, state, {eyecolor: action.payload})
       
        case UPDATE_HOBBY:
        return Object.assign({}, state, {hobby: action.payload})
        
        case UPDATE_BIRTHDAY:
        return Object.assign({}, state, {birthdayDay: action.payload})
        
        case UPDATE_BIRTHDAY_MONTH:
        return Object.assign({}, state, {birthdayMonth: action.payload})
        
        case UPDATE_BIRTHDAY_YEAR:
        return Object.assign({}, state, {birthdayYear: action.payload})
        
        case UPDATE_IMAGE:
        return Object.assign({}, state, {img: action.payload})
    }
}

export default reducer;