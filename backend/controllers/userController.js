import User from "../models/User.js"

// new User creation 

export const createUser = async (req,res)=>{

    const newUser = new User(req.body);

    try {
 
        const savedUser = await newUser.save()
        res.status(200).json({
            success:true,
            message:'succesfully created',
            data:savedUser,
        });
         
    } catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to create. Try again '
        });
    }
}

// update User
export const updateUser = async(req,res)=>{

    const id = req.params.id;
    console.log("id : ",id);

    try{

        const updatedUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true});

        res.status(200).json({
            success:true,
            message:'succesfully updated',
            data:updatedUser,
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to update',
        });
    }
}

// delete User
export const deleteUser = async(req,res)=>{

    const id = req.params.id;
    console.log("id : ",id);

    try{

        await User.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'succesfully Deleted',
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to Delete',
        });
    }
}

// getSingleUser User
export const getSingleUser = async(req,res)=>{

    const id = req.params.id;

    try{

        const user = await User.findById(id);

        res.status(200).json({
            success:true,
            message:'This is the User that you are looking for ',
            data:user,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
    }
}


// getAllUser User
export const getAllUser = async(req,res)=>{

    try{

        const users = await User.find({});

        res.status(200).json({
            success:true,
            message:'These are all the Users that you are looking for ',
            data:users,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
        
    }
};
