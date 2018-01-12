import React, { Component } from 'react';
import { connect } from 'react-redux';
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


class Dashboard extends Component {
    render() {
        const {
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
        } = this.props
        return (
            <div>
                <input placeholder="First name" type="text" onChange={(e) => updateFirstName(e.target.value)} />
                <input placeholder="Last name" type="text" onChange={(e) => updateLastName(e.target.value)} />

                <select onChange={(e) => gender(e.target.value)}>
                    <option type="text" value="Home Purchase" >Male</option>
                    <option type="text" value="Refinance" >Female</option>
                </select>
                
                <select onChange={(e) => hairColor(e.target.value)}>
                    <option type="text" value="Home Purchase" >Brown</option>
                    <option type="text" value="Refinance" >Black</option>
                    <option type="text" value="Refinance" >Blonde</option>
                    <option type="text" value="Refinance" >Red</option>
                    <option type="text" value="Refinance" >Gray</option>
                </select>
                
                <select onChange={(e) => eyeColor(e.target.value)}>
                    <option type="text" value="Home Purchase" >Brown</option>
                    <option type="text" value="Refinance" >Black</option>
                    <option type="text" value="Refinance" >Blue</option>
                    <option type="text" value="Refinance" >Green</option>
                </select>

                <input placeholder="Hobby" type="text" onChange={(e) => updateLastName(e.target.value)} />

                <button>Submit</button>

            </div >
        )
    }
}
function mapStateToProps(state) {
    const {
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
    } = state;
    return {
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
    }
}

export default connect(mapStateToProps, {
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
})(Dashboard)