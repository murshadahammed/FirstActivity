import React, {useRef} from 'react';
import classes from './EmployeeForm.module.css'


 const EmployeeForm = () => {
    const emailInputRef = useRef();
  const passwordInputRef = useRef();

    const handleSubmitClick = (e) => {
        e.preventDefault();
        alert("Registered Successfully..!!");
    }
 
    return (
        <>
            <div className={classes.container}>
                <div className={classes.title}>
                    <form onSubmit={handleSubmitClick}>
                        <div className={classes.control}>
                          <label htmlFor='email'>Email</label>
                            <input type='email'
                             id='email'
                             minlength="11"
                             required 
                             placeholder="yourname@gmail.com" 
                             ref={emailInputRef} 
                            />
                        </div>
                        <div className={classes.control}>
                          <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                required
                                ref={passwordInputRef}
                            />
                        </div>   
                        <button type="submit" className={classes.button}> Enter </button>
                     </form>
                </div>
            </div>
            </>
        )
    }
    export default EmployeeForm;