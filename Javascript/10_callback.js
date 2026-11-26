function prompt(username="Guest") {
    console.log("This is my name :",username);
    
}
function deleteUser(username) {
    console.log(username," is deleted");
    
}

function main(func,name){

    // If i want to call promt() then i need to write promt()
    func(name);
    // If i want to call deleteUser() then i need to write deleteUser()

    // To make the call as dynamic we will pass function as arguement that is called as ' Call Back'
}

main(deleteUser,"Raman");
main(prompt);