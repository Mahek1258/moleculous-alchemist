class Element{
    constructor(){

    }
    getElement(){
        var getElementRef = database.ref('element1/')
        getElementRef.on("value", (data)=>{
            element = data.val();
        })
    }
    updateElement(ele){
        database.ref('/').set({
            element1: ele
        })
    }
}