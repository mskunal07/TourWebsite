

import Tour from "../models/Tour.js"

// new tour creation 

export const createTour = async (req,res)=>{

    const newTour = new Tour(req.body);

    try {
        console.log("Entered in tourcontroller ")
        const savedTour = await newTour.save()
        res.status(200).json({
            success:true,
            message:'succesfully created',
            data:savedTour,
        });
         
    } catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to create. Try again '
        });
    }
}

// update tour
export const updateTour = async(req,res)=>{

    const id = req.params.id;
    console.log("id : ",id);

    try{

        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true});

        res.status(200).json({
            success:true,
            message:'succesfully updated',
            data:updatedTour,
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:'Failed to update',
        });
    }
}

// delete tour
export const deleteTour = async(req,res)=>{

    const id = req.params.id;
    console.log("id : ",id);

    try{

        await Tour.findByIdAndDelete(id);

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

// getSingleTour tour
export const getSingleTour = async(req,res)=>{

    const id = req.params.id;
    console.log("id : ",id);

    try{

        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success:true,
            message:'This is the Tour that you are looking for ',
            data:tour,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
    }
}


// getAllTour tour
export const getAllTour = async(req,res)=>{

    // pagination
    const page = parseInt(req.query.page);

    try{

        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);

        res.status(200).json({
            success:true,
            count:tours.length,
            message:'These are all the Tours that you are looking for ',
            data:tours,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
        
    }
};

// get tour by search

export const getTourBySearch  = async(req,res) =>{

    // i means case senesitive
    const city  = new RegExp(req.query.city, 'i') 
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{

        // gte means greater than equal
        const tours = await Tour.find({city,distance :{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize} }).populate('reviews');

        res.status(200).json({
            success:true,
            message:'successfull , Here is the tour that you require ',
            data:tours,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
    }
}


// get featured Tour tour
export const getFeaturedTour = async(req,res)=>{

    try{

        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

        res.status(200).json({
            success:true,
            message:'These are all the Tours that you are looking for ',
            data:tours,
        });

    } catch(err){
        res.status(404).json({
            success:false,
            message:'Not Found',
        });
        
    }
};

// get tour counts
export const getTourCount = async(req,res)=>{

    try{
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true,data: tourCount})
    }catch(err)
    {
        res.status(500).json({success: false,message:"failed to fetch"});

    }
}
