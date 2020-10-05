import profileReducer, { addPostActionCreator, deletePost } from "../profile-reducer";
import ReactDOM from "react-dom";
import App from "../../../App";
import React from "react";

describe('Profile-reducer test', () => {
  let state = {
    postData: [
      { id: 1, message: 'Hi, how are you?', likes: 12 },
      { id: 2, message: 'It\'s my first post', likes: 11 },
      { id: 3, message: 'Blabla', likes: 11 },
      { id: 4, message: 'Dada', likes: 11 }
    ]
  };
  
  it('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(5);
  
  });
  
  it('message of new post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.postData[4].message).toBe("it-kamasutra.com");
  });
  
  it('after deleting length of messages should be decrement', () => {
    let action = deletePost(4);

    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(3);
  });
  
  it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(999999999);

    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
  });
});
