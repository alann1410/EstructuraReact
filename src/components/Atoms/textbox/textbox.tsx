import React, {Fragment } from 'react';

interface placeholderName{
    title: string
}

function GenericTextbox ({title}: placeholderName) {
        return (
            <Fragment>
                {/* <form>
                <div className="form-group">
                    <label>Email address</label> */}
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder={title}></input>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
            </Fragment>
        );
}

function Password({title}: placeholderName){
    <Fragment>
        <input type="password" className="form-control" placeholder={title}></input>
    </Fragment>
}

export default GenericTextbox;
export {Password};