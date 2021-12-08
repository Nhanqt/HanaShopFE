import React from "react";

function Register(){
    return (
        <div>
            <div>     
                <form style={{display:"flex",flexDirection:"column"
                ,border:"1px solid #ab2053",borderRadius:"10px",maxWidth:"400px",margin:"10% auto",padding:"14px"}}>
                <h1 style={{textAlign:"center"}}>Register</h1>
                    <label>
                        <input style={{width:"390px",marginBottom:"10px",height:"20px"}} type="text" name="name" placeholder="Username" />
                    </label>
                    <label>
            
                        <input style={{width:"390px",marginBottom:"10px",height:"20px"}} type="password" name="name" placeholder="Password"/>
                    </label>
                    <label>
                        
                        <input style={{width:"390px",marginBottom:"10px",height:"20px"}} type="password" name="name" placeholder="Re-password" />
                    </label>
                    <label>
                        <input  style={{width:"390px",marginBottom:"10px",height:"20px"}} type="text" name="name" placeholder="Address" />
                    </label>
                    <label>
                        <input style={{width:"390px",marginBottom:"10px",height:"20px"}} type="text" name="name" placeholder="Phone" />
                    </label>
                    <input type="submit"  value="Register" style={{marginTop:"10px",background:"#ab2053",color:"#ffff",border:"1px solid #ab2053",height:"30px"}}/>
                </form>
            </div>
        </div>
    )
}

export default Register