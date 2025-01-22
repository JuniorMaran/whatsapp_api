import UserData from "../models/UserData.js";

const CreateUserController = async (request, response) => {

    const {name, phone} = request.body;
    if(!name || !phone){
        return response.status(400).json({error: 'Campos ausentes'});
    }

    const UserCreated = await UserData.create({
        name, phone
    });
    return response.json(UserCreated);
};

export default CreateUserController;
