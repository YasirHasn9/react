// actions are plain js 
// that must have an action type describe the action

// and an optional payload and you shouldnt pass function or promises 
// they things that don't serialize to json

// immutably data 
//  1.numbers
// 2.strings
// 3.boolean
// 4.null


let obj = {
    name :" Yasir",
    address: {
        state: "California"
    }
}

let newObj = {...obj  , address: {...obj.address}}

// try to avoid as much as you can the deep clone 
// 1. deep clone is expensive , in will needlessly slow the app
// 2.deep cloning is wasteful since you only need to clone 
// have changed
// 3.deep cloning cause unnecessary render because react will render on 
// every change 


// we have one store in the redux but we can have multi reducers
// so how can the action determine which reducer to call 
// this is depending on the switch by finding the right state to change
// by finding the action type
// this is why we return the state that pass to them at the end of the switch statement 
// all reducer will be called and only the one with the targeted action will produce the 
// change 
