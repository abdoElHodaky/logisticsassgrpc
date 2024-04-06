











let user:User=<User>{...req.body}
    AppDataSource.manager.findOneOrFail(User,{where:{
        username:user.username,
        passwordHash:user.passwordHash,
        id:user.id
    }}).then(d=>{
        res.json({message:"Login Succefully",user:d})
    }).catch(err=>{
        res.json({message:"Login failed"})
    })
