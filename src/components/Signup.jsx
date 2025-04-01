import React, { useState } from 'react';

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        console.log(data);
    };

    const [visible, setVisible] = useState(false);

    const visiblePassword = () => {
        setVisible(!visible);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <div className="input-group">
                        <input
                            type={visible ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                        />
                        <div className="input-group-append">
                            <button
                                onClick={visiblePassword}
                                type="button"
                                className="btn btn-outline-secondary"
                            >
                                <i className={visible ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
