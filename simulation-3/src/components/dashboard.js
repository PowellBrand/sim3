import React from 'react';
import {connect} from 'react-redux';
import {
    updateFirstName,
    updateLastName,
    gender,
    hairColor,
    eyeColor,
    hobby,
    birthDay,
    birthdayMonth,
    birthDayYear,
    updateImage
} from '../ducks/reducer';


export default function Dashboard() {
    return (
        <div>
            <a><button>Button</button></a>

        </div>
    )
}